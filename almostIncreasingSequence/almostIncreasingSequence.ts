function almostIncreasingSequence(sequence: number[]): boolean {
    let mistakes = 0;
    for (let i = 0; i < sequence.length - 1 && mistakes < 2; i++) {
        if (sequence[i] >= sequence[i + 1]) mistakes++;
    }
    return mistakes < 2;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 