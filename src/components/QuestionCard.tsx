import { createSignal, For } from 'solid-js';
import { QuestionData, AnswerData } from '~/data/QuestionDataType';

interface QuestionCardProps {
  question: QuestionData;
  onAnswer: (answer: string) => void;
}

export default function QuestionCard(props: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = createSignal<string | null>(null);

  const handleAnswerChange = (answer: AnswerData) => {
    setSelectedAnswer(answer.answer);
    props.onAnswer(answer.answer);
  };

  return (
    <div class="container max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">{props.question.question}</h2>
      <div>
        <For each={props.question.answers}>
          {(answer) => (
            <label class="block mb-2">
              <input
                type="radio"
                name={`question-${props.question.id}`}
                value={answer.answer}
                checked={selectedAnswer() === answer.answer}
                onChange={() => handleAnswerChange(answer)}
              />
              {' ' + answer.answer}
            </label>
          )}
        </For>
      </div>
    </div>
  );
}
