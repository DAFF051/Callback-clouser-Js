//Here, function foo() is only being use to call function bar()
function foo(func) {
    //finction "foo()" is invoking funcion bar() inside it.
    bar();
    }
    
    function bar() {
      console.log("Hello, I am bar!" + " 'I am invoking with the help of foo.' ");
    }
    
    // As we call the function foo it excutes and run the code inside it
    foo(bar);
    // ________________________________________________________________________
    //Here, function foo() is only being use to call function bar()
function foo(func) {
    //finction "foo()" is invoking funcion bar() inside it.
    bar();
    }
    
    function bar() {
      console.log("Hello, I am bar!" + " 'I am invoking with the help of foo.' ");
    }
    
    // As we call the function foo it excutes and run the code inside it
    foo(bar);
    // ________________________________________________________________________________
    'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num){

  var array = [];
  for(var i = 0; i < num;)
      array[i++] = str;
  return array.join('');
}
console.log('for', repeatStringNumTimesWithFor('abc', 3));


// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
    var repeatedString = "";
    while (num > 0) {
      repeatedString += str;
      num--;
    }
    return repeatedString;
  }
  repeatStringNumTimesWithWhile("abc", 3);
  
  // use a 'do...while' loop
  function repeatStringNumTimesWithDoWhile(str, num) {
    let x='';
    do{
      x+=str;
      num--;
    } while(num>0) 
    str=x
    return str;
  }
  repeatStringNumTimesWithDoWhile("abc", 3);
// _____________________________________________________________________________________________
'use strict';
// paste your freeCodeCamp solutions in here
function Dog() {
    this.name = "Daisy";
    this.color = "Black";
    this.numLegs = 4;
}

// I'd assign different name nad color value. Next challenge FCC game me differnt Values.

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  
  let hound = new Dog();
//   _____________________________________________________________________________________________
use strict';

function multiplyAll(arr) {
    var product = 1;
      for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
          product *= arr[i][j];
        }
      }
    return product;
  }
multiplyAll([[1,2],[3,4],[5,6,7]]);
// ____________________________________________________________________________________________________
'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem
__________________________________________________________________________________________________________
'use strict';
/*Pass by Value:
In Pass by Value, Function is called by directly passing the value of the variable as the argument.
Changing the argument inside the function doesn’t affect the variable passed from outside the function.
Javascript always pass by value so changing the value of the variable never changes the underlying primitive (String or number).
In this function value is being "passed by value" too.*/
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);


/*Pass by Reference:
In Pass by Reference, Function is called by directly passing the reference/address of the variable as the argument.
Changing the argument inside the function affect the variable passed from outside the function.
In Javascript objects and arrays follows pass by reference.
so if we are passing object or array as an argument to the method, then there is a possibility that value of the object can change.
*/

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);
// ______________________________________________________________________________________________________________
'use strict';

function createBase(num){
    return function addSix(val){return num+val;};
};
const addSix = createBase(6);



addSix(10); // returns 16
addSix(21); // returns 27
// ________________________________________________________________________________________________________________________
'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function

// Replace `yourFunction` with the name of the function you just created
const uniqueValues = yourFunction(values);

console.log(uniqueValues);
// __________________________________________________________________________________________________________
