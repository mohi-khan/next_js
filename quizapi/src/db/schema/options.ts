import { numeric, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { integer } from 'drizzle-orm/sqlite-core';
import { questions } from './questions';
export const options = pgTable('options', {
    id: serial('id').primaryKey(),
    question_id: numeric('question_id').references(() => questions.id),
    option_text: varchar('option_text', { length: 256 }),
});
