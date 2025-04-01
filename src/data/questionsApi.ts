import { cache } from "@solidjs/router";
import { QuestionData, QuestionScoreData } from "./QuestionDataType";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllQuestionScoreOnly = cache(async function(): Promise<Record<string, QuestionScoreData>> {
    "use server";
    const questions = await prisma.question.findMany({
        include: {
            answers: true
        }
    });
    const allQuestionScoresMap: Record<string, QuestionScoreData> = {};
    questions.forEach(question => {
        allQuestionScoresMap[question.id] = {
            id: question.id,
            type: question.type as "personality" | "race",
            answers: question.answers.reduce((acc, answer) => {
                acc[answer.id] = {
                    id: answer.id,
                    personality_scores: JSON.parse(answer.personalityScores),
                    race_scores: JSON.parse(answer.raceScores)
                };
                return acc;
            }, {} as Record<string, AnswerScoreData>)
        };
    });
    return allQuestionScoresMap;
}, "allQuestionScoresMap");

export const getQuestionLength = cache(async function(): Promise<number> {
    "use server";
    const count = await prisma.question.count();
    return count;
}, "getQuestionLength");

export const getIndexByQuestionId = cache(async function(questionId: string): Promise<number | undefined> {
    "use server";
    const questions = await prisma.question.findMany({
        orderBy: {
            id: 'asc'
        }
    });
    const index = questions.findIndex(question => question.id === questionId);
    if (index !== -1) {
        return index;
    }
}, "getIndexByQuestionId");

export const getQuestionIdByIndex = cache(async function(index: number): Promise<string | undefined> {
    "use server";
    const questions = await prisma.question.findMany({
        orderBy: {
            id: 'asc'
        }
    });
    if (index >= 0 && index < questions.length) {
        return questions[index].id;
    }
    return undefined;
}, "getQuestionIdByIndex");

export const getQuestionById = cache(async function(id: string): Promise<QuestionData | undefined> {
    "use server";
    const question = await prisma.question.findUnique({
        where: {
            id
        },
        include: {
            answers: true
        }
    });
    if (question) {
        return {
            id: question.id,
            type: question.type as "personality" | "race",
            question: question.question,
            answers: question.answers.map(answer => ({
                id: answer.id,
                answer: answer.answer,
                personality_scores: JSON.parse(answer.personalityScores),
                race_scores: JSON.parse(answer.raceScores)
            }))
        };
    }
    return undefined;
}, "getQuestionById");
