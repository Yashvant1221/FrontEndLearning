let lunches = [];

function addLunchToEnd(lunches, str) {
    lunches.push(str);
    console.log(`${str} added to the end of the lunch menu.`);
    return lunches;
}

console.log(addLunchToEnd(lunches, "Tacos"));
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));

function addLunchToStart(lunches, str) {
    lunches.unshift(str);
    console.log(`${str} added to the start of the lunch menu.`);
    return lunches;
}

console.log(addLunchToStart(lunches, "Sushi"));
console.log(addLunchToStart(["Pizza", "Burger"], "Sushi"));


function removeLastLunch(lunches) {
    if (lunches.length == 0) {
        console.log("No lunches to remove.");
    } else {
        let newArr = lunches.pop(lunches);
        console.log(`${newArr} removed from the end of the lunch menu.`);
    }
    return lunches;
}

console.log(removeLastLunch(["Stew", "Soup", "Toast"]));

function removeFirstLunch(lunches) {
    if (lunches.length == 0) {
        console.log("No lunches to remove.");
    } else {
        let newArray = lunches.shift(lunches);
        console.log(`${newArray} removed from the start of the lunch menu.`);
    }
    return lunches;
}

console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));

function getRandomLunch(lunches) {
    if (lunches.length == 0) {
        console.log("No lunches available.");
    } else {
        const lunchElement = Math.floor(Math.random() * lunches.length);
        const randomLunch = lunches[lunchElement];
        console.log(`Randomly selected lunch: ${randomLunch}`);
    }
}

console.log(getRandomLunch(["Banana", "Orange", "Papaya"]));

function showLunchMenu(lunches) {
    if (lunches.length == 0) {
        console.log("The menu is empty.");
    } else {
        const [lunch1, lunch2, ...rest] = lunches;
        console.log(`Menu items: ${lunch1}, ${lunch2}, ${rest.join(", ")}`);
    }
}

console.log(showLunchMenu(["Greens", "Corns", "Beans"]));
console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]));