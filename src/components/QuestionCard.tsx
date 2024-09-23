import { createSignal, For } from 'solid-js';
import QuestionData from './QuestionData';


interface QuestionCardProps extends QuestionData {
    onAnswer: (answer: string) => void;
}

export default function QuestionCard(props: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = createSignal<string | null>(null);

  const handleAnswerChange = (answer: string) => {
    setSelectedAnswer(answer);
    props.onAnswer(answer);
  };

  return (
    <div class="container max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">{props.question}</h2>
      <div>
        <For each={props.answers}>
          {(answer) => (
            <label class="block mb-2">
              <input
                type="radio"
                name={`question-${props.id}`}
                value={answer}
                checked={selectedAnswer() === answer}
                onChange={() => handleAnswerChange(answer)}
              />
              {' ' + answer}
            </label>
          )}
        </For>
      </div>
    </div>
  );
}
