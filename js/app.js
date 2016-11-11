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

require(
    [   
        'modeljs',
        'viewjs',
        'controllerjs',
		'jquery',
		'tmpl'
    ],
    function(modeljs, viewjs, controllerjs, tmpl, $){
		
    viewjs.View();
	modeljs.Model();
	
	$(function (){
	var firstToDoList = ['test 1', 'test 2', 'test 3'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);
});    

    }
);