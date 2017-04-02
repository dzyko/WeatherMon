define([
  'app',
  '../../services/geoLocation.service',
  '../../services/openWeather.service'
], (app) => {
    class OutsideWeatherCtrl {
      constructor($http, $interval, GeoLocation, OpenWeather) {//
        console.log('========= <outside-weather> component constructor()=========');

        // this.$onInit = () => {
        // };
        // this.$onDestroy = () => {
        // };

        // GeoLocation.getLocation()
        // .then(
        //   resp=>{
        //     console.log(resp);
        //   },
        //   err=>console.log(err)
        // );

        // OpenWeather.weatherByCoord()
        // .then(
        //   resp=>{
        //     console.log(resp);
        //   },
        //   err=>console.log(err)
        // );
        
      }
    };

    OutsideWeatherCtrl.$inject = ['$http', '$interval', 'GeoLocation', 'OpenWeather'];//
    
    let outsideWeather = () => {
      return {
        template: require('./outsideWeather.html'),
        bindings: {
            updateInterval: '<'
            // onUpdate: '&'
        },
        controller: OutsideWeatherCtrl,
        controllerAs: 'ow'
      }
    };

    app.component('outsideWeather', outsideWeather());
});
