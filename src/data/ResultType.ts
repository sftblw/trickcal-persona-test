export interface PersonaResult {
  title: string;                  // '광기 + 용족'처럼 종족과 성격 조합을 표시

  personality: string;            // '광기'처럼 성격을 표시
  race: string;                   // '용족'처럼 종족을 표시

  summaryDescription: string;     // 종합 요약 설명 (성격과 종족을 결합한 설명)
  personalityDescription: string; // 성격에 대한 구체적 설명
  speciesDescription: string;     // 종족에 대한 구체적 설명
  advice: string;                 // 조언이나 주의할 점 (선택 사항)
}
