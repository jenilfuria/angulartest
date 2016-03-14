app.controller('usersByIdCtrl',function($scope,$http,$routeParams){


var id =  $routeParams.id;

    $scope.bringUser = function(){
        return $http.get('http://jsonplaceholder.typicode.com'+'/users/'+id).then(function(data) {
              console.log(data);
            $scope.user = data.data;

        });

    };

    $scope.bringComment = function(){
        return $http.get('http://jsonplaceholder.typicode.com'+'/comments?postId='+id).then(function(data) {
            $scope.comments = data.data;

        });

    };
    $scope.todo = function(){
        return $http.get('http://jsonplaceholder.typicode.com'+'/todos?userId='+id).then(function(data) {

            $scope.todos = data.data;
            console.log($scope.todos);
        });

    };




    $scope.bringUser();
    $scope.bringComment();
    $scope.todo();

});