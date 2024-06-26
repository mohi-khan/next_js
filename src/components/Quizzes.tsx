import  quizQuestions  from '@/utils/QuizQuestions';
import { QuizQuestionOption, Quizzes,QuizAnswer } from '@/utils/types';

interface QuiztypesProps {
    quizzes: Quizzes;
  }

  const Quiz: React.FC<QuiztypesProps> = ({ quizzes })  => {
 
  return (
    <div className='text-gray-900 bg-white shadow-lg rounded-lg p-6'>
     
      {Object.entries(quizzes).map(([quiz_id, quiz]) => (
        <div key={quiz_id}  className="mb-4">
          <h2 className="text-xl font-semibold mb-4">{quiz.question}</h2>
          <ul>
            {quiz.answers.map((answer:QuizAnswer) => (
              
              <li key={answer.id} className='text-gray'>
              <input type="checkbox" id={`answer-${answer.id}`} data-correct={answer.is_correct}  />
              <label>{answer.answer}</label>
            </li>
           
              
            ))}
         </ul>
        </div>
      ))}
    </div>
  );
};



export default Quiz;
