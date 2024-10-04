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


export interface QuestionScoreData {
    id: string;
    type: "personality" | "race";
    answers: Record<string, AnswerScoreData>;
}

export interface AnswerScoreData {
    id: string;
    personality_scores: PersonalityScore;
    race_scores: RaceScore;
}

export function questionScoreOnly(data: QuestionData): QuestionScoreData {
    return {
        id: data.id,
        type: data.type,
        answers: data.answers.reduce((acc, answer) => {
            acc[answer.id] = {
                id: answer.id,
                personality_scores: answer.personality_scores,
                race_scores: answer.race_scores
            };
            return acc;
        }, {} as Record<string, AnswerScoreData>)
    }
}