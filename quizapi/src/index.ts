import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { questions } from './db/schema/questions'
import { db } from './db/db'
import { options } from './db/schema/options'
import { sql } from 'drizzle-orm'
const app = new Hono()


app.get('/question/:id', async(c) => {
  try{
  const id=  c.req.param('id')
  const allquestions = await db.execute(sql`SELECT q.id AS quiz_id, q.question_text, a.id AS answer_id, a.option_text, q.correct_option_id
        FROM questions q
       RIGHT JOIN options a ON q.id = a.question_id
        WHERE q.quiz_type_id = ${id} AND q.difficulty_id = 2`)
  return c.json(allquestions.rows)}
  catch(error:any){
    console.log(error)
    return c.json(error)
  }
})

const port = 8779
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
