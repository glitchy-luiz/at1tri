module.exports = (app) => {
    var conexao = require('../config/database')
    conexao()
    var mygrids = require('../models/metas')

    app.get('/', async(req, res) => {
        var mygrid = await mygrids.find()
            
        res.render('index.ejs',{dados:mygrid})
            //console.log(mygrid)
    })
}