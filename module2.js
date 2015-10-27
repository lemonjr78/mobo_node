var a = 1;
module.exports.a = a;

module.exports.b = a;
module.exports = function(){
	console.log('module 2!')
};