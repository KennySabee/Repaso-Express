require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const dbConnection = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Conexion exitosa a la db')
    } catch(e){
        console.log('error en la conexion')
    }
}

module.exports = {dbConnection}