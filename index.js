const express = require('express');
const connectDB = require('./config/db');


//iniciar express
const app = express();

//conectar base de datos

connectDB();

const PORT = process.env.PORT || 4000;


//define la ruta principal 

app.use('/api/usuarios', require('./routes/Users'))
//Arrarcar la app
app.listen(PORT, () =>{
    console.log(`La aplicaicon esta funcionando en el puerto ${PORT}`)
})