var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: './views/main.html',
            controller: 'mainController'
        })

        .when('/pacientesSuspenso', {
            templateUrl: './views/pacientesSuspenso.html',
            controller: 'mainController'
        })

        .when('/contatos', {
            templateUrl: './views/contatos.html',
            controller: 'mainController'
        })

        .when('/faleconosco', {
            templateUrl: './views/faleconosco.html',
            controller: 'mainController'
        })

        .when('/cadastropaciente', {
            templateUrl: './views/cadastropaciente.html',
            controller: 'mainController'
        })

        .when('/portal', {
            templateUrl: './views/portal.html',
            controller: 'mainController'
        });

    app.controller('appController', function ($scope, $http) {
    });

});