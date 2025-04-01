import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const questions = [
  {
    id: 'weekend-leak',
    type: 'personality',
    question: '주말 아침, 오랜만에 푹 자고 일어났더니 집에 물이 새기 시작했습니다. 어떻게 대처하시겠습니까?',
    answers: [
      {
        id: 'mad',
        answer: '우선 물이 더 퍼지지 않게 막고, 상황을 천천히 분석해서 문제를 해결할 방법을 찾아요.',
        personalityScores: '{"mad": 4, "cool": 1, "naive": 0, "jolly": 0, "gloomy": 0}',
        raceScores: '{"dragon": 2, "fairy": 0, "witch": 2, "elf": 1, "spirit": 0, "ghost": 0, "furry": 0}'
      },
      {
        id: 'cool',
        answer: '정해진 절차에 따라 손해를 최소화하고, 즉시 전문가에게 연락을 합니다.',
        personalityScores: '{"mad": 0, "cool": 5, "naive": 0, "jolly": 0, "gloomy": 0}',
        raceScores: '{"dragon": 1, "fairy": 0, "witch": 1, "elf": 3, "spirit": 0, "ghost": 0, "furry": 0}'
      },
      {
        id: 'naive',
        answer: '금방 끝날 일이니 대수롭지 않게 넘기고, 신경 쓰지 않아요.',
        personalityScores: '{"mad": 0, "cool": 0, "naive": 4, "jolly": 1, "gloomy": 0}',
        raceScores: '{"dragon": 0, "fairy": 2, "witch": 0, "elf": 0, "spirit": 0, "ghost": 2, "furry": 1}'
      },
      {
        id: 'jolly',
        answer: '물 새는 것쯤은 우스운 일이라며 농담을 던지고 상황을 가볍게 넘겨요.',
        personalityScores: '{"mad": 0, "cool": 0, "naive": 1, "jolly": 5, "gloomy": 0}',
        raceScores: '{"dragon": 0, "fairy": 3, "witch": 0, "elf": 0, "spirit": 1, "ghost": 1, "furry": 0}'
      },
      {
        id: 'gloomy',
        answer: '도저히 방법이 없다고 생각하고 당황한 채로 아무것도 하지 못합니다.',
        personalityScores: '{"mad": 0, "cool": 0, "naive": 0, "jolly": 0, "gloomy": 5}',
        raceScores: '{"dragon": 0, "fairy": 0, "witch": 2, "elf": 0, "spirit": 2, "ghost": 0, "furry": 1}'
      }
    ]
  },
  // Add more questions here
];

const results = [
  {
    id: 'cool-dragon',
    title: '냉정한 욕망의 설계자',
    personality: 'cool',
    race: 'dragon',
    summaryDescription: '당신은 냉정한 판단력과 용족의 강인함을 결합한 성향을 가지고 있습니다. 어떤 상황에서도 차분하게 문제를 해결하며, 자신의 목표를 이루기 위해 신중하게 계획을 세워 나갑니다.',
    personalityDescription: '냉정한 성격을 가진 당신은 감정보다는 이성에 따라 결정을 내리며, 주변에서 혼란이 발생해도 흔들리지 않고 침착하게 대처합니다. 목표를 이루기 위해서는 꾸준한 노력이 중요하다고 생각하며, 돌발 상황에도 규칙과 논리를 기반으로 행동합니다.',
    speciesDescription: '용족은 강력한 욕망을 지닌 종족으로, 그 목표를 이루기 위해 끊임없이 노력합니다. 당신도 그들과 마찬가지로 냉정하고 신중하게 자신의 길을 개척해 나가며, 용족의 힘을 바탕으로 계획적으로 행동합니다.',
    advice: '때로는 이성적으로 모든 것을 해결하려다 보면 감정을 놓칠 수 있습니다. 자신의 목표를 중요시하되, 주변 사람들과의 감정적인 교류에도 신경 써보세요.'
  },
  // Add more results here
];

async function main() {
  for (const question of questions) {
    await prisma.question.create({
      data: {
        id: question.id,
        type: question.type,
        question: question.question,
        answers: {
          create: question.answers.map(answer => ({
            id: answer.id,
            answer: answer.answer,
            personalityScores: answer.personalityScores,
            raceScores: answer.raceScores
          }))
        }
      }
    });
  }

  for (const result of results) {
    await prisma.result.create({
      data: {
        id: result.id,
        title: result.title,
        personality: result.personality,
        race: result.race,
        summaryDescription: result.summaryDescription,
        personalityDescription: result.personalityDescription,
        speciesDescription: result.speciesDescription,
        advice: result.advice
      }
    });
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
