function addTwoDigits(n: any): number {
    const arr = n.toString().split('');
    return arr.reduce((a: string, b: string) => parseInt(a) + parseInt(b));
}

console.log(addTwoDigits(258));