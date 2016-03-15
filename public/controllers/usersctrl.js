app.controller('usersCtrl',function($scope,$http){


    $scope.bringUsers = function(){

        return $http.get('http://jsonplaceholder.typicode.com'+'/users').then(function(data) {
            $scope.users = data.data;
        });

    }

    $scope.bringUsers();

});