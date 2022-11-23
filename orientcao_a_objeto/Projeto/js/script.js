class Calculator {
    constructor() {
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }

    clearValues() {
        this.upperValue.textContent = '0';
        this.resultValue.textContent = '0';
    }

    checklistDig(input, upperValue, reg) {
        if ((!reg.test(input)) &&
            !reg.test(upperValue.substr(upperValue.length - 1))) {
            return true;
        } else {
            return false;
        }
    }
    //resolve a operação
    resolution() {
        //Exolode uma string em um array
        let upperValueArray = (this.upperValue.textContent).split(' ')
        //reultado da operação
        let result = 0;
        for (let i = 0; i <= upperValueArray.length; i++) {

            let actualItem = upperValueArray[i];

            if (actualItem == '+') {
                result = parseFloat(upperValueArray[i - 1]) + parseFloat(upperValueArray[i + 1]);
            }
        }

        if (result) {
            calc.reset = 1;
        }

        this.upperValue.textContent = result;
        this.resultValue.textContent = result;
    }

    btnPress() {
        let input = this.textContent;
        let upperValue = calc.upperValue.textContent;

        //verificar se tem só numero
        var reg = new RegExp('^\\d+$');


        // se precisar resetar, limpa o display
        if (calc.reset && reg.test(input)) {
            upperValue = '0';
        }

        // limpa a prop de reset
        calc.reset = 0;

        //Ativa metodo de limpar o display 
        if (input == 'AC') {
            calc.clearValues();

        } else if (input == '=') {
            calc.resolution()


        } else {

            //Cecha se precisa adiocionar ou não 
            if (calc.checklistDig(input, upperValue, reg)) {
                return false;
            }
            //Adiciona espaço aos operadores
            if (!reg.test(input)) {
                input = ` ${input} `;
            }

            if (upperValue == '0') {
                calc.upperValue.textContent = input;
            } else {
                calc.upperValue.textContent += input;
            }
        }
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

