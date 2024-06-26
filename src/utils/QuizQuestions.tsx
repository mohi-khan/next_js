import { QuizQuestionOption,Quizzes } from "./types";
const quizQuestions= async(quizType:number, difficultyLevel:number) => {
    console.log(quizType);
    try {
          const response = await fetch(`http://localhost:8779/question/${quizType}`,{cache: 'no-store'});
   
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
    
      
      const quizzes:Quizzes = {};
   
      const questions:Quizzes[]=result
  // Convert the fetched data to a map
      console.log(result)
      result.forEach((row: any) => {
        if (!quizzes[row.quiz_id]) {
          quizzes[row.quiz_id] = {
            question: row.question_text,
            answers: []
          };
        }
        quizzes[row.quiz_id].answers.push({
          id: row.answer_id,
          answer: row.option_text,
          is_correct: (row.answer_id===row.correct_option_id)?true:false
        });
      });
  
      return quizzes;
    } catch (err) {
      console.error('Error fetching quizzes:', err);
      throw err;
    } finally {
    //  client.release();
    }
  }

export default quizQuestions;
  