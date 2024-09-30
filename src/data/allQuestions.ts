import { personalityQuestions } from "./personalityQuestions";
import { QuestionData } from "./QuestionDataType";
import { raceQuestions } from "./raceQuestions";

const allQuestions = [...personalityQuestions, ...raceQuestions];

export const allQuestionsMap = allQuestions.reduce((acc, question) => {
  acc[question.id] = question;
  return acc;
}, {} as { [key: string]: QuestionData });

export const questionOrder = allQuestions.map(q => q.id);

export const questionIdToIndex = questionOrder.reduce((acc, id, index) => {
    acc[id] = index;
    return acc;
  }, {} as { [key: string]: number });
  

export function getQuestionIdByIndex(index: number): string | undefined {
  if (index >= 0 && index < questionOrder.length) {
    return questionOrder[index];
  }
  return undefined;
}

export function getQuestionById(id: string) {
    return allQuestionsMap[id] || null;
}
