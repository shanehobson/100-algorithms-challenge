function alphabeticShift(inputString: string): string {
    for (let i = 0; i < inputString.length; i++) {
        const charCode = inputString.charCodeAt(i);
        const newChar = inputString[i] === 'z' ? 'a' : String.fromCharCode(charCode + 1);
        inputString = inputString.slice(0, i) + newChar + inputString.slice(i + 1);
    }
    return inputString;
}

console.log(alphabeticShift('crazy'));