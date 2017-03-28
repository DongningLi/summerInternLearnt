var a =1;
(
	fuction(){
		a=5;
	}
)();
console.log(a);//result:5

var a =1;
(function(){
	var a = 5;
})()
console.log(a); //result:1------define a new variable by using "var" on a 

