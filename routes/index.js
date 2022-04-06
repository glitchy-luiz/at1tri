module.exports = (app) => {
    var conexao = require('../config/database')
    conexao()
    var mygrids = require('../models/metas')

    app.get('/', async(req, res) => {
        var mygrid = await mygrids.find().sort({'_id':-1})
            
        res.render('index.ejs',{dados:mygrid})
            //console.log(mygrid)
    })
}