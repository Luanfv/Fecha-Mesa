'use strict'

const User = use('App/Models/User')

class UserServices {
    async createUser(user) {
        if (!user.username)
            throw "Insira o nome do usuário";

        if (!user.email)
            throw "Insira o email do usuário";

        if (!user.password)
            throw "Insira a senha do usuário";

        return await User.create(user)
    }

    async GetId(user) {
        const userFound = await User.findBy('id', user.id);
        
        if (userFound === null)
            throw 'Id inexistente'

        return userFound;
    }
    
}







module.exports = new UserServices();