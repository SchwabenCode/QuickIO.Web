angular.module('QuickIO.Modules.ExampleModule', ['ui.router'])
.config(
  ['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {
          $stateProvider
              .state('Examples', {
                  url: '/Examples',
                  abstract: true,
                  templateUrl: 'PartialViews/Examples/Examples.html'
              })
              .state('Examples.Home', {
                  url: '',
                  templateUrl: 'PartialViews/Examples/Home.html'
              })
              .state('Examples.Jobs', {
                  url: '/Jobs',
                  templateUrl: 'PartialViews/Examples/Jobs.html'
              })
              .state('Examples.Observer', {
                  url: '/Observer',
                  templateUrl: 'PartialViews/Examples/Observer.html'
              })
              .state('Examples.Services', {
                  url: '/Services',
                  templateUrl: 'PartialViews/Examples/Services.html'
              });

      }]
);

angular.module('QuickIO', ['QuickIO.Modules.ExampleModule', 'ui.router', 'ngAnimate'])
.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])
.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');
        $stateProvider
            .state("Home", {
                url: "/",
                templateUrl: 'PartialViews/Home.html',
            });
    }]
);
