import { createAsync, useNavigate, useParams } from '@solidjs/router';
import { createEffect, createMemo, createSignal, Show } from 'solid-js';
import QuestionCard from '~/components/QuestionCard';
import { getQuestionIdByIndex, getQuestionById, getIndexByQuestionId, getQuestionLength } from '~/data/questionsApi';
import { useQuiz } from '~/store/QuizContext';
import { calculatePersona } from '~/utils/calculatePersona';
import { navigateStartQuiz } from '~/utils/navPaths';

function Questions() {
  const params = useParams();
  const navigate = useNavigate();

  const quizContext = useQuiz();

  const curQuestionId = createMemo(() => params.id);

  const curQuestionIndex = createAsync(() => getIndexByQuestionId(curQuestionId()), {initialValue: 0});
  const curQuestion = createAsync(() => getQuestionById(curQuestionId()));
  const allQuestionLength = createAsync(() => getQuestionLength(), {initialValue: 0}) ;

  const progress = () => ((quizContext.currentQuestionIndex() + 1) / allQuestionLength()) * 100;

  const [isAnswered, setIsAnswered] = createSignal(false);

  createEffect(() => {
    if (curQuestion()) {

      let index = curQuestionIndex();

      if (index == null) {
        // fire and forget
        navigateStartQuiz(navigate);
      }

      else if (index !== quizContext.currentQuestionIndex()) {
        quizContext.setCurrentQuestionIndex(index);
        setIsAnswered(false);
      }
    }
  });

  const handleNavigation = async (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' ? quizContext.currentQuestionIndex() + 1 : quizContext.currentQuestionIndex() - 1;
    const newQuestionId = await getQuestionIdByIndex(newIndex);
    if (newQuestionId) {
      navigate(`/questions/${newQuestionId}`);
      setIsAnswered(false);
    } else if (direction === 'next') {      
      const { personality, race } = await calculatePersona(quizContext.selectedAnswers());
      navigate(`/results/${personality}-${race}`);
    }
  };

  const handleAnswer = (answer: string) => {
    if (curQuestion()) {
      let curAnswers = quizContext.selectedAnswers();
      curAnswers.set(curQuestionId(), answer);
      quizContext.setSelectedAnswers(curAnswers);
      setIsAnswered(true);
    }
  };  

  return (
    <div class="container mx-auto p-4 max-w-2xl">
      <div class="mb-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div class="bg-blue-600 h-2.5 rounded-full" style={`width: ${progress()}%`}></div>
      </div>
      <Show when={curQuestion()}>
        <QuestionCard 
          question={curQuestion()!}
          onAnswer={handleAnswer}
        />
      </Show>
      <div class="flex justify-between mt-6">
        <button 
          onClick={async () => handleNavigation('prev')}
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
            {quizContext.currentQuestionIndex() === allQuestionLength() - 1 ? '결과 보기' : '다음'}
          </button>
        </Show>
      </div>
    </div>
  );
}

export default Questions;
