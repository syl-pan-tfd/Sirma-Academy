function sumOfThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

function partialSum(number) {
    return function (num1, num2, num3) {
        return sumOfThree(num1, num2, num3) + number;
    }

}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3)); // Output: 11



