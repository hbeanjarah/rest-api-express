import { Database } from './config/Database';
import express from 'express';
import cors from 'cors';

import { config } from './config/config';
import Logging from './Library/Logging';

const { POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER, SERVER_PORT, POSTGRES_HOST } = config;

const DatbaseInstance = new Database(POSTGRES_DB, POSTGRES_USER, POSTGRES_HOST, POSTGRES_PASSWORD);

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

DatbaseInstance.checkConnection()
    .then(() => startServer())
    .catch((error) => Logging.error(`Error on Establishing connexion ${error}`));

const startServer = () => {
    app.listen(SERVER_PORT, () => {
        Logging.log('Server is running on port ' + SERVER_PORT);
    });
};
