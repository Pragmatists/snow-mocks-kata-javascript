
const RescueService = require('./rescue-service');


describe('Snow Rescue Service', function () {
    it('should be defined', () => {
        expect(RescueService()).toBeDefined();
    });

    it('should send sander when temperature below zero', () => {
        const WeatherForecastService = {
            getTemperatureInCelsius: jest.fn().mockReturnValue(-1)
          };

          const MunicipalServices = {
            sendSander: jest.fn()
          }          
        const rescueService = RescueService(WeatherForecastService, MunicipalServices);
        
        rescueService.checkForecastAndRescue()

        expect(MunicipalServices.sendSander).toHaveBeenCalled()
    });
});