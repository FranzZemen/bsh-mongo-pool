/**
 * Created by Franz on 10/3/2015.
 */

(function () {
    'use strict';
    var log = require('bunyan').createLogger({name: 'bsh-mongo-pool', level: 'info'});
    var q = require('q');
    var mongodb = require('mongodb');
    var db_;

    module.exports.init = function (mongoURL, options) {
        log.debug({options:options}, "Initializing");
        if (!options) {
            options = {};
        }
        var deferred = q.defer();
        mongodb.MongoClient.connect(mongoURL, options, function (err, db) {
            if (err) {
                log.error(err);
                deferred.reject(err);
            } else {
                db_ = db;
                deferred.resolve(db);
            }
        });
        return deferred.promise;
    };


    module.exports.db = function () {
        if (db_) {
            return db_;
        } else {
            throw new Error("Mongo pool not initialized");
        }
    };

})(); 
