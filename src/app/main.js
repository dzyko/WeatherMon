// requirejs.config({
//     nodeRequire: require,
//     paths: {
//         angular: '../../node_modules/angular/angular'
//     },
//     shim: {
//         'angular': {
//             exports:'angular'
//         }
//     }
//     // map: {
//     //     '*': {
//     //         'css': '../../node_modules/require-css/css'
//     //     }
//     // }    
// });

    // 

require([
    'angular',
    'app',
    'components/outsideWeather',
    'components/watchLocationsWeather'
    ], 
    function (angular, app) {
        angular.bootstrap(document, [app.name]);
    }
);


