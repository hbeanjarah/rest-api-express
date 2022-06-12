import { Database } from './config/Database';
import express from 'express';
import cors from 'cors';

import { config } from './config/config';

const { POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER, SERVER_PORT, POSTGRES_HOST } = config;

const DatbaseInstance = new Database(POSTGRES_DB, POSTGRES_USER, POSTGRES_HOST, POSTGRES_PASSWORD);

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

DatbaseInstance.checkConnection();

app.listen(SERVER_PORT, () => {
    console.log('Server is running on port ' + SERVER_PORT);
});
