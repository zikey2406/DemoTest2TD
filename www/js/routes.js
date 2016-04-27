angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.map', {
    url: '/map',
    views: {
      'side-menu21': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('cloud', {
    url: '/page3',
    templateUrl: 'templates/cloud.html',
    controller: 'cloudCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('logIn', {
    url: '/login',
    templateUrl: 'templates/logIn.html',
    controller: 'logInCtrl'
  })

  .state('menu.selectDestionation', {
    url: '/destination',
    views: {
      'side-menu21': {
        templateUrl: 'templates/selectDestionation.html',
        controller: 'selectDestionationCtrl'
      }
    }
  })

  .state('menu.profile', {
    url: '/profile',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('menu.setting', {
    url: '/setting',
    views: {
      'side-menu21': {
        templateUrl: 'templates/setting.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('menu.traffic', {
    url: '/traffic',
    views: {
      'side-menu21': {
        templateUrl: 'templates/traffic.html',
        controller: 'trafficCtrl'
      }
    }
  })

  .state('menu.addJourney', {
    url: '/journey',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addJourney.html',
        controller: 'addJourneyCtrl'
      }
    }
  })

  .state('menu.friends', {
    url: '/friends',
    views: {
      'side-menu21': {
        templateUrl: 'templates/friends.html',
        controller: 'friendsCtrl'
      }
    }
  })

  .state('trafficReport', {
    url: '/traffic_report',
    templateUrl: 'templates/trafficReport.html',
    controller: 'trafficReportCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});