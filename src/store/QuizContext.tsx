import { createContext, useContext, createSignal, Accessor, Setter } from 'solid-js';
import { questions } from '../data/questions';

type Answer = { questionId: number; answer: string };

interface QuizContextValue {
  currentQuestionIndex: Accessor<number>;
  setCurrentQuestionIndex: Setter<number>;
  answers: Accessor<Answer[]>;
  setAnswers: Setter<Answer[]>;
}

const QuizContext = createContext<QuizContextValue>();

export function QuizProvider(props: { children: any }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = createSignal(0);
  const [answers, setAnswers] = createSignal<Answer[]>([]);

  return (
    <QuizContext.Provider value={{ currentQuestionIndex, setCurrentQuestionIndex, answers, setAnswers }}>
      {props.children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext)!;
}
