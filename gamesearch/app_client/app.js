(function () {

  angular.module('publisherApp', ['ngRoute', 'ngSanitize']);

  function config ($routeProvider, $locationProvider) {
    
    console.log("TEST");
    
    $routeProvider
      .when('/', {
        templateUrl: '~/publishers',
        controller: 'publisherCtrl',
        controllerAs: 'vm'
      })
    
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      }
    );
  }

  angular
    .module('publisherApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();