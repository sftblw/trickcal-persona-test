import { useNavigate } from "@solidjs/router";
import ResultCard from "~/components/ResultCard";

function Result() {
  const navigate = useNavigate();

  return (
    <div class="container mx-auto p-4">
      <ResultCard />
      <div class="text-center mt-6">
        <button 
          onClick={() => navigate('/')}
          class="bg-pastelgreen-500 hover:bg-pastelgreen-700 text-white font-bold py-2 px-4 rounded"
        >
          다시 하기
        </button>
      </div>
    </div>
  );
}

export default Result;
