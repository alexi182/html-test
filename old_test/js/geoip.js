var GeoIP = {

    url: '/ajax/geoip',

    getCity: function () {
        return new Promise(function (resolve, reject) {
            $.get(GeoIP.url, function (data) {
                if ('ok' == data.result) {
                    resolve(data);
                    return true;
                }
                reject(data);
            }).error(function (e) {
                throw new Error(e);
            });
        });
    }

};