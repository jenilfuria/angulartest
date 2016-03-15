var app = angular.module('AngularTest',['ngRoute','toaster', 'ngAnimate']);

app.config(function($routeProvider){


    $routeProvider.when('/',{
        templateUrl : 'views/firstpage.html',
        controller : 'firstPageCtrl'
    }).when('/post/new',{
            templateUrl : 'views/newpost.html',
            controller : 'newPostCtrl'
        })
        .when('/users',{
            templateUrl : 'views/users.html',
            controller : 'usersCtrl'

        }).when('/users/:id',{
            templateUrl : 'views/userbyid.html',
            controller : 'usersByIdCtrl'
        }).when('/posts',{
            templateUrl : 'views/posts.html',
            controller : 'postsCtrl'
        }).when('/post/:id',{
            templateUrl : 'views/postbyid.html',
            controller : 'postByIdCtrl'
        })
});


angular.element(document).ready(function(){

    this.boot = function(){
        angular.bootstrap(document,['AngularTest']);
    };
    this.boot();
});