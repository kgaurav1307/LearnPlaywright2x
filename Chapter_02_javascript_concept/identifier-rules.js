// JavaScript Identifier Rules Examples

// 1. Must start with a letter, underscore, or dollar sign
let validName = "starts with letter";
let _underscore = "starts with underscore";
let $dollar = "starts with dollar sign";

// 2. Subsequent characters can be letters, digits, underscores, or dollar signs
let name1 = "letter then digit";
let name_2 = "letter then underscore then digit";
let name$3 = "letter then dollar then digit";
let a1_b2$c3 = "mixed valid characters";

// 3. Cannot start with a digit (uncomment to see error)
// let 1invalid = "starts with digit"; // SyntaxError

// 4. Cannot contain spaces (uncomment to see error)
// let my name = "contains space"; // SyntaxError

// 5. Cannot contain hyphens (uncomment to see error)
// let my-name = "contains hyphen"; // SyntaxError

// 6. Cannot use reserved words as identifiers (uncomment to see error)
// let var = "reserved word"; // SyntaxError
// let function = "reserved word"; // SyntaxError
// let class = "reserved word"; // SyntaxError
// let return = "reserved word"; // SyntaxError

// 7. Case-sensitive examples
let myVar = "lowercase v";
let myvar = "lowercase v";
// myVar and myvar are TWO DIFFERENT variables

// 8. Unicode letters and digits are valid
let 变量 = "Chinese characters";
let π = "pi symbol";
let résumé = "accented letter";

// 9. Emoji are NOT valid (uncomment to see error)
// let 😀 = "smiley"; // SyntaxError

// 10. Examples of valid vs invalid identifiers side by side
let camelCase = "valid: starts with lowercase letter";
let PascalCase = "valid: starts with uppercase letter";
let snake_case = "valid: uses underscore";
let $jQuery = "valid: starts with dollar sign";
let _private = "valid: starts with underscore";

// These are all valid but NOT recommended for readability
let $ = "valid but confusing";
let _ = "valid but confusing";
let $$$ = "valid but confusing";

// Summary of invalid patterns (all commented out to prevent errors)
// let 123abc = "invalid: starts with digit";
// let my-var = "invalid: contains hyphen";
// let my var = "invalid: contains space";
// let my.var = "invalid: contains dot";
// let break = "invalid: reserved word";
// let if = "invalid: reserved word";
// let else = "invalid: reserved word";
// let for = "invalid: reserved word";
// let while = "invalid: reserved word";
// let true = "invalid: reserved word";
// let false = "invalid: reserved word";
// let null = "invalid: reserved word";
// let undefined = "invalid: reserved word (in strict mode)";

console.log("Check the comments in this file to see all identifier rules!");
console.log(validName, _underscore, $dollar);
console.log("Case sensitive:", myVar, "!==", myvar);
console.log("Unicode:", 变量, π, résumé);
