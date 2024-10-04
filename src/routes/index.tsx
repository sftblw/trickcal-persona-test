import { useNavigate } from "@solidjs/router";
import { navigateStartQuiz } from "~/utils/navPaths";


function Index() {
  const navigate = useNavigate();
  return (
    <div class="container">
      <h1 class="text-3xl font-bold">재미로 하는 트릭컬 성격 알아보기</h1>
      <p>나와 맞는 트릭컬 성격을 알아보아요</p>
      <button
        onClick={async () => { navigateStartQuiz(navigate); }}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        시작하기
      </button>
    </div>
  );
}

export default Index;
