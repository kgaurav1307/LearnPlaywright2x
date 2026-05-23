// JavaScript Naming Conventions (Cases)

// 1. camelCase - First word lowercase, subsequent words capitalized
// Most common for variables and functions in JavaScript
let userName = "john_doe";
let totalPrice = 99.99;
let isAvailable = true;

function getUserInfo() {
    return "Fetching user...";
}

function calculateTotalPrice() {
    return totalPrice * 1.18; // with tax
}

// 2. PascalCase - Every word starts with uppercase letter
// Commonly used for class names and constructor functions
class UserAccount {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }
}

// 3. snake_case - Words separated by underscores, all lowercase
// Common in Python, SQL, and some API responses
let user_name = "john_doe";
let total_price = 99.99;
let is_available = true;

function get_user_info() {
    return "Fetching user...";
}

function calculate_total_price() {
    return total_price * 1.18;
}

// 4. SCREAMING_SNAKE_CASE - All uppercase with underscores
// Used for constants and environment variables
const API_KEY = "sk-1234567890abcdef";
const MAX_RETRIES = 5;
const DEFAULT_TIMEOUT = 30000;
const DATABASE_URL = "postgres://localhost:5432/mydb";

// 5. kebab-case - Words separated by hyphens
// NOT valid for JavaScript identifiers (variables/function names)
// BUT commonly used for file names, CSS classes, and HTML attributes
// let user-name = "john"; // INVALID in JavaScript!
// Valid usage: file names -> 07-Identifier-Part2.js
// Valid usage: CSS -> .user-profile { }
// Valid usage: HTML -> <div class="user-profile"></div>

// 6. Hungarian Notation - Prefix indicates type (older style, less common now)
let strName = "John";      // str = string
let nCount = 10;             // n = number
let bIsActive = true;        // b = boolean
let arrUsers = [];           // arr = array
let objPerson = {};          // obj = object
let elButton = null;         // el = DOM element

// Summary Examples Side-by-Side
let myVariableName = "camelCase";        // variables, functions
let MyVariableName = "PascalCase";       // classes, constructors
let my_variable_name = "snake_case";     // constants in some styles
let MY_VARIABLE_NAME = "SCREAMING_SNAKE_CASE"; // true constants
// let my-variable-name = "kebab-case";  // INVALID as JS identifier!

// Practical JavaScript Convention Tips:
// - Variables: camelCase (let userName)
// - Functions: camelCase (function getData())
// - Classes: PascalCase (class UserProfile)
// - Constants: SCREAMING_SNAKE_CASE (const MAX_SIZE)
// - Private fields: _leadingUnderscore (convention only)
// - File names: kebab-case or snake_case (user-profile.js)

console.log("Check the code comments to see all naming conventions!");
console.log("JavaScript Standard: camelCase for most identifiers.");

/*
 ============================================================
 MULTILINE COMMENT EXAMPLES
 ============================================================

 This is a standard block comment.
 It can span as many lines as needed.
 Everything between the slash-star and star-slash is ignored.

 ============================================================
*/

/**
 * JSDoc Style Multiline Comment
 * Used for generating documentation
 *
 * @example
 * let result = calculateTotalPrice();
 * console.log(result);
 */

// You can also chain single-line comments
// to create a multiline comment block.
// This is useful when you want to quickly toggle
// individual lines with Ctrl+/ in VS Code.

// VS Code shortcut for block comment: Shift + Alt + A
