import 'bootstrap/dist/css/bootstrap.css';
// require(['css!../../node_modules/bootstrap/dist/css/bootstrap.css']);

// import angular from 'angular';
// import uirouter from 'angular-ui-router';
// import routing from './app.config';

//import home from './modules/home';



// export default angular.module('app', [])
//   .directive('app', app)
//   .name;
  // .config(routing);


define([
  'angular'
  ], 
  function (angular) {
    let app = () => {
      return {
        template: require('./app.html'),
        controller: AppCtrl,
        controllerAs: 'app'
      }
    };

    class AppCtrl {
      constructor($http, $interval) {
        console.log('AppCtrl');
        // console.log($http);

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
    }
    AppCtrl.$inject = ['$http', '$interval'];

    let mod = angular.module('app', []);

    mod.directive('app', app);

    // mod.component('outsideweather', outsideWeather());
    // .service('GeoLocation', geolocation.default)
    // .service('OpenWeather', openweather.default)
    return mod;

});


