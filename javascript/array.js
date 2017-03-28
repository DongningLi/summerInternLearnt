/* result:
Audi
BMW
Volvo
*/

<!DOCTYPE html>
<html>
<body>

<script>
var i;
var cars = new Array();
cars[0] = "Audi";
cars[1] = "BMW";
cars[2] = "Volvo";

for (i=0;i<cars.length;i++)
{
document.write(cars[i] + "<br>");
}
</script>

</body>
</html>



//for循环遍历对象属性
<!DOCTYPE html>
<html>
<body>
<p>点击下面的按钮，循环遍历对象 "person" 的属性。</p>
<button onclick="myFunction()">点击这里</button>
<p id="demo"></p>

<script>
function myFunction()
{
var x;
var txt="";
var person={fname:"Bill",lname:"Gates",age:56}; 

for (x in person)
{
txt=txt + person[x];
}

document.getElementById("demo").innerHTML=txt;
}
</script>
</body>
</html>




//while循环遍历对象
<!DOCTYPE html>
<html>
<body>

<script>
cars=["BMW","Volvo","Saab","Ford"];
var i=0;
while (cars[i])  //!!!!!!!!!!!!!当cars[i]一直存在的时候
{
document.write(cars[i] + "<br>");
i++;
}
</script>

</body>
</html>

break list/while //....可用来跳出任意label




//convat 2 arrays
arr.concat(arr2) //paste arr2 after arr1
//join symbol into array
arr.join() //default is comma

//array.length不是只读的。 下面可以限制colors只有2个值
var colors = ["red", "blue","green"];
colors.length = 2;
alert(colors[2]);   //result: undefined。 第三那个值被删
//array 可当栈用
colors.pop(); //取得最后一项
colors.shift(); //取得第一项
colors.push("green", "red","blue");