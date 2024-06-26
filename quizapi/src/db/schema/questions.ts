import { numeric, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { integer } from 'drizzle-orm/sqlite-core';
export const questions = pgTable('questions', {
    id: serial('id').primaryKey(),
    quiz_type_id: numeric('quiz_type_id'),
    difficulty_id:numeric('difficulty_id'),
    question_text: varchar('question_text'),
    correct_option_id:  numeric('correct_option_id'),
  });
  