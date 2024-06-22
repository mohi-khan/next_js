import NavBar from "./NavBar";
import pool from "../utils/db"
import { QuizType } from "../utils/types";
// Connect to the database

const QuizTypes=async function() 
 {
  try {
    const client = await pool.connect();
    const quiz = await client.query('SELECT * from quiz_types');
    console.log(quiz.rows)
    const difficulty=await client.query('SELECT * from quiz_difficulties')
    await client.release();
    return(
    <NavBar quizTypes={quiz.rows} difficultyLevels={difficulty.rows} />
    )
  } catch (err) {
    console.error('Error executing query', err);
  } finally {
    // Close the pool to end the database connection
   // pool.end();
  }
};
export default QuizTypes;
