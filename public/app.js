var app = angular.module('AngularTest',['ngRoute']);


app.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl : 'views/firstpage.html',
        controller : 'firstPageCtrl'
    }).when('/users',{
            templateUrl : 'views/users.html',
            controller : 'usersCtrl'

        }).when('/users/:id',{
            templateUrl : 'views/userbyid.html',
            controller : 'usersByIdCtrl'
        })
});


angular.element(document).ready(function(){

    this.boot = function(){
        angular.bootstrap(document,['AngularTest']);
    };
    this.boot();
});