import { QuestionData } from "./QuestionDataType";

export const personalityQuestions: QuestionData[] = [
  {
    question: "주말 아침, 오랜만에 푹 자고 일어났더니 집에 물이 새기 시작했습니다. 어떻게 대처하시겠습니까?",
    id: "weekend-leak",
    type: "personality",
    answers: [
      {
        id: 'mad',
        answer: "우선 물이 더 퍼지지 않게 막고, 상황을 천천히 분석해서 문제를 해결할 방법을 찾아요.",
        personality_scores: { mad: 4, cool: 1, naive: 0, jolly: 0, gloomy: 0 },
        race_scores: { dragon: 2, fairy: 0, witch: 2, elf: 1, spirit: 0, ghost: 0, furry: 0 }
      },
      {
        id: 'cool',
        answer: "정해진 절차에 따라 손해를 최소화하고, 즉시 전문가에게 연락을 합니다.",
        personality_scores: { mad: 0, cool: 5, naive: 0, jolly: 0, gloomy: 0 },
        race_scores: { dragon: 1, fairy: 0, witch: 1, elf: 3, spirit: 0, ghost: 0, furry: 0 }
      },
      {
        id: 'naive',
        answer: "금방 끝날 일이니 대수롭지 않게 넘기고, 신경 쓰지 않아요.",
        personality_scores: { mad: 0, cool: 0, naive: 4, jolly: 1, gloomy: 0 },
        race_scores: { dragon: 0, fairy: 2, witch: 0, elf: 0, spirit: 0, ghost: 2, furry: 1 }
      },
      {
        id: 'jolly',
        answer: "물 새는 것쯤은 우스운 일이라며 농담을 던지고 상황을 가볍게 넘겨요.",
        personality_scores: { mad: 0, cool: 0, naive: 1, jolly: 5, gloomy: 0 },
        race_scores: { dragon: 0, fairy: 3, witch: 0, elf: 0, spirit: 1, ghost: 1, furry: 0 }
      },
      {
        id: 'gloomy',
        answer: "도저히 방법이 없다고 생각하고 당황한 채로 아무것도 하지 못합니다.",
        personality_scores: { mad: 0, cool: 0, naive: 0, jolly: 0, gloomy: 5 },
        race_scores: { dragon: 0, fairy: 0, witch: 2, elf: 0, spirit: 2, ghost: 0, furry: 1 }
      }
    ]
  },
  {
    question: "여행 계획을 세웠는데 갑자기 폭우 예보가 나왔습니다. 어떻게 대처하시겠습니까?",
    id: "rainy-travel",
    type: "personality",
    answers: [
      {
        id: 'mad',
        answer: "비 때문에 방해되지 않도록 대안을 생각해 바로 새로운 계획을 세웁니다.",
        personality_scores: { mad: 3, cool: 0, naive: 1, jolly: 0, gloomy: 0 },
        race_scores: { dragon: 2, fairy: 0, witch: 1, elf: 1, spirit: 0, ghost: 1, furry: 0 }
      },
      {
        id: 'cool',
        answer: "계획이 틀어지긴 했지만, 차분히 재정비해서 예정된 활동에 맞는 대책을 마련합니다.",
        personality_scores: { mad: 0, cool: 4, naive: 0, jolly: 0, gloomy: 0 },
        race_scores: { dragon: 0, fairy: 0, witch: 2, elf: 2, spirit: 1, ghost: 0, furry: 0 }
      },
      {
        id: 'naive',
        answer: "비가 오든 말든 일단은 여행을 즐길 방법을 찾아볼 겁니다. 그다지 심각하다고 생각하진 않아요.",
        personality_scores: { mad: 0, cool: 0, naive: 3, jolly: 2, gloomy: 0 },
        race_scores: { dragon: 0, fairy: 2, witch: 0, elf: 0, spirit: 0, ghost: 1, furry: 2 }
      },
      {
        id: 'jolly',
        answer: "비도 추억이 될 거라며 비 속에서도 즐거운 시간을 보내려 합니다.",
        personality_scores: { mad: 0, cool: 0, naive: 1, jolly: 5, gloomy: 0 },
        race_scores: { dragon: 0, fairy: 1, witch: 0, elf: 0, spirit: 0, ghost: 2, furry: 1 }
      },
      {
        id: 'gloomy',
        answer: "여행 자체가 의미 없다고 생각하고 모든 계획을 취소해버립니다.",
        personality_scores: { mad: 0, cool: 0, naive: 0, jolly: 0, gloomy: 5 },
        race_scores: { dragon: 0, fairy: 0, witch: 1, elf: 1, spirit: 1, ghost: 0, furry: 1 }
      }
    ]
  },
  {
    question: "새로운 직장에서 첫 회의가 열립니다. 당신의 첫 인상은 무엇일까요?",
    id: "first-meeting-impression",
    type: "personality",
    answers: [
      {
        id: 'mad',
        answer: "최대한 적극적으로 새로운 아이디어를 제시하며 주도적으로 참여합니다.",
        personality_scores: { mad: 5, cool: 0, naive: 0, jolly: 0, gloomy: 0 },
        race_scores: { dragon: 2, fairy: 0, witch: 2, elf: 0, spirit: 0, ghost: 0, furry: 0 }
      },
      {
        id: 'cool',
        answer: "사람들과 조율하며 전체적으로 회의를 이끌어가는 데 힘씁니다.",
        personality_scores: { mad: 0, cool: 5, naive: 0, jolly: 0, gloomy: 0 },
        race_scores: { dragon: 1, fairy: 0, witch: 1, elf: 2, spirit: 1, ghost: 0, furry: 0 }
      },
      {
        id: 'naive',
        answer: "어려운 점 없이 자연스럽게 행동하며 회의에 빠르게 적응합니다.",
        personality_scores: { mad: 0, cool: 0, naive: 5, jolly: 0, gloomy: 0 },
        race_scores: { dragon: 0, fairy: 1, witch: 0, elf: 0, spirit: 0, ghost: 1, furry: 2 }
      },
      {
        id: 'jolly',
        answer: "즐겁게 회의에 임하며 좋은 인상을 주려고 노력합니다.",
        personality_scores: { mad: 0, cool: 0, naive: 1, jolly: 5, gloomy: 0 },
        race_scores: { dragon: 0, fairy: 2, witch: 0, elf: 0, spirit: 0, ghost: 2, furry: 0 }
      },
      {
        id: 'gloomy',
        answer: "처음부터 일이 너무 어렵다고 생각하고, 어떻게 풀어나갈지 고민만 하게 됩니다.",
        personality_scores: { mad: 0, cool: 0, naive: 0, jolly: 0, gloomy: 5 },
        race_scores: { dragon: 0, fairy: 0, witch: 1, elf: 1, spirit: 1, ghost: 0, furry: 1 }
      }
    ]
  },
  {
    question: "친구들이 모여서 함께 활동을 하려고 할 때, 당신은 어떻게 준비합니까?",
    id: "group-activity",
    type: "personality",
    answers: [
      {
        id: 'mad',
        answer: "최대한 앞장서서 역할을 나누고, 친구들과의 활동을 리드합니다.",
        personality_scores: { mad: 4, cool: 1, naive: 0, jolly: 0, gloomy: 0 },
        race_scores: { dragon: 2, fairy: 0, witch: 2, elf: 0, spirit: 1, ghost: 0, furry: 0 }
      },
      {
        id: 'cool',
        answer: "친구들끼리 조율할 수 있도록 신중하게 판단하고 준비합니다.",
        personality_scores: { mad: 0, cool: 5, naive: 0, jolly: 0, gloomy: 0 },
        race_scores: { dragon: 1, fairy: 0, witch: 1, elf: 2, spirit: 1, ghost: 0, furry: 0 }
      },
      {
        id: 'naive',
        answer: "일단 가벼운 마음으로 참여하며, 일이 진행되면 그때 상황에 맞춰 준비합니다.",
        personality_scores: { mad: 0, cool: 0, naive: 4, jolly: 0, gloomy: 0 },
        race_scores: { dragon: 0, fairy: 1, witch: 0, elf: 1, spirit: 0, ghost: 1, furry: 2 }
      },
      {
        id: 'jolly',
        answer: "적극적으로 분위기를 띄우며 친구들과 함께 즐거운 시간을 보내려고 합니다.",
        personality_scores: { mad: 0, cool: 0, naive: 1, jolly: 5, gloomy: 0 },
        race_scores: { dragon: 0, fairy: 2, witch: 0, elf: 0, spirit: 0, ghost: 2, furry: 0 }
      },
      {
        id: 'gloomy',
        answer: "사람들과의 협력이 부담스러워서 뒷전에서 눈치를 봅니다.",
        personality_scores: { mad: 0, cool: 0, naive: 0, jolly: 0, gloomy: 5 },
        race_scores: { dragon: 0, fairy: 0, witch: 1, elf: 0, spirit: 1, ghost: 0, furry: 2 }
      }
    ]
  },
  {
    question: "갑작스러운 팀 프로젝트를 맡게 되었습니다. 당신의 첫 번째 행동은?",
    id: "team-project",
    type: "personality",
    answers: [
      {
        id: 'mad',
        answer: "새로운 시도를 해보며 기존의 방식을 벗어난 창의적인 해결책을 제시합니다.",
        personality_scores: { mad: 5, cool: 0, naive: 0, jolly: 0, gloomy: 0 },
        race_scores: { dragon: 2, fairy: 0, witch: 2, elf: 0, spirit: 0, ghost: 0, furry: 0 }
      },
      {
        id: 'cool',
        answer: "체계적인 계획을 세우고, 차근차근 단계를 밟으며 프로젝트를 이끕니다.",
        personality_scores: { mad: 0, cool: 5, naive: 0, jolly: 0, gloomy: 0 },
        race_scores: { dragon: 1, fairy: 0, witch: 1, elf: 2, spirit: 1, ghost: 0, furry: 0 }
      },
      {
        id: 'naive',
        answer: "큰 고민 없이 바로 시작해가면서 상황에 맞춰 대처합니다.",
        personality_scores: { mad: 0, cool: 0, naive: 5, jolly: 0, gloomy: 0 },
        race_scores: { dragon: 0, fairy: 1, witch: 0, elf: 0, spirit: 0, ghost: 1, furry: 2 }
      },
      {
        id: 'jolly',
        answer: "흥미로운 프로젝트라며 신나게 참여하고 팀원들과의 협력을 즐깁니다.",
        personality_scores: { mad: 0, cool: 0, naive: 1, jolly: 5, gloomy: 0 },
        race_scores: { dragon: 0, fairy: 2, witch: 0, elf: 0, spirit: 0, ghost: 2, furry: 0 }
      },
      {
        id: 'gloomy',
        answer: "프로젝트의 난관을 걱정하며 미리부터 어려움을 겪을까 두렵습니다.",
        personality_scores: { mad: 0, cool: 1, naive: 0, jolly: 0, gloomy: 4 },
        race_scores: { dragon: 0, fairy: 0, witch: 1, elf: 1, spirit: 1, ghost: 0, furry: 1 }
      }
    ]
  }
];
