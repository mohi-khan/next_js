const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables from .env file

// Configure the PostgreSQL connection using environment variables
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Function to connect to the database
const connectDB = async () => {
  try {
    await pool.connect();
    console.log('Connected to the PostgreSQL database');
  } catch (err) {
    console.error('Error connecting to the PostgreSQL database', err);
  }
};

// Export the pool and connectDB function
module.exports = { pool, connectDB };
