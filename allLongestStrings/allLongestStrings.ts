function allLongestStrings(array: string[]): string[] {
    let longest = 0;
    let longestArray = [];
    array.forEach(el => {
        if (el.length > longest) {
            longest = el.length;
            longestArray = [el];
        } else if (el.length === longest) {
            longestArray.push(el);
        }
    });
    return longestArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));