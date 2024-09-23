import { useNavigate } from "@solidjs/router";

function Index() {
  const navigate = useNavigate();

  return (
    <div class="container">
      <h1 class="text-3xl font-bold">Welcome to the Trickcal Persona Test!</h1>
      <p>Find out which Trickcal character matches your personality!</p>
      <button
        onClick={() => navigate('/questions/1')}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Test
      </button>
    </div>
  );
}

export default Index;

