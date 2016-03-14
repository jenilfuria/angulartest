app.controller('usersCtrl',function($scope,$http,$location){


    $scope.bringUsers = function(){
       return $http.get('http://jsonplaceholder.typicode.com'+'/users').then(function(data) {

           $scope.users = data.data;
        });

    }

    $scope.bringUsers();

});