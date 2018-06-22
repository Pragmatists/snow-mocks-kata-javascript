function RescueService(weatherForecastService, municipalServices, pressService) {

    return {
        checkForecastAndRescue: checkForecastAndRescue
    };

    function checkForecastAndRescue() {
    }

}

if (typeof exports !== 'undefined') {
    module.exports = RescueService;
}