var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var i = 0;
// Write a while loop that prints out the contents of ingredients:
while (ingredients.length > i) {
	console.log(ingredients[i]);
	i++;
}


// Write a for loop that prints out the contents of ingredients:
for (i = 0; ingredients.length > i; i++) {
	console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (i = ingredients.length; i > 0; i--) {
	console.log(ingredients[i])
}