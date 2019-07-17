function addBorder(picture: string[]): string[] {
    const wall = '*'.repeat(picture[0].length + 2);
    const pictureWithSideWalls = picture.map((el) => `*${el}*`);
    return [wall, ...pictureWithSideWalls, wall];
}

console.log(addBorder(["abc", "ded"]));