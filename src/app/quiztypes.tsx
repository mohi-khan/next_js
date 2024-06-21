import NavBar from "./components/NavBar";
const { pool, connectDB } = require('./db');
interface quiz_types{
  id:number,
  name:string,
}
// Connect to the database
connectDB();
const quiztypes=async function() 
 {
  try {
    const quiz = await pool.query('SELECT * from quiz_types');
    console.log(quiz.rows)
    const difficulty=await pool.query('SELECT * from quiz_difficulties')
    return(
    <NavBar quizTypes={quiz.rows} difficultyLevels={difficulty.rows} />
    )
  } catch (err) {
    console.error('Error executing query', err);
  } finally {
    // Close the pool to end the database connection
    pool.end();
  }
};
export default quiztypes;
