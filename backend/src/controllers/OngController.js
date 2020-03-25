const cryto = require('crypto'); // metódo que cria uma string aleatória
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        response.json(ongs);
    },


    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;
    
        const id = cryto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({id});
    }
};