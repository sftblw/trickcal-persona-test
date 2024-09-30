export interface PersonalityScore {
    mad: number;
    cool: number;
    naive: number;
    jolly: number;
    gloomy: number;
  }
  
  export interface RaceScore {
    dragon: number;
    fairy: number;
    witch: number;
    elf: number;
    spirit: number;
    ghost: number;
    furry: number;
  }

  export interface AnswerData {
    id: string;
    answer: string;
    personality_scores: PersonalityScore;
    race_scores: RaceScore;
  }
  
  export interface QuestionData {
    id: string;
    type: "personality" | "race";
    question: string;
    answers: AnswerData[];
  }
  