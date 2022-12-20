require('dotenv').config();  //PARA INVOCAR VARIABLES DE DESARROLLO, HIZO QUE FUNCIONE EL PROCCESS.ENV.PORT LE TRAJO EL 5000 DE ENV
const express = require('express');
const app = express();
const {dbConnection} = require('./config/db')

app.listen(process.env.PORT, () => {
    console.log(`****************************`);
    console.log(`Se levanta mi API en el puerto ${process.env.PORT}`);
    console.log(`****************************`);
})

//CONECTANDO A LA BASE DE DATOS
dbConnection()

// LA / es lo mismo que decir inicio, en este caso es el localhost:5000 
app.get('/', (req,res) => {
    res.send('Hola estan en mi API');
    console.log('Estoy en home')
})

// localhost:5000/books
app.use('/books', require('./routers/books.routes'));