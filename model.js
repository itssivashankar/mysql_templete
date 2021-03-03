var Sequelize = require('sequelize');
var db_name = "test";
var Op = Sequelize.Op;

const operatorsAliases = {
	$notIn	: Op.notIn,
	$gte  	: Op.gte,
	$lte	: Op.lte,
	$lt   	: Op.lt,
	$gt   	: Op.gt,
	$ne   	: Op.ne,
	$or 	: Op.or,
	$like 	: Op.like,
	$notLike: Op.notLike
}

var sequelize_port 	=  3306,
    db_username		=  "infyn",
    db_password		=  "infyn@321",
    db_name    		=  "db_name";

/*const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',
  storage:  'testdb',
  logging: false,
  operatorsAliases 
})*/

var sequelize = new Sequelize('mysql://'+db_username+':'+db_password+'@localhost:'+sequelize_port+'/'+db_name,{ define: {charset: 'utf8',collate: 'utf8_general_ci', timestamps: true},logging:false,dialectOptions: {dateStrings: true,typeCast: true},timezone: '+05:30',operatorsAliases});

//var sequelize = new Sequelize('mysql://'+db_username+':'+db_password+'@localhost:'+sequelize_port+'/'+db_name,{ define: {charset: 'utf8',

try {
 sequelize.authenticate();
 console.log("connection created")
}catch(error){
 console.log("error")
}

var User = sequelize.define('user',{
user_id    : { type: Sequelize.UUID },
role       : { type: Sequelize.STRING },
user_name  : { type: Sequelize.STRING}
})
sequelize.sync();

module.exports = {
User:User
}
