(function() {
  'use strict';
  angular.module('app').component('emailwidget', {
    controller: EmailWidgetController,
    controllerAs: 'vm',
    templateUrl: 'app/emailwidget/emailwidget.view.html',
  });

  /** @ngInject */
  function EmailWidgetController() {
    var vm = this;
    vm.saveData = function(){
      console.log( vm.userdata );
    }
    vm.reset = function(){
      vm.userdata = {};
    }
  }

})();
