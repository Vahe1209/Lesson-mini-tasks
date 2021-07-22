const REGEXP = /<[a-z] .+>/g;

let str = '<> <a href="/"> <input type="radio" checked> <b>';

console.log(str.match(REGEXP));

// '<a href="/">', '<input type="radio" checked>', "<b>";
