import { createAsync, useParams } from "@solidjs/router";
import { getResultOfPersona } from "~/data/resultsApi";

export default function ResultCard() {
  const params = useParams();
  const personaKey = params.persona;

  const result = createAsync(async () => await getResultOfPersona(personaKey));

  if (!result) {
    return <div>Unknown persona</div>;
  }

  return (
    <div class="container max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 class="text-4xl font-bold mb-4 text-center text-pastelgreen-600">{result()?.title}</h1>
      <p class="mb-6 text-lg font-semibold">{result()?.summaryDescription}</p>
      
      <h2 class="text-2xl font-semibold mb-2 text-green-600">성격 설명</h2>
      <p class="mb-4">{result()?.personalityDescription}</p>
      
      <h2 class="text-2xl font-semibold mb-2 text-purple-600">종족 설명</h2>
      <p class="mb-4">{result()?.speciesDescription}</p>
      
      <h3 class="text-xl font-semibold mb-2 text-red-600">조언</h3>
      <p>{result()?.advice}</p>
    </div>
  );
}
