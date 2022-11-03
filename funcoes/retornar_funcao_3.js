function somar1(a, b) {
    return a + b;
}

console.log(somar1(5, 9));

function somar2(a) {
    return function (b) {
        return a + b
    }
}

console.log (somar2(1)(2))

const somar10 = somar2(10)

console.log(somar10(5))
console.log(somar10(15))