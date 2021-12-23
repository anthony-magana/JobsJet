import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        console.log('=> using existing database connection');
        return Promise.resolve();
    }

    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI is not defined');
    }

    console.log('=> using MONGO_URI:', process.env.MONGO_URI);

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    connection.isConnected = db.connections[0].readyState;
    console.log('=> using database connection:', connection.isConnected);
}

export default dbConnect;