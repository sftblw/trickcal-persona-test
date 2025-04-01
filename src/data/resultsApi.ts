import { cache } from "@solidjs/router";
import { PrismaClient } from "@prisma/client";
import { PersonaResult } from "./ResultType";

const prisma = new PrismaClient();

export const getResultOfPersona = cache(async function(persona: string): Promise<PersonaResult> {
    "use server";
    const result = await prisma.result.findUnique({
        where: {
            id: persona
        }
    });
    if (result) {
        return {
            title: result.title,
            personality: result.personality,
            race: result.race,
            summaryDescription: result.summaryDescription,
            personalityDescription: result.personalityDescription,
            speciesDescription: result.speciesDescription,
            advice: result.advice || ""
        };
    }
    throw new Error(`Result not found for persona: ${persona}`);
}, "getResultOfPersona");
