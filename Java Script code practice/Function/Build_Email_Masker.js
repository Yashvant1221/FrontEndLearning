function maskEmail(email) {
    let symbolIndex = email.indexOf("@");
    let firstChar = email[0];
    let maskedEmail = firstChar + "*".repeat(symbolIndex - 2) + email[symbolIndex - 1] + email.slice(symbolIndex);
    return maskedEmail;
}

let email = "testing@gmail.com";
console.log(maskEmail(email));

email = "apple.pie@example.com";
console.log(maskEmail(email));

email = "freecodecamp@example.com";
console.log(maskEmail(email));

email = "user@domain.org";
console.log(maskEmail(email));
