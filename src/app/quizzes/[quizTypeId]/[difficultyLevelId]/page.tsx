//"use client"
import Quiz from '@/components/Quizzes';
import  quizQuestions  from '@/utils/QuizQuestions';
import { QuizQuestionOption, Quizzes,QuizAnswer } from '@/utils/types';

//import { useState } from 'react';

interface QuiztypesProps {
  params: {
    quizTypeId: string;
    difficultyLevelId: string;
  };
}

const Question = async({ params }: QuiztypesProps) => {
  //const [disable,setDisable]=useState(true);
  const quizTypeId = Number(params.quizTypeId);
  const difficultyId = Number(params.difficultyLevelId);

  const quizzes:Quizzes = await quizQuestions(quizTypeId, difficultyId);
return(
  <div>
  <Quiz quizzes={quizzes} />
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Submit</button>
  </div>
)
}
import generateQuizDifficultyCombinations from '@/utils/QuizParams';

export async function generateStaticParams() {
  const combinations = generateQuizDifficultyCombinations();
  return combinations;
}
export default Question;