import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { QuizProvider } from "./store/QuizContext";

export default function App() {
  return (
    <QuizProvider>
    <div class="font-sans">
      <Header />
      <Router
        root={(props) => (
          <>
            <Suspense>{props.children}</Suspense>
          </>
        )}
      >
        <FileRoutes />
      </Router>
      <Footer />
    </div>
    </QuizProvider>
  );
}
