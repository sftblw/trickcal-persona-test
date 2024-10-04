import { Navigator} from "@solidjs/router";
import { getQuestionIdByIndex } from "~/data/questionsApi";

export async function navigateStartQuiz(navigate: Navigator) {
    const firstQuestionId = await getQuestionIdByIndex(0);
    if (firstQuestionId) {
        navigate(`/questions/${firstQuestionId}`);
    } else {
        navigate('/');
        console.error("No questions available");
    }
};