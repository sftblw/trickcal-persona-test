export default interface QuestionData {
    id: number;
    type: 'personality' | 'race';
    question: string;
    answers: string[];
}
