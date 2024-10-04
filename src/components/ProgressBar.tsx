import { createSignal } from 'solid-js';

export default function ProgressBar() {
  const [progress, setProgress] = createSignal(0);

  return (
    <div class="w-full bg-gray-200 rounded-full overflow-hidden">
      <div
        class="h-2 bg-pastelgreen-500 rounded-full"
        style={{ width: `${progress()} %` }}
      ></div>
    </div>
  );
}
