function truncateString(str, num) {
    if (str.length > num) {
        const shortString = str.slice(0, num);
        return shortString + "..."
    } else {
        return str;
    }
}

let str = "A-tisket a-tasket A green and yellow basket";
let num = 8;
console.log(truncateString(str, num));

str = "Peter Piper picked a peck of pickled peppers";
num = 11;
console.log(truncateString(str, num));

str = "A-tisket a-tasket A green and yellow basket";
num = "A-tisket a-tasket A green and yellow basket".length;
console.log(truncateString(str, num));

str = "A-";
num = 1;
console.log(truncateString(str, num));

str = "Absolutely Longer";
num = 2;
console.log(truncateString(str, num));