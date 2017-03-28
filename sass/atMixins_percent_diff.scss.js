// call for function(kind of)
@mixin border-radius($radius){
	border-radius:$radius;
}
//call for @mixin by @include
//%can NOT pass the parament
.box{
	@include border-radius(10px);
}


//another exmaple
@mixin border-radius($amount: 5px)
-moz-border-radius: $amount
-webkit-border-radius: $amount
border-radius: $amount

//can be edited and defaultly use
h1
@include border-radius
.baidu_ad
@include border-radius(2px)