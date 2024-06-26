import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { questions } from "./schema/questions";


const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "mypass",
    database: "quizzes",
  });

export const db = drizzle(pool);





