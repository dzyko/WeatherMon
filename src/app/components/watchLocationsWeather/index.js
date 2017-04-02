define([
  'app',
  '../../services/geoLocation.service',
  '../../services/openWeather.service',
  '../../services/accuWeather.service'
], (app) => {
    class WatchLocationsWeatherCtrl {
        constructor($http, $interval, GeoLocation, OpenWeather, AccuWeather) {//
            let self = this;
            console.log('========= <watch-locations-weather> component constructor()=========');
            // localStorage.setItem('locations', JSON.stringify([]));

            this.searched_locations = [];
            this.locations = [];
            var localStorage_locations = localStorage.getItem('locations');
            if(localStorage_locations === undefined || localStorage_locations === null) {
                localStorage.setItem('locations', JSON.stringify([]));
            }
            else {
                this.locations  = JSON.parse(localStorage_locations);
            }
            console.log("=========== stored_locations =============");
            console.log(localStorage_locations);
            console.log(this.locations);

            this.watched_weather = [];

            this.locations.forEach(a => {
                let promise = AccuWeather.getCurrentWeatherByLocationKey(a.Key);
                promise.then(
                    resp=>{
                        self.watched_weather.push(resp);
                    },
                    err => console.log(err)
                )
            });

            

            // let tt = OpenWeather.weatherByZIPcode(603000);

            // GeoLocation.getGeoDataClient()
            // .then(
            // resp=>{
            //     console.log(resp.data);
            // },
            // err=>console.log(err)
            // );


            this.AccuWeather = AccuWeather;

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

        SearchCity(text){
            this.AccuWeather.getLocationCityBySearchText(text)
            .then(
                resp => {
                    this.searched_locations = resp.data;
                },
                err => console.log(err)
            );
        }

        addSelectedLocation(location) {
            let self = this;
            if(this.locations.find(a=>a.Key==location.Key) === undefined) {
                this.locations.push(location);

                let promise = self.AccuWeather.getCurrentWeatherByLocationKey(location.Key);
                promise.then(
                    resp=>{
                        if(self.watched_weather.filter(a=>a.key==resp.key).length == 0) {
                            self.watched_weather.push(resp);
                        }
                    },
                    err => console.log(err)
                )
            }


            this.searched_locations = [];
            this.search_text = "";
            localStorage.setItem('locations', JSON.stringify(this.locations, (key, value) => {
                if( key === "$$hashKey" ) {
                    return undefined;
                }
                return value;
            }));

        }

        removeStoredLocations(location) {
            let self = this;
            let index_to_remove = this.locations.indexOf(this.locations.find(a=>a.Key == location.Key));
            this.locations.splice(index_to_remove, 1);

            console.log(this.watched_weather);
            this.watched_weather.splice(this.watched_weather.indexOf(this.watched_weather.find(a=>a.key == location.Key)), 1);
            console.log(this.watched_weather);

            localStorage.setItem('locations', JSON.stringify(this.locations));
        }

        watchWeather(key) {
            let tt = this.watched_weather.find(a=>a.key == key);
            if(tt) return tt.data[0];
            else return {};
        }
    };

    WatchLocationsWeatherCtrl.$inject = ['$http', '$interval', 'GeoLocation', 'OpenWeather', 'AccuWeather'];//
    
    let watchLocationsWeather = () => {
      return {
        template: require('./watchLocationsWeather.html'),
        // bindings: {
        //     updateInterval: '<'
        //     onAdd: '&',
        //     onRemove: '&'
        // },
        controller: WatchLocationsWeatherCtrl,
        controllerAs: 'wlw'
      }
    };

    app.component('watchLocationsWeather', watchLocationsWeather());
});
