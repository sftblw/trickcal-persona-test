import { useParams } from "@solidjs/router";

interface Persona {
  name: string;
  description: string;
}

const personas: Persona[] = [
  { name: 'The Adventurer', description: 'You love exploring new things and taking risks.' },
  // Add more personas here
];

export default function ResultCard() {
  const params = useParams();
  const personaName = params.persona;

  const persona = personas.find(p => p.name === personaName);

  return (
    <div class="container max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 class="text-3xl font-bold mb-4">{`You are like ${persona?.name}!`}</h1>
      <p>
        {persona?.description || 'Loading...'} 
      </p>
    </div>
  );
}

