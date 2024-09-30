import { QuestionData, AnswerData } from '~/data/QuestionDataType';
import { allQuestionsMap } from '~/data/allQuestions';

type PersonalityType = keyof AnswerData['personality_scores'];
type RaceType = keyof AnswerData['race_scores'];

export function calculatePersona(answers: Map<string, string>): { personality: PersonalityType, race: RaceType } {
  const personalityScores: Record<PersonalityType, number> = {
    mad: 0, cool: 0, naive: 0, jolly: 0, gloomy: 0
  };
  const raceScores: Record<RaceType, number> = {
    dragon: 0, fairy: 0, witch: 0, elf: 0, spirit: 0, ghost: 0, furry: 0
  };


  answers.forEach((answerId, questionId) => {
    const question = allQuestionsMap[questionId];
    if (question) {
      const answerMap = question.answers.reduce((acc, answer) => {
        acc[answer.id] = answer;
        return acc;
      }, {} as { [key: string]: AnswerData });
      
      const selectedAnswer = answerMap[answerId];
      if (selectedAnswer) {

        if (question.type === 'personality') {
          Object.entries(selectedAnswer.personality_scores).forEach(([key, value]) => {
            personalityScores[key as PersonalityType] += value;
          });
        } else if (question.type === 'race') {
          Object.entries(selectedAnswer.race_scores).forEach(([key, value]) => {
            raceScores[key as RaceType] += value;
          });
        }
      }
    }
  });

  const topPersonality = Object.entries(personalityScores).reduce((a, b) => a[1] > b[1] ? a : b)[0] as PersonalityType;
  const topRace = Object.entries(raceScores).reduce((a, b) => a[1] > b[1] ? a : b)[0] as RaceType;

  return { personality: topPersonality, race: topRace };
}
