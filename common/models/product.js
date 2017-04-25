'use strict';

module.exports = function(Product) {

    Product.customList = function(cb) {
        Product.find('', function(err, response) {
            console.log(response);
            console.log(err);
            cb(null, response);
        });
    };
    Product.remoteMethod(
        'customList', {
            http: {
                path: '/customlist',
                verb: 'get'
            },
            returns: {
                arg: 'customlist',
                type: 'string'
            }
        }
    );

};
