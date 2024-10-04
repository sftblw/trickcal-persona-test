import { useNavigate, useParams } from '@solidjs/router';
import { createEffect, createMemo, createSignal, Show } from 'solid-js';
import QuestionCard from '~/components/QuestionCard';
import { getQuestionById, getQuestionIdByIndex, questionIdToIndex, questionOrder } from '~/data/allQuestions';
import { useQuiz } from '~/store/QuizContext';
import { calculatePersona } from '~/utils/calculatePersona';

function Questions() {
  const params = useParams();
  const navigate = useNavigate();

  const quizContext = useQuiz();

  const [isAnswered, setIsAnswered] = createSignal(false);
  const quizId = createMemo<string>((_: string) => {
    let index = quizContext.currentQuestionIndex();
    return getQuestionIdByIndex(index) ?? '';
  }, '');


  createEffect(() => {
    const currentQuestion = getQuestionById(params.id);
    if (currentQuestion) {
      let index = questionIdToIndex[currentQuestion.id];
      if (index !== quizContext.currentQuestionIndex()) {
        quizContext.setCurrentQuestionIndex(index);
        setIsAnswered(false);
      }
    }
  });

  const handleNavigation = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' ? quizContext.currentQuestionIndex() + 1 : quizContext.currentQuestionIndex() - 1;
    const newQuestionId = getQuestionIdByIndex(newIndex);
    if (newQuestionId) {
      navigate(`/questions/${newQuestionId}`);
      setIsAnswered(false);
    } else if (direction === 'next') {      
      const { personality, race } = calculatePersona(quizContext.selectedAnswers());
      navigate(`/results/${personality}-${race}`);
    }
  };


  const handleAnswer = (answer: string) => {
    const currentQuestion = getQuestionById(params.id);
    if (currentQuestion) {
      let curAnswers = quizContext.selectedAnswers();
      curAnswers.set(quizId(), answer);
      quizContext.setSelectedAnswers(curAnswers);
      setIsAnswered(true);
    }
  };

  const currentQuestion = () => getQuestionById(params.id);
  const progress = () => ((quizContext.currentQuestionIndex() + 1) / questionOrder.length) * 100;

  return (
    <div class="container mx-auto p-4 max-w-2xl">
      <div class="mb-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div class="bg-blue-600 h-2.5 rounded-full" style={`width: ${progress()}%`}></div>
      </div>
      <Show when={currentQuestion()}>
        <QuestionCard 
          question={currentQuestion()!}
          onAnswer={handleAnswer}
        />
      </Show>
      <div class="flex justify-between mt-6">
        <button 
          onClick={() => handleNavigation('prev')}
          disabled={quizContext.currentQuestionIndex() === 0}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l disabled:opacity-50"
        >
          이전
        </button>
        <Show when={isAnswered()}>
          <button 
            onClick={() => handleNavigation('next')}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          >
            {quizContext.currentQuestionIndex() === questionOrder.length - 1 ? '결과 보기' : '다음'}
          </button>
        </Show>
      </div>
    </div>
  );
}

export default Questions;
