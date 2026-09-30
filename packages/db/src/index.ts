import { connect } from 'mongoose';

export { default as Todo } from './models/todo.model.js';

export async function connectDb(dbUrl: string) {
    const { connection } = await connect(dbUrl);

    console.log(`db: Connected to '${connection.db?.databaseName}' database`);

    connection.on('error', (error) => {
        console.log('db: Connection Error', error);
    });

    connection.on('disconnected', () => {
        console.log('db: Connection Disconnected');
    });

    connection.on('reconnected', () => {
        console.log('db: Connection ReConnected');
    });

    connection.on('connected', () => {
        console.log('db: Connected');
    });
}
