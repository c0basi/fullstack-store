import express from 'express';
import 'dotenv/config';

import db from './config/db.js';
import productRoutes from './routes/productRoutes.js';
const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

// Attempt to catch disconnects
db.on('connection', function (connection) {
	console.log('DB Connection established');

	connection.on('error', function (err) {
		console.error(new Date(), 'MySQL error', err.code);
	});
	connection.on('close', function (err) {
		console.error(new Date(), 'MySQL close', err);
	});
});

const port = process.env.PORT || 5000;

app.listen(3001, () => console.log(`server is running on port ${port}`));
