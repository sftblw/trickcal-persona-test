import { cache } from "@solidjs/router";
import { QuestionData, QuestionScoreData } from "./QuestionDataType";
import { allQuestionScoresMap, allQuestionsMap, questionIdToIndex, questionOrder } from "./serverOnly/allQuestions";

export const getAllQuestionScoreOnly = cache(async function(): Promise<Record<string, QuestionScoreData>> {
    "use server";
    return allQuestionScoresMap;
}, "allQuestionScoresMap");

export const getQuestionLength = cache(async function(): Promise<number> {
    "use server";
    return questionOrder.length;
}, "getQuestionLength");

export const getIndexByQuestionId = cache(async function(questionId: string): Promise<number | undefined> {
    "use server";
    const index = questionIdToIndex[questionId];
    if (index !== undefined) {
        return index;
    }
}, "getIndexByQuestionId");

export const getQuestionIdByIndex = cache(async function(index: number): Promise<string | undefined> {
    "use server";
    if (index >= 0 && index < questionOrder.length) {
        return questionOrder[index];
    }
    return undefined;
}, "getQuestionIdByIndex");

export const getQuestionById = cache(async function(id: string): Promise<QuestionData | undefined> {
    "use server";
    return allQuestionsMap[id] || undefined;
}, "getQuestionById");
