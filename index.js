module.exports=require('sqlite3')

require('sqlite3').Database.prototype=require('bluebird').promisifyAll(require('sqlite3').Database.prototype)
require('sqlite3').Statement.prototype=require('bluebird').promisifyAll(require('sqlite3').Statement.prototype)
