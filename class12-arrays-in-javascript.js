//how to declare a array in JavaScript

//Type1

var fruit_list = Array();

fruit_list[1] = "Banana";
fruit_list[2] = "Maça";
fruit_list[3] = "Morango";
fruit_list[4] = "Uva";

console.log(fruit_list[1]);

//Type2

var fruit_list2 = [];

fruit_list2[1] = "Banana";
fruit_list2[2] = "Maça";
fruit_list2[3] = "Morango";
fruit_list2[4] = "Uva";

console.log(fruit_list2[3]);

//Type3 - When we dont tell the key of the array, he will initiate in 0 position

var fruit_list3 = Array("Banana", "Maça", "Morando", "Uva");

console.log(fruit_list3[0]);

//Type4 - When we dont tell the key of the array, he will initiate in 0 position

var fruit_list4 = ["Banana", "Maça", "Morando", "Uva"];

console.log(fruit_list4[1]);

var things_list = Array();

//We can add a new array in a array. Like a dictionary

things_list['frutas'] = Array();
things_list['pessoas'] = Array();

things_list['frutas'][1] = "Banana";
things_list['frutas'][2] = "Maça";
things_list['frutas'][3] = "Morango";

things_list['pessoas'][1] = "João";
things_list['pessoas'][2] = "José";
things_list['pessoas'][3] = "Maria";

console.log(things_list["frutas"][2]);
console.log("<br />");
console.log(things_list["pessoas"][1]);

/* Another type of declaration

things_list['frutas'] = Array("Banana", "Maça", "Morango");

document.write(things_list["frutas"][0]);

*/