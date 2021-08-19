let a = 30
let b = 60

let lcm = 1;
let smallestOfBoth = smallest(a, b);
for (let i = 2; i <= smallestOfBoth; i = i + 1) {
    let isDivisible = isIDivisibleByBothNumbers(i, a, b);
    if (isDivisible === true) {
        lcm = i;
        break;
    }
}
console.log("LCM is :", lcm)

function isIDivisibleByBothNumbers(i, a, b) {
    let isADivisible = isRemainderZero(a, i);
    let isBDivisible = isRemainderZero(b, i);
    if (isADivisible && isBDivisible) {
        return true;
    } else {
        return false;
    }
}

function isRemainderZero(divisor, divider) {
    if (divisor % divider == 0) {
        return true;
    } else {
        return false;
    }
}

function smallest(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}