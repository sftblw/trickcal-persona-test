import { useNavigate } from "@solidjs/router";
import { navigateStartQuiz } from "~/utils/navPaths";


function Index() {
  const navigate = useNavigate();
  return (
    <div class="flex flex-col h-full gap-2 items-center">
      <h1 class="text-3xl font-bold text-pastelgreen-900">재미로 하는 트릭컬 성격 알아보기</h1>
      <p class="py-8">나와 맞는 트릭컬 성격을 알아보아요!</p>
      <button
        onClick={async () => { navigateStartQuiz(navigate); }}
        class="bg-pastelgreen-500 hover:bg-pastelgreen-700 text-white font-bold rounded p-4 w-full"
      >
        시작하기
      </button>
    </div>
  );
}

export default Index;
