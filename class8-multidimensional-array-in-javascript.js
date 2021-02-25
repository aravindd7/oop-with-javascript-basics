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

document.write(things_list["frutas"][2]);
document.write("<br />");
document.write(things_list["pessoas"][1]);

/* Another type of declaration

things_list['frutas'] = Array("Banana", "Maça", "Morango");

document.write(things_list["frutas"][0]);

*/