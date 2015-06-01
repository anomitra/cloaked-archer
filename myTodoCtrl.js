myTodoApp.controller("myTodoCtrl",function($scope) {
	$scope.storedData=localStorage.getItem('tasks');
	$scope.test="ABCDEF";
	$scope.newtask={name:"",desc:"",done:false};
	$scope.newname="ABCD";
	$scope.newdesc="BCDE";
	$scope.tasks=JSON.parse($scope.storedData);
	if($scope.tasks==0 || $scope.tasks===null)
		$scope.tasks=[{name: 'Take out the dog', desc: 'Dogs need exercise. Take them out for a walk every now and then.', done: false},
					  {name:"Water the plants",desc:'Somebody needs to take care of the garden, right?', done: false}];
	localStorage.setItem('tasks', JSON.stringify($scope.tasks));
	/*// $scope.tasks=[{name: 'Take out the dog', desc: 'Dogs need exercise. Take them out for a walk every now and then.', done: false},
			  // {name:"Water the plants",desc:'Somebody needs to take care of the garden, right?', done: false}];

	if($scope.storedData!=null) {
		$scope.tasks=[{name: 'Take out the dog', desc: 'Dogs need exercise. Take them out for a walk every now and then.', done: false},
					  {name:"Water the plants",desc:'Somebody needs to take care of the garden, right?', done: false}];
		$scope.test="IN LOOP";
	}
	else
	{
		$scope.tasks=JSON.parse($scope.storedData);
		$scope.test="NOT IN LOOP"
	} */
	$scope.addTask=function(){
		if($scope.newname!="" && $scope.newdesc!="") {
		$scope.tasks.push({name: $scope.newname, desc: $scope.newdesc, done: false});
		localStorage.setItem('tasks',JSON.stringify($scope.tasks));
	}
		$scope.newname="";
		$scope.newdesc="";

	}

	$scope.update=function()
	{
		localStorage.setItem('tasks', JSON.stringify($scope.tasks));
	}
	$scope.archive=function()
	{
		var tasklist=$scope.tasks;
		$scope.tasks=[];
		angular.forEach(tasklist, function(task){
			if (!task.done)
				$scope.tasks.push(task);
		});
		localStorage.setItem('tasks', JSON.stringify($scope.tasks));
	}
});