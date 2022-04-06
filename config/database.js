const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://userAdmin:S!mple4lu@fiaptecnico.yqfxr.mongodb.net/at1tri')
}

module.exports = conexao