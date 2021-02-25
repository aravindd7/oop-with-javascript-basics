//how to declare a array in JavaScript

//Type1

var fruit_list = Array();

fruit_list[1] = "Banana";
fruit_list[2] = "Maça";
fruit_list[3] = "Morango";
fruit_list[4] = "Uva";

alert(fruit_list[1]);

//Type2

var fruit_list2 = [];

fruit_list2[1] = "Banana";
fruit_list2[2] = "Maça";
fruit_list2[3] = "Morango";
fruit_list2[4] = "Uva";

alert(fruit_list2[3]);

//Type3 - When we dont tell the key of the array, he will initiate in 0 position

var fruit_list3 = Array("Banana", "Maça", "Morando", "Uva");

alert(fruit_list3[0]);

//Type4 - When we dont tell the key of the array, he will initiate in 0 position

var fruit_list4 = ["Banana", "Maça", "Morando", "Uva"];

alert(fruit_list4[1]);