app.controller('postsCtrl',function($scope,$http,$location){


    $scope.bringPosts = function(){
        return $http.get('http://jsonplaceholder.typicode.com'+'/posts').then(function(data) {

            $scope.posts = data.data;
            console.log($scope.posts)
        });
    };

    $scope.bringPosts();

});