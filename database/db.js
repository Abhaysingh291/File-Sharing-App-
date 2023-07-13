import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USER;
    const PASSWORD = process.env.DB_PASS;
    const MONGO_URI =`mongodb://${USERNAME}:${PASSWORD}@ac-vavknqp-shard-00-00.t2e0doa.mongodb.net:27017,ac-vavknqp-shard-00-01.t2e0doa.mongodb.net:27017,ac-vavknqp-shard-00-02.t2e0doa.mongodb.net:27017/?ssl=true&replicaSet=atlas-3o41ej-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;