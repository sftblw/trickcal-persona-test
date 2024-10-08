import { PersonaResult } from "../../ResultType";

const naiveResults: Record<string, PersonaResult> = {
    // 순수 (Naive)
    'naive-dragon': {
      title: "순수한 욕망의 불꽃",
      personality: "naive",
      race: "dragon",
      summaryDescription: "당신은 순수한 마음을 지닌 용족으로, 복잡하게 고민하지 않고 자신만의 길을 찾아가는 성향을 가지고 있습니다. 용족의 강력한 힘과 순수함이 결합된 당신은, 주변의 어려움도 크게 신경 쓰지 않으며 자신만의 직감을 믿고 나아갑니다.",
      personalityDescription: "순수한 성격을 가진 당신은 복잡한 문제를 어렵게 생각하지 않고, 있는 그대로 받아들입니다. 신뢰가 가는 사람들에게 크게 의심 없이 마음을 열고, 새로운 도전을 두려워하지 않습니다.",
      speciesDescription: "용족은 강력한 힘을 지닌 종족으로, 자신들의 욕망을 이루기 위해 매우 집중합니다. 하지만 당신은 그 강한 힘을 순수한 시선으로 바라보며, 필요할 때 그 힘을 자연스럽게 발휘합니다.",
      advice: "순수함은 큰 힘이지만, 때로는 더 깊게 생각하고 신중한 결정을 내려야 할 때도 있습니다. 주위 사람들의 조언을 귀 기울여 듣는 것도 도움이 될 거예요."
    },
    'naive-elf': {
      title: "꿈은 이루라고 있는 거야",
      personality: "naive",
      race: "elf",
      summaryDescription: "당신은 엘프의 지적 호기심과 순수함이 결합된 성향을 가지고 있습니다. 항상 새로운 것을 배우고 싶어하며, 복잡한 규칙이나 절차에 얽매이지 않고 간단하고 순수한 방식으로 세상을 탐구합니다.",
      personalityDescription: "순수한 성격을 가진 당신은 세상에 대해 깊게 고민하기보다는, 본능적으로 느끼는 감정과 직감에 따라 움직입니다. 때로는 복잡한 논리나 계획 대신, 직관적인 해결책을 찾는 데 능숙합니다.",
      speciesDescription: "엘프는 지적 호기심이 넘치며, 자연과 과학의 조화를 이루는 종족입니다. 그들은 자신들의 지식에 자부심을 느끼고, 효율성을 중요하게 생각합니다.",
      advice: "당신의 단순한 사고방식은 문제 해결에 큰 도움이 될 수 있지만, 가끔은 더 깊게 생각하고 고민해야 할 필요가 있습니다. 조언을 받아들이는 것도 좋은 방법이에요."
    },
    'naive-fairy': {
      title: "천진난만한 날갯짓",
      personality: "naive",
      race: "fairy",
      summaryDescription: "당신은 요정의 순수함을 완벽하게 체현하고 있는 사람입니다. 걱정 없이 그 순간의 즐거움에 집중하며, 사소한 일에도 큰 기쁨을 느낍니다. 당신의 순수한 마음은 주변 사람들에게도 밝은 에너지를 전달합니다.",
      personalityDescription: "순수한 성격을 가진 당신은 그 순간의 기쁨을 가장 중요하게 여기며, 복잡한 문제에 깊게 빠져들기보다는 '어떻게든 되겠지'라고 생각하는 낙천적인 태도를 가지고 있습니다.",
      speciesDescription: "요정은 귀여운 외모와 소박한 삶의 방식을 가지고 있는 종족으로, 날개는 있지만 날 수 없습니다. 그들은 현실에 충실하며, 복잡한 고민보다는 그날의 즐거움을 찾는 데 더 집중합니다.",
      advice: "순수한 시선으로 세상을 바라보는 당신은 긍정적이지만, 때때로 현실적인 상황도 고려해야 합니다. 주변 사람들에게 더 신경을 쓰면 당신의 순수함이 더욱 빛날 거예요."
    },
    'naive-ghost': {
      title: "순수 + 유령",
      personality: "naive",
      race: "ghost",
      summaryDescription: "당신은 유령의 장난스러운 성향과 순수한 마음을 결합한 독특한 성향을 가지고 있습니다. 삶을 코미디처럼 여기는 당신은, 복잡한 고민 없이 간단하게 즐길 수 있는 방법을 찾는 데 능숙합니다.",
      personalityDescription: "순수한 성격을 가진 당신은 걱정이 없어 보일 만큼 간단하게 문제를 해결합니다. 때로는 엉뚱한 행동을 하기도 하지만, 그 속에서 당신만의 순수한 즐거움을 찾습니다.",
      speciesDescription: "유령은 죽음이 없는 세계에서 생겨난 존재로, 그들은 삶을 가볍게 여기며 웃음과 즐거움을 중요하게 생각합니다. 그들은 현실의 복잡한 문제를 쉽게 넘기고, 그 순간을 즐기려 합니다.",
      advice: "당신의 순수함은 많은 사람들에게 밝은 에너지를 주지만, 때로는 더 깊게 생각해야 할 상황도 있습니다. 주변의 반응에 귀 기울이는 것도 좋습니다."
    },
    'naive-spirit': {
      title: "맑은 바람의 고집",
      personality: "naive",
      race: "fairy",
      summaryDescription: "정령의 자유로움과 순수함이 결합된 당신은, 복잡하게 얽매이지 않고 자연스럽게 삶을 즐기며 살아갑니다. 어떤 상황에서도 여유롭게 대처하며, 그 속에서 순수한 기쁨을 찾습니다.",
      personalityDescription: "순수한 성격을 가진 당신은 세상의 복잡한 규칙에 얽매이지 않고, 자유롭게 살아갑니다. 다른 사람들은 당신의 행동을 엉뚱하게 볼 수도 있지만, 당신은 그 속에서 진정한 행복을 느낍니다.",
      speciesDescription: "정령은 자연의 요소나 개념에서 탄생한 존재로, 규칙에 얽매이지 않고 자유롭게 떠돌며 살아가는 종족입니다. 그들은 세상을 복잡하게 보지 않고, 단순하고 순수한 마음으로 살아갑니다.",
      advice: "당신의 순수한 자유로움은 큰 강점이지만, 때로는 주변 사람들에게 조금 더 신경을 써야 할 필요가 있습니다. 균형을 맞추면 더 좋은 결과를 얻을 수 있습니다."
    },
    'naive-witch': {
      title: "감각적인 노력가",
      personality: "naive",
      race: "witch",
      summaryDescription: "당신은 마녀의 강력한 능력과 순수한 마음을 동시에 지닌 성향을 가지고 있습니다. 복잡한 계획보다는 직감에 따라 행동하며, 그 속에서 자신만의 길을 찾아갑니다.",
      personalityDescription: "순수한 성격을 가진 당신은 목표를 세우더라도 그 과정을 너무 어렵게 고민하지 않습니다. 복잡한 방법 대신 간단하고 명쾌한 해결책을 선호하며, 그 과정에서 자신만의 방식으로 문제를 해결합니다.",
      speciesDescription: "마녀는 강력한 능력주의자들로, 어두운 마력을 바탕으로 자신을 성장시키는 종족입니다. 그들은 규칙을 중요시하지 않고, 자신의 능력에 집중합니다.",
      advice: "당신의 순수한 마음은 강력한 능력을 뒷받침해줍니다. 하지만 때때로 조금 더 신중한 접근이 필요할 수 있으니, 주변의 상황도 잘 살피면 좋을 것입니다."
    },
    'naive-furry': {
      title: "자연 그대로의 순수함",
      personality: "naive",
      race: "furry",
      summaryDescription: "당신은 수인의 단순하고 본능적인 성향에 순수함을 더한 독특한 성격을 가지고 있습니다. 복잡한 계획보다는 본능에 따라 즉흥적으로 행동하며, 그 속에서 순수한 기쁨을 찾습니다.",
      personalityDescription: "순수한 성격을 가진 당신은 복잡한 문제를 깊이 생각하기보다는 그 순간의 본능적인 선택을 따릅니다. 복잡한 계획보다는 간단한 해결책을 찾으며, 그로 인해 주변 사람들에게도 쉽게 다가갈 수 있습니다.",
      speciesDescription: "수인은 케모미미와 같은 동물적 특징을 가진 종족으로, 단순하고 본능에 충실한 삶을 살아갑니다. 그들은 과도한 고민 없이, 그 순간의 본능적인 선택을 따릅니다.",
      advice: "순수한 본능은 큰 힘이 될 수 있지만, 가끔은 더 깊이 생각하고 신중한 결정을 내릴 필요도 있습니다. 때때로 주변 사람들의 의견을 참고해보세요."
    }
  };
  
  export default naiveResults;