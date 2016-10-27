requirejs.config({
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		}
	}
});

require (
	[
	'model',
	'view',
	'controller',
	'jq',
	'jquery'
	],
	function (model, view, controller, jq, jquery){
		model.addItem();
		model.removeItem();	
		view.renderList();
		Model();
		View();
		Controller();
	}
);