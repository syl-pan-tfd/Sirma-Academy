function double(number) {
    return number * 2;
}

function square(number) {
    return number * number;
}

function compose(func1, func2) {
    return function(value) {
        return func2(func1(value));
    }
}

const doubleThenSquare = compose(double, square);

console.log(doubleThenSquare(3)); // Output: 36



