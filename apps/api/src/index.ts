import express from 'express';

import { env } from './config.js';

const app = express();

app.get('/', (req, res) => res.send({ message: 'Ok' }));

app.listen(env.PORT, () => {
    console.log(`${env.NAME} listening on port ${env.PORT}`);
});
