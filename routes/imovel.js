module.exports = function(app){
	var cliente = app.controllers.imovel;

	app.get('/imoveis', cliente.listar);
	app.get('/imovel/cadastrar', cliente.cadastrar);

	app.post('/imovel', cliente.add);
	app.put('/imovel/:id', cliente.update);
	app.delete('/imovel/:id', cliente.deletar);
}