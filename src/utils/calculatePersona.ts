import { AnswerData } from '~/data/QuestionDataType';
import { getAllQuestionScoreOnly } from '~/data/questionsApi';

type PersonalityType = keyof AnswerData['personality_scores'];
type RaceType = keyof AnswerData['race_scores'];

export async function calculatePersona(answers: Map<string, string>): Promise<{ personality: PersonalityType, race: RaceType }> {
  const personalityScores: Record<PersonalityType, number> = {
    mad: 0, cool: 0, naive: 0, jolly: 0, gloomy: 0
  };
  const raceScores: Record<RaceType, number> = {
    dragon: 0, fairy: 0, witch: 0, elf: 0, spirit: 0, ghost: 0, furry: 0
  };

  const allQuestionScoreMap = await getAllQuestionScoreOnly();

  answers.forEach((answerId, questionId) => {
    const questionScoreData = allQuestionScoreMap[questionId];
    if (questionScoreData) {
      
      const selectedAnswer = questionScoreData.answers[answerId];
      if (selectedAnswer) {

        if (questionScoreData.type === 'personality') {
          Object.entries(selectedAnswer.personality_scores).forEach(([key, value]) => {
            personalityScores[key as PersonalityType] += value;
          });
        } else if (questionScoreData.type === 'race') {
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
