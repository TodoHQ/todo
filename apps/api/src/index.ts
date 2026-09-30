import express from 'express';

import { env } from './config.js';

import { connectDb, Todo } from '@todo/db';

const app = express();

await connectDb(env.DB_URL);

app.get('/', (req, res) => res.send({ message: 'Ok' }));

app.post('/todos', async (req, res) => {
    await Todo.create({ title: 'Get the Job' });

    res.send({ message: 'Todo Created' });
});

app.get('/todos', async (req, res) => {
    const todos = await Todo.find({}, '_id title description').lean();

    // // No Type inference based on select
    // console.log(todos[0].updatedAt);

    res.send({ data: todos });
});

app.listen(env.PORT, () => {
    console.log(`${env.NAME} listening on port ${env.PORT}`);
});
