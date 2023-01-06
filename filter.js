// Filter for number array
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Number array: ', numberArray);

function above5Filter(value){
    return value > 5;
};

var filteredNumberArray = numberArray.filter(above5Filter);

console.log("Filtered array: ", filteredNumberArray);


// Filter for string array
var shoppingList = ["Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (chocolate flavor)", "Pepto Bismol (cookie flavor)"];

console.log('Shopping List: ', shoppingList);

var searchValue = 'Bismol';

function containsFilter(value){
    return value.indexOf(searchValue) !== -1;
};

var searchedShoppingList = shoppingList.filter(containsFilter);

console.log('Searched shopping list: ', searchedShoppingList);