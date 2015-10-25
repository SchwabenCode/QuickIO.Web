angular.module('QuickIO.Modules.ExampleModule', ['ui.router'])
.config(
  ['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {
          $stateProvider
              .state('Examples', {
                  url: '/Examples',
                  abstract: true,
                  templateUrl: 'Views/Examples/Examples.html'
              })
              .state('Examples.Home', {
                  url: '',
                  templateUrl: 'Views/Examples/Home.html'
              })
              .state('Examples.Jobs', {
                  url: '/Jobs',
                  templateUrl: 'Views/Examples/Jobs.html'
              })
              .state('Examples.Observer', {
                  url: '/Observer',
                  templateUrl: 'Views/Examples/Observer.html'
              })
              .state('Examples.Services', {
                  url: '/Services',
                  templateUrl: 'Views/Examples/Services.html'
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
                templateUrl: 'Views/Home.html',
            });
    }]
);
