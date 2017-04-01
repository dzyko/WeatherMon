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

require(['app', 'angular'], function (app, angular) {
    angular.bootstrap(document, ['app']);
});

// if (typeof define !== 'function') {
//     var define = require('amdefine')(module);
// }


