function multiply(num1){
    return function (num2){
        return function (num3){
            return num1 * num2 * num3;
        }
    }
}

console.log(multiply(2)(3)(4)); // Output: 24



