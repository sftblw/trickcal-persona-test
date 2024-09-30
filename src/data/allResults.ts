// src/data/results.ts

import coolResults from "./results/coolResults";
import gloomyResults from "./results/gloomyResults";
import jollyResults from "./results/jollyResults";
import madResults from "./results/madResults";
import naiveResults from "./results/naiveResults";
import { PersonaResult } from "./ResultType";

export const personaResults: Record<string, PersonaResult> = {
  // gloomy results
  ...gloomyResults,

  // jolly results
  ...jollyResults,

  // naive results
  ...naiveResults,

  // mad results
  ...madResults,

  // cool results (아직 내용이 없다면 빈 객체로 둡니다)
  ...coolResults
};
