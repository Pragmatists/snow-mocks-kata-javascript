const RescueService = require('./rescue-service');


describe('Snow Rescue Service', function () {
    let WeatherForecastService
    let MunicipalServices
    let rescueService

    beforeEach(() => {
        WeatherForecastService = {
            getTemperatureInCelsius: jest.fn(),
            getSnowfallInMm: jest.fn()
        };
        MunicipalServices = {
            sendSander: jest.fn(),
            sendSnowplow: jest.fn()
        }

        rescueService = RescueService(WeatherForecastService, MunicipalServices);
    });

    it('should send sander when temperature below zero', () => {
        WeatherForecastService.getTemperatureInCelsius = jest.fn().mockReturnValue(-1)

        rescueService.checkForecastAndRescue()

        expect(MunicipalServices.sendSander).toHaveBeenCalled()
    });

    it('should send snowplow when snow above 3mm', () => {
        WeatherForecastService.getSnowfallInMm = jest.fn().mockReturnValue(4)

        rescueService.checkForecastAndRescue()

        expect(MunicipalServices.sendSnowplow).toHaveBeenCalled()
    });

    it('should send another snowplow when snowplow error', () => {
        WeatherForecastService.getSnowfallInMm = jest.fn().mockReturnValue(4)
        MunicipalServices.sendSnowplow = jest.fn().mockImplementationOnce(()=>{throw Error('')})
        
        rescueService.checkForecastAndRescue()

        expect(MunicipalServices.sendSnowplow).toHaveBeenCalledTimes(2)
    });

    it('should send two snowplow when snowplow when snow above 5mm', () => {
        WeatherForecastService.getSnowfallInMm = jest.fn().mockReturnValue(6)
        
        rescueService.checkForecastAndRescue()

        expect(MunicipalServices.sendSnowplow).toHaveBeenCalledTimes(2)
    });
});
