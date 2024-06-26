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
  
  export interface QuizQuestionOption {
    quiz_id: number;
    question_text: string;
    answer_id: number;
    option_text: string;
    correct_option_id: number;
  }
  export interface QuizAnswer {
    id: number;
    answer: string;
    is_correct: boolean;
  }
  
  export interface Quiz {
    question: string;
    answers: QuizAnswer[];
  }
  
  export interface Quizzes {
    [quiz_id: number]: Quiz;
  }