//console.log("satu")
//setTimeout(() => {
//console.log("dua")
//}, 3000)
//console.log("tiga")

//const hitung = (angka1,angka2) => {
    //let hasil = angka1 * angka2
    //let result = `${ angka1 } + ${ angka2 } = ${ hasil }`
    //return result;
//}

//const cb = () => {
    //return "ini callback"
//}


//console.log(hitung(10,20,cb))

var myjson = {
	'nama':'apa aja boleh'
}
var c = {
	add:function(param,callback){
		return callback(param);
	}
}
var d = null;

//setTimeout(function(){

	c.add(myjson,function(res){
		c.add(res,function(res){
			d = res;
			console.log(d);
		});
	});

//},0);

console.log(d);
var x = async function(param){
	return param;
}
var e = async function(param, callback){
		return await callback(x(param));
	}
var f = null;

//setTimeout(function(){

e('contoh',function(res){
	f = res;
	console.log(f);
});

//},0);

console.log(f);