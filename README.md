# bsh-mongo-pool

This npm module is a simple wrapper that caches the Mongo 2.X db value returned from a MongoClient.connect call.

## Installation

     npm install bsh-mongo-pool --save

### Initialization

Initialize once for each pool you want (typically only one).  Pass the mongo url as well as the options as documented in the MongoDB driver 2.0 documentation for MongoClient.connect

     var mongoPool = var require('bsh-mongo-pool');
     mongoPool.init(mongoURL, options).then(function(dbIfYouNeedItHere) {}, function(err) {//end your program});
     var db = mongoPool.db();

The most often used option is likely to be {server:{poolSize:[#connections]}}

