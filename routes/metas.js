module.exports = (app)=>{
    //importar as configurações do database
    var conexao = require('../config/database')
    //importar o modelo mygrid
    var modelo = require('../models/metas')

    //abrir o formulário mygrid.ejs
    app.get('/metas',(req,res)=>{
        //conectar com o database
        conexao()
        //buscar todos os documentos da colecao mygrid
        modelo.find()
        .then((modelo)=>{
            res.render('metas.ejs',{dados:modelo})
        })
        .catch(()=>{
            res.render('metas.ejs')
        })
    })

    //gravar as informações do formulário
    app.post('/metas',(req,res)=>{
        //conectar com o database
        conexao()
        //gravar o documento na coleção mygrid
        var documento = new modelo({
            titulo:req.body.titulo,
            texto:req.body.texto
        }).save()
        .then(()=>{
            res.redirect('/metas')
        })
        .catch(()=>{
            res.send('Não foi possível gravar os dados no DB')
        })
    })
}