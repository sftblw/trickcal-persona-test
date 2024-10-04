import {
  createContext,
  useContext,
  createSignal,
  Accessor,
  Setter,
  createEffect,
} from 'solid-js';
import { createServerCookie } from '@solid-primitives/cookies';

interface QuizContextValue {
  currentQuestionIndex: Accessor<number>;
  setCurrentQuestionIndex: Setter<number>;
  selectedAnswers: Accessor<Map<string, string>>;
  setSelectedAnswers: Setter<Map<string, string>>;
}

const QuizContext = createContext<QuizContextValue>();

export function getInitialQuizState(cookieData?: { index: number; answers: [string, string][] }) {
  return {
    currentQuestionIndex: cookieData?.index || 0,
    selectedAnswers: cookieData?.answers ? new Map(cookieData.answers) : new Map(),
  };
}

export function QuizProvider(props: { children: any; initialState?: ReturnType<typeof getInitialQuizState> }) {
  const [quizIndexCookie, setQuizIndexCookie] = createServerCookie("currentQuestionIndex");
  const [selectedAnswersCookie, setSelectedAnswersCookie] = createServerCookie("selectedAnswers");

  const initialState = props.initialState || {
    currentQuestionIndex: Number(quizIndexCookie() ?? 0),
    selectedAnswers: selectedAnswersCookie() ? new Map<string, string>(JSON.parse(selectedAnswersCookie() ?? "[]")) : new Map(),
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = createSignal(initialState.currentQuestionIndex);
  const [selectedAnswers, setSelectedAnswers] = createSignal<Map<string, string>>(initialState.selectedAnswers);

  createEffect(() => {
    setQuizIndexCookie(currentQuestionIndex().toString());
    setSelectedAnswersCookie(JSON.stringify(Array.from(selectedAnswers().entries())));
  });

  return (
    <QuizContext.Provider
      value={{
        currentQuestionIndex,
        setCurrentQuestionIndex,
        selectedAnswers,
        setSelectedAnswers,
      }}>
      {props.children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext)!;
}
