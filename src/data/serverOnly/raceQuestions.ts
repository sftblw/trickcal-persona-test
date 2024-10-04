import { QuestionData } from "../QuestionDataType";

export const raceQuestions: QuestionData[] = [
    {
      id: "life-goal",
      type: "race",
      question: "당신의 인생 목표는 무엇인가요?",
      answers: [
        {
          id: 'dragon',
          answer: "나만의 특별한 목표를 이루는 것, 아무도 가지 않은 길을 가보고 싶어요.",
          personality_scores: { mad: 2, cool: 1, naive: 0, jolly: 1, gloomy: 0 },
          race_scores: { dragon: 5, fairy: 0, witch: 1, elf: 0, spirit: 1, ghost: 0, furry: 0 }
        },
        {
          id: 'fairy',
          answer: "매일이 행복했으면 좋겠어요. 걱정 없이 살 수 있다면 충분해요.",
          personality_scores: { mad: 0, cool: 0, naive: 2, jolly: 3, gloomy: 0 },
          race_scores: { dragon: 0, fairy: 5, witch: 0, elf: 0, spirit: 0, ghost: 1, furry: 1 }
        },
        {
          id: 'witch',
          answer: "열심히 살아서 최고의 자리에 오르는 것, 치열하게 노력할 거예요.",
          personality_scores: { mad: 1, cool: 3, naive: 0, jolly: 0, gloomy: 1 },
          race_scores: { dragon: 1, fairy: 0, witch: 5, elf: 1, spirit: 0, ghost: 0, furry: 0 }
        },
        {
          id: 'elf',
          answer: "사회의 중요한 일원이 되는 것, 모두에게 필요한 사람이 되고 싶어요.",
          personality_scores: { mad: 0, cool: 3, naive: 0, jolly: 1, gloomy: 1 },
          race_scores: { dragon: 0, fairy: 0, witch: 1, elf: 5, spirit: 1, ghost: 0, furry: 0 }
        },
        {
          id: 'spirit',
          answer: "내 신념을 지키며, 타협 없이 사는 것. 양보는 없어요.",
          personality_scores: { mad: 1, cool: 2, naive: 0, jolly: 0, gloomy: 2 },
          race_scores: { dragon: 1, fairy: 0, witch: 0, elf: 1, spirit: 5, ghost: 0, furry: 0 }
        },
        {
          id: 'ghost',
          answer: "인생을 유머로 가득 채워서 모든 걸 재미있게 살아가는 것.",
          personality_scores: { mad: 1, cool: 0, naive: 1, jolly: 3, gloomy: 0 },
          race_scores: { dragon: 0, fairy: 1, witch: 0, elf: 0, spirit: 0, ghost: 5, furry: 1 }
        },
        {
          id: 'furry',
          answer: "정해진 계획 없이 자연스럽게 흐르는 대로 살아가고 싶어요.",
          personality_scores: { mad: 0, cool: 0, naive: 3, jolly: 1, gloomy: 1 },
          race_scores: { dragon: 0, fairy: 1, witch: 0, elf: 0, spirit: 0, ghost: 1, furry: 5 }
        }
      ]
    },
    {
      id: "stress-handling",
      type: "race",
      question: "스트레스를 받으면 어떻게 대처하시나요?",
      answers: [
        {
          id: 'dragon',
          answer: "시간을 들여서 나만의 방식으로 풀어요. 잠깐 시간을 가져보죠.",
          personality_scores: { mad: 3, cool: 1, naive: 0, jolly: 1, gloomy: 0 },
          race_scores: { dragon: 5, fairy: 0, witch: 1, elf: 0, spirit: 1, ghost: 0, furry: 0 }
        },
        {
          id: 'fairy',
          answer: "별일 아니라고 생각하고 넘겨요. 곧 괜찮아지겠죠.",
          personality_scores: { mad: 0, cool: 0, naive: 3, jolly: 2, gloomy: 0 },
          race_scores: { dragon: 0, fairy: 5, witch: 0, elf: 0, spirit: 0, ghost: 1, furry: 1 }
        },
        {
          id: 'witch',
          answer: "이 기회를 통해 더 강해질 수 있다고 믿어요. 도전을 즐깁니다.",
          personality_scores: { mad: 1, cool: 3, naive: 0, jolly: 0, gloomy: 1 },
          race_scores: { dragon: 1, fairy: 0, witch: 5, elf: 1, spirit: 0, ghost: 0, furry: 0 }
        },
        {
          id: 'elf',
          answer: "주변의 도움을 요청해요. 혼자보다 함께 해결하는 게 좋아요.",
          personality_scores: { mad: 0, cool: 2, naive: 1, jolly: 2, gloomy: 0 },
          race_scores: { dragon: 0, fairy: 1, witch: 0, elf: 5, spirit: 0, ghost: 1, furry: 0 }
        },
        {
          id: 'spirit',
          answer: "원칙을 지키면서 참고 버텨요. 규칙을 따르는 게 최선이에요.",
          personality_scores: { mad: 1, cool: 3, naive: 0, jolly: 0, gloomy: 1 },
          race_scores: { dragon: 1, fairy: 0, witch: 1, elf: 1, spirit: 5, ghost: 0, furry: 0 }
        },
        {
          id: 'ghost',
          answer: "농담을 던지며 분위기를 가볍게 만들어요. 웃음이 가장 좋은 해결책이에요.",
          personality_scores: { mad: 1, cool: 0, naive: 1, jolly: 4, gloomy: 0 },
          race_scores: { dragon: 0, fairy: 1, witch: 0, elf: 0, spirit: 0, ghost: 5, furry: 1 }
        },
        {
          id: 'furry',
          answer: "상황을 그냥 흘려보내고 기다려요. 시간 해결사라고 믿어요.",
          personality_scores: { mad: 0, cool: 0, naive: 2, jolly: 0, gloomy: 3 },
          race_scores: { dragon: 0, fairy: 1, witch: 0, elf: 0, spirit: 0, ghost: 1, furry: 5 }
        }
      ]
    },
    {
      id: "most-valued",
      type: "race",
      question: "당신이 가장 소중하게 여기는 가치는 무엇인가요?",
      answers: [
        {
          id: 'dragon',
          answer: "나만의 독창성과 개성을 보여주는 것, 그게 제일 중요해요.",
          personality_scores: { mad: 3, cool: 0, naive: 1, jolly: 1, gloomy: 0 },
          race_scores: { dragon: 5, fairy: 0, witch: 1, elf: 0, spirit: 1, ghost: 0, furry: 0 }
        },
        {
          id: 'fairy',
          answer: "아무 걱정 없이 평화롭게 사는 것, 마음의 평안이 가장 중요하죠.",
          personality_scores: { mad: 0, cool: 0, naive: 3, jolly: 2, gloomy: 0 },
          race_scores: { dragon: 0, fairy: 5, witch: 0, elf: 0, spirit: 0, ghost: 1, furry: 1 }
        },
        {
          id: 'witch',
          answer: "열심히 노력해서 성공하는 것, 성취감을 중요하게 생각해요.",
          personality_scores: { mad: 1, cool: 3, naive: 0, jolly: 0, gloomy: 1 },
          race_scores: { dragon: 1, fairy: 0, witch: 5, elf: 1, spirit: 0, ghost: 0, furry: 0 }
        },
        {
          id: 'elf',
          answer: "모두에게 도움이 되는 사람이 되는 것, 사회적 역할이 중요해요.",
          personality_scores: { mad: 0, cool: 3, naive: 1, jolly: 1, gloomy: 0 },
          race_scores: { dragon: 0, fairy: 1, witch: 0, elf: 5, spirit: 1, ghost: 0, furry: 0 }
        },
        {
          id: 'spirit',
          answer: "정직하게 내 신념을 지키는 것, 원칙을 고수해요.",
          personality_scores: { mad: 1, cool: 2, naive: 0, jolly: 0, gloomy: 2 },
          race_scores: { dragon: 1, fairy: 0, witch: 1, elf: 1, spirit: 5, ghost: 0, furry: 0 }
        },
        {
          id: 'ghost',
          answer: "재미있게 살고, 웃음을 주는 사람이 되는 것. 유쾌한 삶을 추구해요.",
          personality_scores: { mad: 1, cool: 0, naive: 1, jolly: 4, gloomy: 0 },
          race_scores: { dragon: 0, fairy: 1, witch: 0, elf: 0, spirit: 0, ghost: 5, furry: 1 }
        },
        {
          id: 'furry',
          answer: "자유롭고 부담 없는 삶을 사는 것, 누구의 간섭도 없이요.",
          personality_scores: { mad: 1, cool: 0, naive: 2, jolly: 1, gloomy: 1 },
          race_scores: { dragon: 1, fairy: 1, witch: 0, elf: 0, spirit: 0, ghost: 0, furry: 5 }
        }
      ]
    },
    {
      id: "future-you",
      type: "race",
      question: "10년 후 당신은 어떤 모습일까요?",
      answers: [
        {
          id: 'dragon',
          answer: "내 분야에서 독보적으로 성공한 모습일 거예요. 최고의 자리에 오를 거예요.",
          personality_scores: { mad: 2, cool: 2, naive: 0, jolly: 1, gloomy: 0 },
          race_scores: { dragon: 5, fairy: 0, witch: 1, elf: 1, spirit: 0, ghost: 0, furry: 0 }
        },
        {
          id: 'fairy',
          answer: "걱정 없이 웃으며 살고 있을 거예요. 편안한 삶이 최고죠.",
          personality_scores: { mad: 0, cool: 0, naive: 3, jolly: 2, gloomy: 0 },
          race_scores: { dragon: 0, fairy: 5, witch: 0, elf: 0, spirit: 0, ghost: 1, furry: 1 }
        },
        {
          id: 'witch',
          answer: "치열한 경쟁을 이기고 최고의 자리에 서 있을 거예요.",
          personality_scores: { mad: 1, cool: 3, naive: 0, jolly: 0, gloomy: 1 },
          race_scores: { dragon: 1, fairy: 0, witch: 5, elf: 1, spirit: 0, ghost: 0, furry: 0 }
        },
        {
          id: 'elf',
          answer: "중요한 사회적 위치에 올라 있을 거예요. 영향력을 가지고 있겠죠.",
          personality_scores: { mad: 0, cool: 3, naive: 0, jolly: 1, gloomy: 1 },
          race_scores: { dragon: 0, fairy: 1, witch: 0, elf: 5, spirit: 1, ghost: 0, furry: 0 }
        },
        {
          id: 'spirit',
          answer: "내 신념을 굳건히 지키며 살아가고 있을 거예요.",
          personality_scores: { mad: 1, cool: 2, naive: 0, jolly: 0, gloomy: 2 },
          race_scores: { dragon: 1, fairy: 0, witch: 0, elf: 1, spirit: 5, ghost: 0, furry: 0 }
        },
        {
          id: 'ghost',
          answer: "여전히 웃음이 가득한 삶을 살고 있을 거예요.",
          personality_scores: { mad: 1, cool: 0, naive: 1, jolly: 4, gloomy: 0 },
          race_scores: { dragon: 0, fairy: 1, witch: 0, elf: 0, spirit: 0, ghost: 5, furry: 1 }
        },
        {
          id: 'furry',
          answer: "특별한 계획 없이 그날그날 흘러가는 대로 살고 있을 거예요.",
          personality_scores: { mad: 0, cool: 0, naive: 3, jolly: 1, gloomy: 1 },
          race_scores: { dragon: 0, fairy: 1, witch: 0, elf: 0, spirit: 0, ghost: 1, furry: 5 }
        }
      ]
    },
    {
      id: "dream-world",
      type: "race",
      question: "당신이 꿈꾸는 이상적인 세상은 어떤 모습인가요?",
      answers: [
        {
          id: 'dragon',
          answer: "모두가 자신의 독특함을 존중받는 세상, 그게 이상적인 세상이에요.",
          personality_scores: { mad: 2, cool: 1, naive: 1, jolly: 1, gloomy: 0 },
          race_scores: { dragon: 5, fairy: 1, witch: 0, elf: 0, spirit: 1, ghost: 0, furry: 0 }
        },
        {
          id: 'fairy',
          answer: "걱정과 근심이 없는 평화로운 세상, 그곳에서 살고 싶어요.",
          personality_scores: { mad: 0, cool: 0, naive: 3, jolly: 2, gloomy: 0 },
          race_scores: { dragon: 0, fairy: 5, witch: 0, elf: 1, spirit: 0, ghost: 1, furry: 0 }
        },
        {
          id: 'witch',
          answer: "노력하는 사람에게 성공의 기회가 주어지는 공정한 세상.",
          personality_scores: { mad: 1, cool: 3, naive: 0, jolly: 0, gloomy: 1 },
          race_scores: { dragon: 1, fairy: 0, witch: 5, elf: 1, spirit: 0, ghost: 0, furry: 0 }
        },
        {
          id: 'elf',
          answer: "모두가 자신의 역할을 충실히 하며 조화롭게 사는 세상.",
          personality_scores: { mad: 0, cool: 3, naive: 1, jolly: 1, gloomy: 0 },
          race_scores: { dragon: 0, fairy: 1, witch: 0, elf: 5, spirit: 1, ghost: 0, furry: 0 }
        },
        {
          id: 'spirit',
          answer: "원칙과 규율이 지켜지는 정의로운 세상.",
          personality_scores: { mad: 1, cool: 2, naive: 0, jolly: 0, gloomy: 2 },
          race_scores: { dragon: 1, fairy: 0, witch: 1, elf: 1, spirit: 5, ghost: 0, furry: 0 }
        },
        {
          id: 'ghost',
          answer: "웃음이 끊이지 않는 즐거운 세상, 모든 순간이 재미있어요.",
          personality_scores: { mad: 1, cool: 0, naive: 1, jolly: 4, gloomy: 0 },
          race_scores: { dragon: 0, fairy: 1, witch: 0, elf: 0, spirit: 0, ghost: 5, furry: 1 }
        },
        {
          id: 'furry',
          answer: "누구에게도 간섭받지 않는 자유로운 세상.",
          personality_scores: { mad: 1, cool: 0, naive: 2, jolly: 1, gloomy: 1 },
          race_scores: { dragon: 1, fairy: 1, witch: 0, elf: 0, spirit: 0, ghost: 0, furry: 5 }
        }
      ]
    }
  ];
  