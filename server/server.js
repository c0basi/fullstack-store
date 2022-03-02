import express from 'express';
import 'dotenv/config';

import db from './config/db.js';
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(3001, () => console.log(`server is running on port ${port}`));
