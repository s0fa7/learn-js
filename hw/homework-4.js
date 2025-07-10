function arifmatica(number1, number2, type) {
    let rez = 0;
    switch (type) {
        case '+':
            rez = number1 + number2;
            return console.log(`Результат операции = ${rez}`);
        case '-':
            rez = number1 - number2;
            return console.log(`Результат операции = ${rez}`);
        case '*':
            rez = number1 * number2;
            return console.log(`Результат операции = ${rez}`);
        case '/':
            if (number2 == 0){
                return console.log("На 0 делить нельзя");
            }
            rez = number1 / number2;
            return console.log(`Результат операции = ${rez}`);
        default:
            return console.log("Ошибка");
    }
}
console.log(arifmatica(2, 2, "+"))