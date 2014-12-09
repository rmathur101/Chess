angular
    .module('AngChess', [
        'ngRoute',
        'ng-rails-csrf',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'chess_game.html',
                controller: 'ChessGameCtrl'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });