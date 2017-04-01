class GeoLocation {
    constructor(/*$http*/) {
        console.log('========= GeoLocation constructor()=========');
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
                reject("Geolocation is not supported by this browser.");
            }
        });

        return promise;
    }
}
// GeoLocation.$inject = ['$http'];

export default GeoLocation;