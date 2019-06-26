module.exports = function(mainApp) {
    require('./mainController')(mainApp);
    require('./idleController')(mainApp);
}