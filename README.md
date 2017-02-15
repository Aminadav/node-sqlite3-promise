# node-sqlite3-promise

Promise version of sqlite3.

## How to use it?

```
var sqlite3=require('sqlite3-promise')

init() 

async function init(){
	var db=new sqlite3.Database('candelete.db')
	await db.runAsync('create table abc (c tinyint)')
	await db.runAsync('insert into abc values (3)')
	var result = await db.allAsync('select * from abc')
	console.log(result)  // {[a:3]}
}
```