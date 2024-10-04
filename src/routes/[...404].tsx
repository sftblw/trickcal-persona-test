import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-pastelgreen-700 p-4">
      <h1 class="max-6-xs text-6xl text-pastelgreen-700 font-thin uppercase my-16">
        Not Found
      </h1>
      <A href="/" class="text-pastelgreen-600 hover:underline">
          돌아가기
      </A>
    </main>
  );
}
