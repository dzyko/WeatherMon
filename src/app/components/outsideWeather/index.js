define([
  'app',
  '../../services/geoLocation.service',
  '../../services/openWeather.service',
  '../../services/accuWeather.service'
], (app) => {
    class OutsideWeatherCtrl {
      constructor($http, $interval, GeoLocation, OpenWeather, AccuWeather) {//
        console.log('========= <outside-weather> component constructor()=========');

        // this.$onInit = () => {
        // };
        // this.$onDestroy = () => {
        // };

        let self = this;
        this.AccuWeather = AccuWeather;
        
        this.near_location = {};
        this.watched_weather = {};


        GeoLocation.getLocation()
        .then(
          position=>{
              console.log("||||||||||position||||||||||||");
              console.log(position);
              // position.coords.latitude;
              // position.coords.longitude;
              AccuWeather.getLocationCityByCoord(position.coords.latitude, position.coords.longitude)
              .then(
                resp => {
                  self.near_location = resp.data;
                  self.updateWeather();
                  $interval(()=>{
                    self.updateWeather();
                    // console.log(self.updateInterval);
                  }, self.updateInterval);
                },
                err => console.log(err)
              );
              

          },
          err=>console.log(err)
        );

        

        // OpenWeather.weatherByCoord()
        // .then(
        //   resp=>{
        //     console.log(resp);
        //   },
        //   err=>console.log(err)
        // );
        
      }

      updateWeather(){
        let self = this;
        self.AccuWeather.getCurrentWeatherByLocationKey(self.near_location.Key)
        .then(
            resp=>{
              console.log(resp);
              if(resp.data && resp.data.length>0) {
                self.watched_weather = resp.data[0];
              }
            },
            err => console.log(err)
        );
      }
    };

    OutsideWeatherCtrl.$inject = ['$http', '$interval', 'GeoLocation', 'OpenWeather', 'AccuWeather'];//
    
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
