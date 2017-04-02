define(['app'], (app)=>{
//https://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=Yn1vuxrpDWFPd44yIgd3JVddpb8erVkV&q=109.184.80.226&language=ru-ru
    const APIKEY = 'Yn1vuxrpDWFPd44yIgd3JVddpb8erVkV';
    const lang = 'ru-ru';
    class AccuWeather {
        constructor($http) {
            console.log('========= OpenWeather service constructor()=========');
            this.$http = $http;
        }



        getCurrentWeatherByLocationKey(key) {
            return this.$http.get(`https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${APIKEY}&language=${lang}&details=true`)
            .then(
                resp => {
                    return {key:key, data:resp.data};
                },
                err => console.log(err)
            )
        }

        getLocationCityByCoord(lat, lon){
            let lat_lon_encoded = encodeURIComponent(lat+','+lon);
            console.log("***************getLocationCityByCoord************");
            console.log(lat_lon_encoded);
            return this.$http.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${APIKEY}&q=${lat_lon_encoded}&language=${lang}`);
        }

        getLocationCityByIP(ip) {
            return this.$http.get(`https://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${APIKEY}&q=${ip}&language=${lang}`);
        }

        getLocationCityBySearchText(query){
            let query_encoded = encodeURIComponent(query);
            return this.$http.get(`https://dataservice.accuweather.com/locations/v1/search?apikey=${APIKEY}&q=${query_encoded}&language=${lang}`);
        }

    }
    AccuWeather.$inject = ['$http'];

    app.service('AccuWeather', AccuWeather);
});
