function add(a: number, b: number): number {
    return a + b;
}

function add2(...param1: number[]): number {
    if (param1.length === 0) {
        return 0;
    } else {
        return param1.reduce((a, b) => a + b);
    }
}
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));
console.log(add2())

