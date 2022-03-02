import express from 'express';
import 'dotenv/config';

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(3001, () => console.log(`server is runnin gon port ${port}`));
