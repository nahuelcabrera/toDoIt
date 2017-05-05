angular.module('toDoModule', ['LocalStorageModule'])
.controller('toDoController', function($scope, localStorageService)
{
    if (localStorageService.get('angular-toDoList'))
    {
        $scope.toDo = localStorageService.get('angular-toDoList');
    }else
    {
        $scope.toDo = [];
    }
    /*Que va a guardar este objeto?
    {
    actividad: 'terminar curso',
    fecha: '3-03-15 2:00pm'
    }
    */
    $scope.$watchCollection('toDo',function(newValue, oldValue)
    {
        localStorageService.set('angular-toDoList', $scope.toDo);

    });

    $scope.addAct = function()
    {
        $scope.toDo.push($scope.newAct);
        $scope.newAct = {};
    }
    $scope.cleanToDo = function()
    {
        $scope.toDo = [];
    }
});
