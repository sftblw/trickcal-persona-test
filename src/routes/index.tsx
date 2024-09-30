import { useNavigate } from "@solidjs/router";
import { getQuestionIdByIndex } from "~/data/allQuestions";


function Index() {
  const navigate = useNavigate();

  const startQuiz = () => {
    const firstQuestionId = getQuestionIdByIndex(0);
    if (firstQuestionId) {
      navigate(`/questions/${firstQuestionId}`);
    } else {
      console.error("No questions available");
    }
  };

  return (
    <div class="container">
      <h1 class="text-3xl font-bold">재미로 하는 트릭컬 성격 알아보기</h1>
      <p>나와 맞는 트릭컬 성격을 알아보아요</p>
      <button
        onClick={startQuiz}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        시작하기
      </button>
    </div>
  );
}

export default Index;
