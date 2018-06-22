
const RescueService = require('./rescue-service');


describe('Snow Rescue Service', function () {
    let WeatherForecastService
    let MunicipalServices
    let rescueService

    beforeEach(() => {
        WeatherForecastService = {};
        MunicipalServices = {
            sendSander: jest.fn()
          }    

        rescueService = RescueService(WeatherForecastService, MunicipalServices);  
    });

    it('should send sander when temperature below zero', () => {
        WeatherForecastService.getTemperatureInCelsius = jest.fn().mockReturnValue(-1)
        
        rescueService.checkForecastAndRescue()

        expect(MunicipalServices.sendSander).toHaveBeenCalled()
    });
});