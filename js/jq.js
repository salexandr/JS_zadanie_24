define (
  'jq',
  ['jquery'],
  function (){
   $(function (){
	var firstToDoList = ['test 1', 'test 2', 'test 3'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);
   });
  }
);


