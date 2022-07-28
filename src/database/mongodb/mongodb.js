import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbConnection = async()=>{
    try{
        await mongoose.connect('mongodb+srv://mkenny:mkenny123@cluster0.uy9ss.mongodb.net/test')
        console.log('Conectado a mongoose')
        /* .then(()=>{console.log('Conectado a mongoose')})
        .catch(err => console.log('Error de conexión a mongoose',err)); */
    }

    catch(error){
        throw new Error('Error en DB');
    }
}

dbConnection();

export default dbConnection;