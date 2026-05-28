// let is block scoped 

// let a = 10;
// let retryCount = 0;
// retryCount = retryCount+1;
// console.log("Retry attempt :", retryCount)

// let a = 10;
// let retryCount = 0;
// retryCount = retryCount+1;
// retryCount = retryCount+1;
// let retryCount = 5 ; // SyntaxError: Identifier 'retryCount' has already been declared
// console.log("Retry attempt :", retryCount)


let testStatus = "Pending";
if(testStatus==="Pending") {
    let executionTime = 1200;
    console.log("Inside block :",executionTime);

}

console.log(executionTime) ;

