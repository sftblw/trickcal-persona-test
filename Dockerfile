# Use official Node.js image with Alpine (lightweight)
# See all available tags at https://hub.docker.com/_/node
FROM node:18-alpine AS base
WORKDIR /usr/src/app

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies into temp directory to cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/prod
COPY package.json pnpm-lock.yaml /temp/prod/
WORKDIR /temp/prod
RUN pnpm install --frozen-lockfile --prod

# Copy node_modules from temp directory and then copy all project files into the image
FROM base AS build
WORKDIR /usr/src/app
COPY --from=install /temp/prod/node_modules node_modules
COPY public public
COPY src src
COPY . .

# [optional] Build the project
ENV NODE_ENV=production
RUN pnpm run build

# Final stage: create a minimal image for production
FROM base AS release
WORKDIR /usr/src/app

# Copy built output from the build stage
COPY --from=build /usr/src/app/.output .output

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port that the app runs on
EXPOSE 3000/tcp

# Use a non-root user for better security
USER node

# Start the app
CMD ["node", ".output/server/index.mjs"]
