var should = require ('should');
var bshMongoPool = require('./index');

describe('Connection pool tests', function () {
    describe ('Unitialized Test', function () {
        it ('should fail', function () {
            (function() {bshMongoPool.db();}).should.throw(Error);
        });
    });
    describe ('Initialization', function () {
        it('should initialize', function (done) {
            bshMongoPool.init('mongodb://localhost', {server: {poolSize:10}}).then(function () {
                should.exist(bshMongoPool.db());
                done();
            }, function (err) {
                console.log("bad");
                setTimeout(function () {
                    throw err;
                }, 1000);
            });
        });
    });
});