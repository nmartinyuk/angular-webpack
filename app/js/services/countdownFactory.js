module.exports = function(mainApp) {
    mainApp.factory('countdownFactory', function() {
        return {
            value: 'Hello World',
            update: function(value)
        };
    })
}