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

  const curQuestionIndexOrUndefined = createAsync(() => getIndexByQuestionId(curQuestionId()), {initialValue: 0});
  const curQuestion = createAsync(() => getQuestionById(curQuestionId()));
  const allQuestionLength = createAsync(() => getQuestionLength(), {initialValue: 0}) ;

  const curQuestionIndex = createMemo(() => {
    const curIndex = curQuestionIndexOrUndefined();
    if (curIndex == undefined) {
      navigate("/");
    } else {
      return curIndex;
    }
  })

  const progress = () => ((quizContext.currentQuestionIndex() + 1) / allQuestionLength()) * 100;

  const [selectedAnswer, setSelectedAnswer] = createSignal('');

  createEffect(() => {
    let curAnswers = quizContext.selectedAnswers();
    let curAnswer = curAnswers.get(curQuestionId());
    if (curAnswer) { setSelectedAnswer(curAnswer); }
  });

  const isAnswered = createMemo(() => selectedAnswer() != '');

  createEffect(() => {
    if (curQuestion()) {

      let index = curQuestionIndex();

      if (index == null) {
        // fire and forget
        navigateStartQuiz(navigate);
      }

      else if (index !== quizContext.currentQuestionIndex()) {
        quizContext.setCurrentQuestionIndex(index);
        // setSelectedAnswer('');
      }
    }
  });

  const handleNavigation = async (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' ? quizContext.currentQuestionIndex() + 1 : quizContext.currentQuestionIndex() - 1;
    const newQuestionId = await getQuestionIdByIndex(newIndex);
    if (newQuestionId) {
      navigate(`/questions/${newQuestionId}`);
      setSelectedAnswer('');
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
      setSelectedAnswer(answer);
    }
  };

  return (
    <div class="container mx-auto p-4 max-w-2xl">
      <div class="mb-4 bg-gray-200 rounded-full h-10 dark:bg-gray-700 relative">
        <div class="bg-pastelgreen-600 p-2 h-10 rounded-full" style={`width: ${progress()}%`}>
          <div class="text-white absolute w-full text-center font-black outlined-gray">
            {quizContext.currentQuestionIndex() + 1} / { allQuestionLength() }
          </div>
        </div>
      </div>
      <Show when={curQuestion()}>
        <QuestionCard 
          question={curQuestion()!}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          onAnswer={handleAnswer}
        />
      </Show>
      <div class="mt-4 grid grid-cols-2 gap-2 justify-between">
        <button 
          onClick={async () => handleNavigation('prev')}
          disabled={quizContext.currentQuestionIndex() === 0}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-8 rounded-xl disabled:opacity-50 grid-col-1"
        >
          이전
        </button>
        <Show when={isAnswered()} fallback={<div class="py-4 px-8 "></div>}>
          <button 
            onClick={() => handleNavigation('next')}
            class="bg-pastelgreen-500 hover:bg-pastelgreen-700 text-white font-bold py-4 px-8 rounded-xl grid-col-2"
          >
            {quizContext.currentQuestionIndex() === allQuestionLength() - 1 ? '결과 보기' : '다음'}
          </button>
        </Show>
      </div>
    </div>
  );
}

export default Questions;
