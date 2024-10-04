# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1.1-alpine AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS build
WORKDIR /usr/src/app
COPY --from=install /temp/prod/node_modules node_modules
COPY public public
COPY src src
COPY . .


# [optional] tests & build
ENV NODE_ENV=production
RUN bun run build

# copy production dependencies and source code into final image
FROM base AS release
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/.output .output

ENV NODE_ENV=production
ENV PORT=3000

# run the app
USER bun
EXPOSE 3000/tcp

ENTRYPOINT [ "bun", "run", ".output/server/index.mjs" ]