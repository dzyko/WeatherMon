define(['../app'], (app)=>{

    const APIKEY = '7912fc72c98b9e9e6659c3c7095a5614';
    class OpenWeather {
        constructor($http) {
            console.log('========= OpenWeather service constructor()=========');
            this.$http = $http;
        }

        weatherByCoord(lat, lon){
            let self = this;
            self.$http.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APIKEY}`)
            .then(
                resp => {
                    console.log(resp);
                },
                err => console.log(err)
            );
            let promise = new Promise((resolve, reject) => {
            });

            return promise;
        }
    }
    OpenWeather.$inject = ['$http'];

    app.service('OpenWeather', OpenWeather);
});

// export default OpenWeather;