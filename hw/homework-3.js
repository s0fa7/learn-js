function sumOfSimvol(line, simv){
    if (typeof line !== "string" || line === undefined ){
        throw new Errorr("К данному типу переменных нельзя применить функцию");
    }

    let i = 0;
    for (let char of line){
       if (char == simv){
        i++;
       }
    }
        return console.log(`Количество символов ${simv} в строке = ${i}`);
}
console.log(sumOfSimvol("Я строка, пусть и не очень длинная", "т"));