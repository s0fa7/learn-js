function arrayNumber (object){
    if (object.length<1){
        throw new Error("К данному типу переменных нельзя применить функцию");
    }

    let r = 0;
    for(let i=0; i< object.length; i++){
        if (object[i]>r) {
            r = object[i];
        }
            
    }
    return r;

}
const object = [2, 5, 15, 2, 9];
console.log(`Наибольшее значение массива = ${arrayNumber([2, 5, 15, 2, 9])}`);