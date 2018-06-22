function RescueService(weatherForecastService, municipalServices, pressService) {

    return {
        checkForecastAndRescue: checkForecastAndRescue
    };

    function checkForecastAndRescue() {
        if(weatherForecastService.getTemperatureInCelsius() < 0){
            municipalServices.sendSander()
        }
    }

}

if (typeof exports !== 'undefined') {
    module.exports = RescueService;
}