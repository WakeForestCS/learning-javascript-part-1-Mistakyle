function add(num1, num2, callback) {
  console.log(num1+num2)
  callback()
}

//add(4,5, function() {
  //  console.log("I used my callback")
//});

//parent scope
a = 3

//child scope
function demScope(){
var a = 1
var b = 2
console.log(a)
}
demScope()
console.log(a)
console.log(b)
