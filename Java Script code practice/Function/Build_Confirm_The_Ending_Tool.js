function confirmEnding(word, check) {
    const endWord = word.slice(word.length - check.length);
    if (endWord == check) {
        return true;
    } else {
        return false;
    }
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));

console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));

console.log(confirmEnding("He has to give me a new name", "name"));

console.log(confirmEnding("Open sesame", "same"));

console.log(confirmEnding("Open sesame", "game"));

console.log(confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "nothing"));

console.log(confirmEnding("Abstraction", "action"));