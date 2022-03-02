import mysql from 'mysql2';
import 'dotenv/config';

const db = mysql.createPool({
	connectionLimit: 10,
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

export default db.promise();
