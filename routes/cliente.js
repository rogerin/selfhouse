module.exports = function(app){
	var cliente = app.controllers.cliente;

	app.get('/clientes', cliente.listar);
	app.get('/cliente/cadastrar', cliente.cadastrar);

	app.post('/cliente', cliente.add);
	app.put('/cliente/:id', cliente.update);
	app.delete('/cliente/:id', cliente.deletar);
}