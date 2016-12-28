var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
        
            .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'
        })
        
        
        
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
       
        
});

routerApp.controller('scotchController', function($scope) {
    
   
});