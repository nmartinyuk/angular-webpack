module.exports = function(mainApp) {
    mainApp.controller('mainController', ['$scope', 'countdownFactory', function($scope, countdownFactory) {
        $scope.onClick = function() {
            alert('Hello, ' + $scope.name);
            console.log(countdownFactory.value);
            countdownFactory.value = $scope.name;
        }
    }]);
}