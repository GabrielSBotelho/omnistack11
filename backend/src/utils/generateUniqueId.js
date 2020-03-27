const crypto = require('crypto'); // metódo que cria uma string aleatória

module.exports = function generateUniqueId(){
    return crypto.randomBytes(4).toString('HEX');
}