import { cache } from "@solidjs/router";
import { PersonaResult } from "./ResultType";
import { personaResults } from "./serverOnly/allResults";

export const getResultOfPersona = cache(async function(persona: string): Promise<PersonaResult> {
    "use server";
    return personaResults[persona];
}, "getResultOfPersona");