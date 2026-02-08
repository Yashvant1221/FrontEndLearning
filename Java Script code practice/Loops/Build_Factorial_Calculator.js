function factorialCalculator(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}

let num = 5;
let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

num = 7;
factorial = factorialCalculator(num);
resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);