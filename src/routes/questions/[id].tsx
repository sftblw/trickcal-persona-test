import { useNavigate, useParams } from '@solidjs/router';
import { createEffect } from 'solid-js';
import QuestionCard from '~/components/QuestionCard';
import { questions } from '~/data/questions';
import { useQuiz } from '~/store/QuizContext';

function Questions() {
  const params = useParams();
  const navigate = useNavigate();
  const { currentQuestionIndex, setCurrentQuestionIndex, answers, setAnswers } = useQuiz();

  createEffect(() => {
    const id = parseInt(params.id);
    if (!isNaN(id) && id !== currentQuestionIndex() + 1) {
      setCurrentQuestionIndex(id - 1);
    }
  });

  const handleNext = () => {
    if (currentQuestionIndex() < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex() + 1);
      navigate(`/questions/${currentQuestionIndex() + 2}`);
    } else {
      navigate('/result');
    }
  };

  const handleAnswer = (answer: string) => {
    setAnswers([...answers(), { questionId: questions[currentQuestionIndex()].id, answer }]);
  };

  const currentQuestion = () => questions[currentQuestionIndex()];

  return (
    <div class="container">
      <QuestionCard 
        id={currentQuestion().id}
        type={currentQuestion().type}
        question={currentQuestion().question}
        answers={currentQuestion().answers}
        onAnswer={handleAnswer}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Questions;
