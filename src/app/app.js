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



define(['angular', 'services/geolocation.service'], function (angular, GeoLocation) {
    let app = () => {
      return {
        template: require('./app.html'),
        controller: AppCtrl,
        controllerAs: 'app'
      }
    };

    class AppCtrl {
      constructor($http, GeoLocation) {
        console.log('AppCtrl');
        // console.log($http);
        GeoLocation.getLocation()
        .then(
          resp=>{
            console.log(resp);
          },
          err=>console.log(err)
        );
      }
    }
    AppCtrl.$inject = ['$http', 'GeoLocation'];

    return angular
      .module('app', [])
      .directive('app', app)
      .service('GeoLocation', GeoLocation.default);
});
