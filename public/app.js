var app = angular.module('AngularTest',['ngRoute']);


app.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl : 'views/firstpage.html',
        controller : 'firstPageCtrl'
    })

});


angular.element(document).ready(function(){

    this.boot = function(){
        angular.bootstrap(document,['AngularTest']);
    };
    this.boot();
});