import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ErrorBoundary, Suspense } from "solid-js";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { QuizProvider } from "./store/QuizContext";
import "~/style.scss"

export default function App() {
  return (
    <QuizProvider>
    <div class="flex flex-col h-full color-gray-900">
      <Header />
      <main class="container mx-auto p-4 max-w-2xl grow-1">
        <Router
          root={(props) => (
            <>
              <Suspense><ErrorBoundary fallback={err => err}>{props.children}</ErrorBoundary></Suspense>
            </>
          )}
        >
          <FileRoutes />
        </Router>
      </main>
      <Footer />
    </div>
    </QuizProvider>
  );
}
