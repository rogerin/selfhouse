module.exports = function(app){
	var ImovelController = {
		listar: function(req, res){
			res.render('imovel/listar');
		},
		cadastrar: function(req, res){
			res.render('imovel/cadastrar');
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
	return ImovelController;
}