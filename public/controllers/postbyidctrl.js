app.controller('postByIdCtrl',function($scope,$http,$routeParams){


    var id =  $routeParams.id;

    $scope.bringPost = function(){
        return $http.get('http://jsonplaceholder.typicode.com'+'/posts/'+id).then(function(data) {
            $scope.post = data.data;
        });
    };


    $scope.bringAllCommentsOnPost = function(){
        return $http.get('http://jsonplaceholder.typicode.com/comments?postId='+id).then(function(data){
            $scope.comments = data.data;
        })
    };



    $scope.bringPost();
    $scope.bringAllCommentsOnPost();

});