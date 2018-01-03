(function() {
  'use strict';

  angular.module('app').config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      component: 'home',
    }).state('widget', {
      url: '/testwidget',
      component: 'emailwidget',
    });

    $urlRouterProvider.otherwise('/');
  }

})();
