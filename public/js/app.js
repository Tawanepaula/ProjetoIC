var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: './views/main.html',
            controller: 'mainController'
        })

        .when('/cadastropaciente', {
            templateUrl: './views/cadastropaciente.html',
            controller: 'mainController'
        })

        .when('/cadastropacientesarquivados', {
            templateUrl: './views/cadastropacientesarquivados.html',
            controller: 'mainController'
        })

        .when('/pacientessuspenso', {
            templateUrl: './views/pacientessuspenso.html',
            controller: 'mainController'
        })

        .when('/pesquisarpacientes', {
            templateUrl: './views/pesquisarpacientes.html',
            controller: 'mainController'
        })

        .when('/coleta', {
            templateUrl: './views/coleta.html',
            controller: 'mainController'
        })

        .when('/culturas', {
            templateUrl: './views/culturas.html',
            controller: 'mainController'
        })

        .when('/login', {
            templateUrl: './views/login.html',
            controller: 'mainController'
        });



    app.controller('appController', function ($scope, $http) {
    });

});