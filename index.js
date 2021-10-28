const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;


//define la ruta principal 

app.get('/', (req, res)=>{
    res.send('hola mundo')
})

//Arrarcar la app
app.listen(PORT, () =>{
    console.log(`La aplicaicon esta funcionando en el puerto ${PORT}`)
})