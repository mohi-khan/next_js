import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
const { pool, connectDB } = require('./db');
import NavBar from './components/NavBar'
interface quiz_types{
  id:number,
  name:string,
}
// Connect to the database
connectDB();

// Example query to test the connection
async function  Quiztypes() 
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



export default function Home() {
 return(
  <section>
   
    <Suspense fallback='<p>loading....<p/>'>
    <Quiztypes/>
    </Suspense>
  </section>
 )
}
