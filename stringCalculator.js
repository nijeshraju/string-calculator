function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;
    
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts.slice(1).join("\n");
    }

    return numbers
        .split(delimiter)
        .map(Number)
        .reduce((sum, num) => sum + num, 0);
}

module.exports = add;