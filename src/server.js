import express, { json } from 'express';
import cors from 'cors';
import 'dotenv/config';

import authRouter from './routes/authRouter.js';

const PORT = process.env.PORT || 5000;

const server = express();

server.use(cors());
server.use(json());

server.use("/auth", authRouter);

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
});