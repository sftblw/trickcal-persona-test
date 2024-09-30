import { createContext, useContext, createSignal, Accessor, Setter, createEffect } from 'solid-js';

interface QuizContextValue {
  currentQuestionIndex: Accessor<number>;
  setCurrentQuestionIndex: Setter<number>;
  selectedAnswers: Accessor<Map<string, string>>;
  setSelectedAnswers: Setter<Map<string, string>>;
}

const QuizContext = createContext<QuizContextValue>();

export function getInitialQuizState(cookieData?: { index: number; answers: string[] }) {
  return {
    currentQuestionIndex: cookieData?.index || 0,
    selectedAnswers: cookieData?.answers || [],
  };
}

export function QuizProvider(props: { children: any; initialState?: ReturnType<typeof getInitialQuizState> }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = createSignal(0);
  const [selectedAnswers, setSelectedAnswers] = createSignal<Map<string, string>>(new Map());

  return (
    <QuizContext.Provider value={{ 
      currentQuestionIndex,
      setCurrentQuestionIndex,
      selectedAnswers: selectedAnswers,
      setSelectedAnswers: setSelectedAnswers }}>
      {props.children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext)!;
}
