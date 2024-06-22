export interface QuizType {
    id: number;
    name: string;
  }
  
  export interface DifficultyLevel {
    id: number;
    name: string;
    quiz_type_id: number;
  }
  
  export interface QuizTypesProps {
    quizTypes: QuizType[];
    difficultyLevels: DifficultyLevel[];
  }
  