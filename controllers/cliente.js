module.exports = function(app){
	var ClienteController = {
		listar: function(req, res){
			req.flash('info', 'Novo item adicionado no portfolio com sucesso!!');
			req.flash('error', 'Novo item adicionado no portfolio com sucesso!!');
			req.flash('success', 'Novo item adicionado no portfolio com sucesso!!');


			res.render('cliente/listar');
		},
		cadastrar: function(req, res){
			res.render('cliente/cadastrar');
		},
		add: function(req, res){
			res.json(req.body);
		},
		update: function(req, res){
			res.json(req.body);
		},
		deletar: function(req, res){
			res.json(req.body);
		}
	};
	return ClienteController;
}