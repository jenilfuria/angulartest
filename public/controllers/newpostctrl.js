app.controller('newPostCtrl', function($scope,$http,toaster){



    $scope.submitPost = function(){
        $scope.data = {
            title : $scope.title,
            body : $scope.body
        };

        return $http.post('http://jsonplaceholder.typicode.com/posts',$scope.data).then(function(data) {
            $scope.newpost = data.data;
            console.log($scope.newpost);
            toaster.pop('success', "Saved Successfully");

        });
    };

});