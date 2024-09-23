import { useNavigate, useParams } from "@solidjs/router";

function Result() {
  const params = useParams();
  const persona = params.persona;  // URL에서 persona 값을 가져옵니다
  const navigate = useNavigate();

  const resultMessage = () => {
    switch (persona) {
      case 'erpin':
        return "You are like Erpin! Joyful and carefree!";
      case 'velvet':
        return "You are like Velvet! Bold and determined!";
      // 더 많은 캐릭터 결과를 추가할 수 있습니다
      default:
        return "Unknown persona.";
    }
  };

  return (
    <div class="container">
      <h1>Your Result</h1>
      <p>{resultMessage()}</p>
      <button onClick={() => navigate('/')}>Go Back Home</button>
    </div>
  );
}

export default Result;
