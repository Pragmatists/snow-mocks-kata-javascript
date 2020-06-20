function RescueService(weatherForecastService, municipalServices, pressService) {

    return {
        checkForecastAndRescue: checkForecastAndRescue
    };

    function checkForecastAndRescue() {
        if (temperatureIsBelow(0)) {
            sendSander();
        }
        if (snowfallIsAbove(3)) {
            sendSnowplows(1);
        }
        if (snowfallIsAbove(5)) {
            sendSnowplows(1);
        }

    }

    function snowfallIsAbove(threshold) {
        return weatherForecastService.getSnowfallInMm() > threshold;
    }

    function temperatureIsBelow(threshold) {
        return weatherForecastService.getTemperatureInCelsius() < threshold;
    }

    function sendSnowplows(number) {
        for (var index = 0; index < number; index++) {
            try {
                municipalServices.sendSnowplow();
            } catch (error) {
                municipalServices.sendSnowplow();
            }
        }
    }

    function sendSander() {
        municipalServices.sendSander();
    }

}

if (typeof exports !== 'undefined') {
    module.exports = RescueService;
}
