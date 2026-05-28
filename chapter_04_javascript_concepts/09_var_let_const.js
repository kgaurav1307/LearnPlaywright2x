

var browser = "Chrome";
var browser = "firefox"; // redeclaration allowed 
browser = "edge"; // reassignment allowed 

// for ,function 

var testCases = ["login" , "logout" , "signup"] ;
for(var i=0 ; i < testCases.length ; i++) {
    console.log ("Running test:" ,testCases[i]);
}

console.log("Loop counter leaked outside" , i);

