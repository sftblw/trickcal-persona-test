import { createAsync, useParams } from "@solidjs/router";
import { createMemo } from "solid-js";
import { getResultOfPersona } from "~/data/resultsApi";

export default function ResultCard() {
  const params = useParams();
  const personaKey = params.persona;

  const result = createAsync(async () => await getResultOfPersona(personaKey));

  if (!result) {
    return <div>Unknown persona</div>;
  }

  const personalityStrMap: Record<string, string> = {
    'cool': '냉정',
    'gloomy': '우울', 
    'jolly': '활발',
    'mad': '광기',
    'naive': '순수',
    '': '오류'
  }

  const raceStrMap: Record<string, string> = {
    'dragon': '용족',
    'elf': '엘프', 
    'fairy': '요정',
    'furry': '수인',
    'ghost': '유령',
    'spirit': '정령',
    'witch': '마녀',
    '': '오류'
  }

  const personalityStr = createMemo(() => personalityStrMap[result()?.personality ?? '']);
  const raceStr = createMemo(() => raceStrMap[result()?.race ?? '']);

  return (
    <div class="container max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 class="text-4xl font-bold mb-4 text-center text-pastelgreen-600 font-katuri">{result()?.title}</h1>

      <div class="flex flex-row items-center justify-center gap-6 text-center my-6">
        <div class="flex flex-col gap-2">
          <img src={`/results/${result()?.personality}-icon.svg`} alt={result()?.personality} class="w-20 h-20"/>
          <span class="text-lg font-katuri">성격 : {personalityStr()}</span>
        </div>
        <div class="flex flex-col gap-2">
          <img src={`/results/${result()?.race}-icon.png`} alt={result()?.race} class="w-20 h-20"/>
          <span class="text-lg font-katuri">종족 : {raceStr()}</span>
        </div>
      </div>

      <p class="mb-6 text-lg font-semibold">{result()?.summaryDescription}</p>      
      
      <h2 class="text-2xl font-semibold mb-2 text-green-600 font-katuri">당신의 성격은 {personalityStr()}!</h2>
      <p class="mb-4">{result()?.personalityDescription}</p>
      
      <h2 class="text-2xl font-semibold mb-2 text-purple-600 font-katuri">당신의 종족은 {raceStr()}!</h2>
      <p class="mb-4">{result()?.speciesDescription}</p>
      
      <h3 class="text-xl font-semibold mb-2 text-red-600 font-katuri">조언</h3>
      <p>{result()?.advice}</p>
    </div>
  );
}
