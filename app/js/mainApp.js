var angular = require('angular');
require('ng-idle');
var mainApp = angular.module('mainApp', ['ngIdle']);
mainApp.config(['IdleProvider', function(IdleProvider) {
    IdleProvider.idle(5);
    IdleProvider.timeout(5);
  }]);

  mainApp.run(['Idle', function(Idle) {
      Idle.watch();
  }]);

require('./services')(mainApp);
require('./controllers')(mainApp);