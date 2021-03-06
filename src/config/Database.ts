import { Sequelize } from 'sequelize';
import Logging from '../Library/Logging';

export class Database {
    public DatabaseName: string;
    public DatabaseUser: string;
    public DatabaseHost: string;
    public DatabasePassword: string;

    constructor(databaseName: string, databaseUser: string, databaseHost: string, databasePassword: string) {
        this.DatabaseHost = databaseHost;
        this.DatabaseName = databaseName;
        this.DatabaseUser = databaseUser;
        this.DatabasePassword = databasePassword;
    }

    createDatabase() {
        return new Sequelize(this.DatabaseName, this.DatabaseUser, this.DatabasePassword, {
            dialect: 'postgres',
            host: this.DatabaseHost
        });
    }

    async checkConnection() {
        return this.createDatabase().authenticate();
    }
}
