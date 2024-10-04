import { createMemo, For, Accessor } from 'solid-js';
import { QuestionData, AnswerData } from '~/data/QuestionDataType';

interface QuestionCardProps {
  question: QuestionData;
  selectedAnswer: Accessor<string | null>;
  setSelectedAnswer: (value: string | null) => void;
  onAnswer: (answerId: string) => void;
}

export default function QuestionCard(props: QuestionCardProps) {
  const handleAnswerChange = (answer: AnswerData) => {
    props.setSelectedAnswer(answer.id);
    props.onAnswer(answer.id);
  };

  const imageUrl = createMemo(() => `/questions/${props.question.id}.png`)

  return (
    <div class="container mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col">
      <h2 class="text-2xl mb-4 font-katuri">{props.question.question}</h2>
      <img src={imageUrl()} class="m-4 h-50" />
      <div>
        <For each={props.question.answers}>
          {(answer) => (
            <label class="block my-4 flex flex-row items-center">
              <input
                type="radio"
                name={`question-${props.question.id}`}
                value={answer.answer}
                class="mr-2"
                checked={props.selectedAnswer() === answer.id}
                onChange={() => handleAnswerChange(answer)}
              />
              <span>{' ' + answer.answer}</span>
            </label>
          )}
        </For>
      </div>
    </div>
  );
}
