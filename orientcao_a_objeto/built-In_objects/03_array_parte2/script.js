let a = [0, 1, 2];
let b = new Array(3, 4, 5);

console.log(a.length);
console.log(b.length);

a.push = 4
b.push = 5
//Array.prototype.push()


console.log(a);
console.log(b);
a.pop();

let c = {}

console.log(c.push(4));//push != Object -> push == Array