import { personalityQuestions } from "./personalityQuestions";
import { QuestionData, QuestionScoreData, questionScoreOnly } from "../QuestionDataType";
import { raceQuestions } from "./raceQuestions";

const allQuestions = [...personalityQuestions, ...raceQuestions];

export const allQuestionsMap = allQuestions.reduce((acc, question) => {
    acc[question.id] = question;
    return acc;
}, {} as Record<string, QuestionData>);

export const questionOrder = allQuestions.map(q => q.id);

export const allQuestionScoresMap = allQuestions.reduce((acc, question) => {
    let scoreData = questionScoreOnly(question);
    acc[question.id] = scoreData;

    return acc;
}, {} as Record<string, QuestionScoreData>);

export const questionIdToIndex = questionOrder.reduce((acc, id, index) => {
    acc[id] = index;
    return acc;
}, {} as Record<string, number>);

