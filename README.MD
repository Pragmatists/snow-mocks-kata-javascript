Snow Mocks
==========

## Build
`npm install`  
`npm run test` - run all tests  
`npm run test--collect-coverage`  - run all test with code coverage  

## Wymagania

Zaimplementuj SnowRescueService - to jest twój System Under Test. Wszystkie pozostałe obiekty potraktuj jako zależności.

1. Wyślij piaskarkę (sander) tylko jeśli temperatura będzie poniżej 0 st C

2. Wyślij pług (snowplow) tylko jeśli opady śniegu przekroczą 3 mm
	
3. Jeśli pług nawali (`throw 'SnowplowMalfunction'`) - wyślij kolejny
		
4. Wyślij dwa pługi tylko jeśli opady śniegu przekroczą 5 mm

5. Jeśli temperatura będzie poniżej -10 i opady śniegu przekroczą 10 mm, wyślij trzy pługi, piaskarkę i powiadom prasę, określając poziom zagrożenia jako "SEVERE". 

### przydatne informacje

https://facebook.github.io/jest/docs/en/mock-functions.html  
https://facebook.github.io/jest/docs/en/expect.html#tohavebeencalled

