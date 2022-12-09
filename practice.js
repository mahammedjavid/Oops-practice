// function Circle(radius){
//     let a = 10;
//     let defaultMethod = function(){
//         console.log('default')
//     }
//     this.radius = radius
//     this.draw = function(){
//         console.log('Draw')
//     }
// }

// let newCircle = new Circle(2) 
 // newCircle has only acces to radius and draw bcz that sets this to object And 'a' and 'defaoultMethod' are private cause this defined using let i cant be accesed for instances

 //!if i want to acces  the defaultMethod outside 

//  function Circle(radius){
//     let a = 10;
//     let defaultMethod = function(){
//         console.log('default')
//     }
//     this.radius = radius
//     this.draw = function(){
//         console.log('Draw')
//     }
//     this.getDefault = function(){
//         return defaultMethod()
//     }
// }
// let newCircle = new Circle(2)
// console.log(newCircle.getDefault())

//here we access only the values cannot modify the values 

//!another method to acces the private properties outside is Using object.define   > i want access likethis -- newCircle.defaultMethod but i cannot modify

function Circle(radius){
    let a = 10;
    let defaultMethod = {
        x :10 ,
        y : 20
    }
    this.radius = radius
    this.draw = function(){
        console.log('Draw')
    }
    Object.defineProperty(this, "private", {
        get: function() {
            return defaultMethod
        }
    })
}
let newCircle = new Circle(2)
console.log(newCircle.private)

