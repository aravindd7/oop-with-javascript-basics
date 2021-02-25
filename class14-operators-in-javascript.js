// arithmetic operators

var num = 0; // Assignment 
num = num + 2; // num = 2 Addition
num = num - 0; // num = 2 Subtraction
num = num * 3; // num = 6 Multiplication
num = num / 2; // num = 3 Division
num++; // num = 4
num--; // num = 3

1 + 2 // => 3: addition
"1" + "2" // => "12": concatenation
"1" + 2 // => "12": concatenation after number-to-string
1 + {} // => "1[object Object]": concatenation after object-to-string
true + true // => 2: addition after boolean-to-number

// assignment operators

num += 1; // num = 4 Addition assignment (x += y) == (x = x + y)
num -= 2; // num = 2 Subtraction assignment (x -= y) == (x = x - y)
num *= 3; // num = 6 Multiplication assignment (x *= y) == (x = x * y)
num /= 2; // num = 3 Division assignment (x /= y) == (x = x / y)
// % Modulus (remainder of a division operation)
num %= 3; //mod division num = 0; Remainder assignment (x %= y) == (x = x % y)


var i = 1, j = ++i; // i and j are both 2
var i = 1, j = i++; // i is 2, j is 1

// comparison operators

console.log('num == 1 : ' + (num == 1)); // Equal to: false
console.log('num === 1 : ' + (num === 1)); // Equal to (both value and object type) false
console.log('num != 1 : ' + (num != 1)); //  Not equal to true
console.log('num > 1 : ' + (num > 1)); // Greater than false
console.log('num < 1 : ' + (num < 1)); // Greater than or equal to true
console.log('num >= 1 : ' + (num >= 1)); // Less than false
console.log('num <= 1 : ' + (num <= 1)); // Less than or equal to true

// logical operators

console.log('true && false : ' + (true && false)); // And
console.log('true || false : ' + (true || false)); // Or
console.log('!true : ' + (!true)); // Not

// bitwise operators

console.log('5 & 1:', (5 & 1)); // AND
console.log('5 | 1:', (5 | 1)); // OR
console.log('~ 5:', (~5)); // NOT
console.log('5 ^ 1:', (5 ^ 1)); // Xor
console.log('5 << 1:', (5 << 1)); // left shoft
console.log('5 >> 1:', (5 >> 1)); // rigth shift