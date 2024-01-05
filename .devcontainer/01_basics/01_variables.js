const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


function Difference(hoisting_var, hoisting_let,hoisting_const,scope_var,scope_let,scope_const,redeclaration_var,redeclaration_let,redeclaration_const) {
    this.hoisting_var = hoisting_var;
    this.hoisting_let = hoisting_let;
    this.hoisting_const = hoisting_const;
    this.scope_var=scope_var;
    this.scope_let= scope_let;
    this.scope_const= scope_const;
    this.redeclaration_var = redeclaration_var ;
    this.redeclaration_let = redeclaration_let ;
    this.redeclaration_const = redeclaration_const ;
  }
  
  const Difference123 = new Difference(" hosted at the top of global scope and can be used before declaration", " hosted at the top of some private scope and only available ater assigning value and cannot be used before declaration"," hosted at the top of some private scope and only available ater assigning value and cannot be used before declaration","Global scope","block scope(start to end of th current scope)","block scope","Yes we can redeclare in the same scope","No we cannot redeclare in the same scope","No we can not redeclare in the same scope");
  
  console.table(Difference123);

  //Hoisting 
  //Js engine read the whole code and take all variables and assign memory for them and 
//give them a value that is undefined and host all of them at the top of the environment. This is known as Hoisting.
  
  //example 1
  var a ;
 let b;
 console.log('Value of var' ,a);
 console.log('Value of let', b);
 //output
 // "Value of var" undefined
 //  "Value of let" undefined

 //example 2

 console.log('Value of var' ,a);
 console.log('Value of let', b1);
 var a;
 let b1;
 //output
//  "Value of var" undefined
//  "error"
//  "ReferenceError: Cannot access 'b' before initialization"
