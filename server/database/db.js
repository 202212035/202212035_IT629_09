import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = 'mongodb://202212035:202212035@ac-lo4ewvh-shard-00-00.jbe1fc0.mongodb.net:27017,ac-lo4ewvh-shard-00-01.jbe1fc0.mongodb.net:27017,ac-lo4ewvh-shard-00-02.jbe1fc0.mongodb.net:27017/?ssl=true&replicaSet=atlas-outd7n-shard-0&authSource=admin&retryWrites=true&w=majority';

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })
}

export default Connection;
