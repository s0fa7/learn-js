/**
 * 
 * @param {string} password 
 * @param {() => boolean} callback 
 */

function checkPassword(password, callback) { 
    if(password.length<8){
    console.log("пароль должен содержать больше 8 символов");
    }
    if (typeof password !== "string"){
        console.log("Параметр password должен быть строкой");
    }

    if (callback(password)){
        console.log("Вы придумали хороший пароль");
    } else {
        console.log("Не слишком удачный пароль (должны быть буквы и цифры), попробуйте ещё");
    }
} 
checkPassword("12345abc678", (password) =>{
    const numbers = [];
    const letters = [];
    for(let i = 0; i < password.length; i++){
        if (password[i].match(/\d/)){
            numbers.push(password[i]);
        } else {
            letters.push(password[i]);
        }
    }
    if (numbers.length === 0 || letters.length === 0){
        return false;
    }
    return true;
});
