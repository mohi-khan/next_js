import pool from './db';
interface row{
    id:number
}
const generateQuizDifficultyCombinations = async () => {
  const client = await pool.connect();
  try {
    const quizTypesQuery = 'SELECT id FROM quiz_types';
    const difficultyLevelsQuery = 'SELECT id FROM quiz_difficulties';

    const quizTypesResult = await client.query(quizTypesQuery);
    const difficultyLevelsResult = await client.query(difficultyLevelsQuery);

    const quizTypes = quizTypesResult.rows.map((row:row) => row.id);
    const difficultyLevels = difficultyLevelsResult.rows.map((row:row) => row.id);

    const combinations = quizTypes.flatMap((quizTypeId:number) =>
      difficultyLevels.map((difficultyId:number) => ({ quizTypeId: String(quizTypeId), difficultyId: String(difficultyId) }))
    );

    return combinations;
  } catch (err) {
    console.error('Error generating combinations:', err);
    throw err;
  } finally {
    client.release();
  }
};

export default generateQuizDifficultyCombinations;
