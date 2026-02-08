function fearNotLetter(letters) {
    for (let i = 0; i < letters.length - 1; i++) {
        let currentLetter = letters.charCodeAt(i);
        let nextLetter = letters.charCodeAt(i + 1);
        if (nextLetter !== currentLetter + 1) {
            return String.fromCharCode(currentLetter + 1);
        }
    }
    return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));