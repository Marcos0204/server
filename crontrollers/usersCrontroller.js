const User = require('../models/User');


exports.createUser = async (req, res) => {
    try {
        let user;
        //crea el nuevo usuario
        user = await new User(req.body);
        //guardamos el usuario
        await user.save()
        res.send('usuario creado correctamente')
    } catch (error) {
        console.log(error);
        console.log('Hubo un error al crear el user')
    }
} 