function sumOfString(line){
    if (typeof line !== "string" || "undefined" ){
        throw new Error("К данному типу переменных нельзя применить функцию");
    }
    let i = 0;
    for (let char of line){
        i++;
    }
    return console.log(`Количество символов в строке = ${i}`);

}
console.log(sumOfString("Я строка"));
console.log(sumOfString(""));
console.log(sumOfString(111));