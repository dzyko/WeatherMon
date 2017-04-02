define(['app'], (app) => {
        // console.log('========= app geo =========');
        // console.log(app);
        
   class GeoLocation {
        constructor(/*$http*/) {
            console.log('========= GeoLocation service constructor()=========');
            // console.log($http);
        }

        getLocation(){
            let promise = new Promise((resolve, reject) => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition( position => {
                        resolve(position);
                        // position.coords.latitude;
                        // position.coords.longitude;
                    });
                } else {
                    reject("Геолокация не поддерживается браузером.");
                }
            });

            return promise;
        }

        // getLocationWithInterval() {
        //     var myObservable = Rx.Observable.create(observer => {
        //     observer.next('foo');
        //     setTimeout(() => observer.next('bar'), 1000);
        //     });
        //     myObservable.subscribe(value => console.log(value));     

        //     var timerId = setInterval(function() {
                
        //     }, 10000);
        // }
    }
    // GeoLocation.$inject = ['$http'];
    // return GeoLocation;
    app.service('GeoLocation', GeoLocation);
});

// export default GeoLocation;