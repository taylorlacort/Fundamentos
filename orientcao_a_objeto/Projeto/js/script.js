class Calculator {
    constructor() {
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number')
        this.reset = 0;
    }
    btnPress() {
        let input = this.textContent;
        let upperValue = calc.upperValue.textContent;
        //verificar se tem só numero
        var reg = new RegExp('^\\d+$')
        if (upperValue == '0') {
            calc.upperValue.textContent = input;
        } else { calc.upperValue.textContent += input; }
    }
}

//start obj
let calc = new Calculator;

//start btns

let buttons = document.querySelectorAll('.btn');

//map all buttons

for (let i = 0; buttons.length > i; i++) {
    buttons[i].addEventListener('click', calc.btnPress)
}

