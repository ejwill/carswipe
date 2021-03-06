// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase', 'ngCordova', 'starter.controllers', 'ionTinderCards'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
 .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      /*controller: 'AppCtrl'*/
    })
    .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })
    .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/signup.html',
        controller: 'LoginCtrl'
      }
    }
  })  
  .state('app.signin', {
    url: '/signin',
    views: {
      'menuContent': {
        templateUrl: 'templates/signin.html',
        controller: 'LoginCtrl'
      }
    }
  })
  .state('app.home', {
    url: "/home",
    views: {
      'menuContent' :{
        templateUrl: "templates/home.html",
        controller: 'AppController'
        }
      }
    })
  .state('app.discovery', {
    url: "/discovery",
    views: {
      'menuContent' :{
        templateUrl: "templates/discovery.html",
        }
      }
    })
  .state('app.favorites', {
    url: "/favorites",
    views: {
      'menuContent' :{
        templateUrl: "templates/favorites.html",
        }
      }
    })
  .state('app.details', {
    url: "/details",
    views: {
      'menuContent' :{
        templateUrl: "templates/details.html",
        }
      }
    })
 
  $urlRouterProvider.otherwise('/app/login');
 
})
