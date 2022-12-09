// !prototypal inheritacnce

// let car = {
//     name : "BMW"
// }
// let BMW = {
//     color : "Black"
// }
// BMW.proto

// console.log(BMW.name)




// Other Way 
function User(name){
    this.name = name
}

let obj = {
    getName(){
        console.log(this.name)
    }
}


User.prototype = obj
let newUser  = new User("Javid")
newUser.getName()



//Function contruct prototype

function Admin(name , age , salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}
Admin.prototype.getNameeee = function(){
    console.log(this.name)
}
function Employee(name , age, salary,place , days){
    Admin.apply(this,[name,age,salary])  // inheritance of contructor property
    this.place = place
    this.days = days
}
Employee.prototype = Admin.prototype  // inheritance of prototype protype properties

let employee = new Employee('Javid',22,12222,'kaup',20)
let admin = new Admin('Aizan',1,11111,)
employee.getNameeee()
