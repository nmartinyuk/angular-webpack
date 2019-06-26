module.exports = function(mainApp) {
    mainApp.controller('idleController', ['$scope', 'Idle', 'countdownFactory', function($scope, Idle, countdownFactory) {
        debugger;
        $scope.countdown = countdownFactory.value;
        $scope.$on('IdleTimeout', function() {
            console.log('IdleTimeout');
          });

        $scope.$on('IdleWarn', function(e, countdown) {
            // follows after the IdleStart event, but includes a countdown until the user is considered timed out
            // the countdown arg is the number of seconds remaining until then.
            // you can change the title or display a warning dialog from here.
            // you can let them resume their session by calling Idle.watch()
            $scope.countdown = countdown;
            console.log('IdleWarn ' + $scope.countdown);
            
            
        });

        $scope.$on('IdleStart', function() {
            // the user appears to have gone idle
            console.log('IdleStart');
        });

        $scope.$on('IdleEnd', function() {
            console.log('IdleEnd');
        });

        $scope.onClick = function() {
            // if (!$scope.countdown) {
            //     $scope.countdown = 0;
            // };
            // $scope.countdown++;
            $scope.countdown = countdownFactory.value;
        }
        
    }]);
}