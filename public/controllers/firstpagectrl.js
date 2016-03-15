app.controller('firstPageCtrl',function($scope,$http,$location){


    var urlToGo ="";

    $scope.submit = function(){

        if($scope.resourcetype == "Post"){
            if($scope.id){
                urlToGo = "post/"+$scope.id
            }else{
                urlToGo = "posts"
            }
        }
        if($scope.resourcetype == "User"){
            if($scope.id){
                urlToGo = "users/"+$scope.id
            }else{
                urlToGo = "users"
            }

        }
        if($scope.resourcetype == "New Post"){
            urlToGo = "post/new"
        }


        $location.url("/"+urlToGo);
    }
});