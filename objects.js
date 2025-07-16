let user = {
    name: 'Sara',
    age: 15
};
console.log(user.name);
user['like dogs'] = true;
delete user.age;

for(let key in user){
    console.log(user[key]);
}

function checkEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let zp = 0;
// function sum(key){
//     zp = zp + key;
// }
// function calculatingSalaries(obj){
//     for (let key in obj){
//         salaries[key].sum;
//     }
//     return zp;
// }
for (let key in salaries){
        zp += salaries[key];
     }
console.log(`Общая зп сотрудников составляет ${zp}`);

let clone = {};

for (let key in user) {
  clone[key] = user[key];
}
console.log(clone.name);

user.sayHi = function(){
  console.log(`hello!! i am ${this.name}`);
}
user.sayHi();

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }
// let user1 = new User ("Anna");

let newValue = 0;
function Accumulator(startingValue){
  this.value = startingValue;

  this.read = function(newValue){
    this.value += +newValue
  }
}

let accumulator = new Accumulator(1);

accumulator.read(2);
accumulator.read(1);

console.log(accumulator.value);