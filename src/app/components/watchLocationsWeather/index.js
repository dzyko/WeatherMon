define([
  'app',
  '../../services/geoLocation.service',
  '../../services/openWeather.service'
], (app) => {
    class WatchLocationsWeatherCtrl {
      constructor($http, $interval, GeoLocation, OpenWeather) {//
        console.log('========= <watch-locations-weather> component constructor()=========');

        this.$onInit = () => {
        };
        this.$onDestroy = () => {
        };

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

    WatchLocationsWeatherCtrl.$inject = ['$http', '$interval', 'GeoLocation', 'OpenWeather'];//
    
    let watchLocationsWeather = () => {
      return {
        template: require('./watchLocationsWeather.html'),
        bindings: {
            // updateInterval: '<'
            onAdd: '&',
            onRemove: '&'
        },
        controller: WatchLocationsWeatherCtrl,
        controllerAs: 'wlw'
      }
    };

    app.component('watchLocationsWeather', watchLocationsWeather());
});
