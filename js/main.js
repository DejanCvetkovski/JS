//NUMBER

// const myVariable = "Mathematics"
// const myNumber = 42
// const myNumberString = "42"
// const myNumberFloat = 42.12323212
// const coordinates = "x(5,6), y(2,11)"

// console.log(Number(myNumberString));
// console.log(myNumberString);
// console.log(Number.parseFloat(myNumberFloat).toFixed(2));

//MATH

// console.log(Math.pow(2, 4));
// console.log(Math.min(2,11,22));
// console.log(Math.trunc(11.234523));
// console.log(Math.PI);
// console.log(Math.floor(Math.random() * 100));


// CHALENGE

// const n = "dejan"
// const radomIndex = Math.floor(Math.random() * n.length)

// console.log(n.charAt(radomIndex), "radomIndex");


//CONDITIONS

// const confirmToPlay = confirm("Do you wanna play a game?")

// if(confirmToPlay) {
//     let payerOneChoice = prompt("Enter your Choice")
//     if(payerOneChoice === "papper" || payerOneChoice === "sessors" || payerOneChoice === "rock"){
       

//         let  compChoise = Math.floor(Math.random() * 3 + 1)
//         let comp = 
               // compChoise === 1 ? "rock" : 
               // compChoise === 2 ? "sessors" : "papper"

//         let result = payerOneChoice === comp ? "Tie game" : 'Nema Veze'

//         console.log('====================================');
//         console.log(result);
//         console.log('====================================');
//         const palayAgain = confirm("Paly again")
//         if(palayAgain){
//             location.reload()
//         }

//     }else{
//         alert("you do not enter one of the papper, rock sessors")

//     }
 

// }else{
//     alert("ok, maby next time")
// }

//LOOPS


// let number = 0
// while (number < 50) {
//     number++
//     console.log(number);
// }

// do{
//     number++
//     console.log(number, "DO");

// }while (number < 50) 

// const array = ["m,acko", "deko", "igor"]

// for (let i = 0; i < array.length; i++) {
//    const newarr = []
//    if(array[i] === "igor") newarr.push(array[i])
//    console.log(newarr);

//     const element = array[i];
//     if(element === "igor") alert("IGOOR IT ISS") 
    
// }

// FUNCTIONS

// function getUserEmail (email) {
//     return email.slice(0, email.indexOf("@"))
// }

// function getUserEmailSplit (email) {
//     return email.split(".")
// } 

// function getUserEmailToUpperCase (email) {
//     return email.charAt(0).toUpperCase() + email.slice(1)
// } 

// console.log(getUserEmail("dejan@mail.com"));
// const l = getUserEmailSplit("dejan@mail.com")
// console.log(l[1]);
// console.log(getUserEmailToUpperCase("dejan@mail.com"));

// SCOPE

// let x = 3
// const y = 5

// function myNumber () {
//     console.log('====================================');
//     console.log(x);
//     console.log('====================================');

//     {
//        const x = 8
//         console.log('====================================');
//         console.log(x, "o");
//         console.log('====================================');
//     }
// }

// myNumber()

// ARR

// const myArr = ["A", "B", "C", "D", "E", "F"]

// const myString = myArr.join()

// console.log('====================================');
// console.log(myString);
// console.log('====================================');

// const newArr = myString.split(",")

// console.log('====================================');
// console.log(newArr);
// console.log('====================================');

// myArr.pop()

// console.log(myArr);

// myArr.push("F")

// console.log(myArr);

// myArr.unshift("1")

// console.log(myArr);

// myArr.shift()

// console.log(myArr);

// const newArrSlice =  myArr.slice(3)

// console.log(newArrSlice);

// console.log(myArr);
// const newArrSplice = myArr.splice(2, 1, "Cc")

// console.log(myArr);

// console.log(newArrSplice);

// myArr.splice(1, 1, "9")

// console.log(myArr);

// myArr.splice(1, 0, "9")

// console.log(myArr);

// OBEJCTS

// const myObj = {name: "Dejan"}

// const anotherObj = {
//     alive: true,
//     years: 38,
//     hobbies: ["coding", "eat", "sleep"],
//     beverege:{
//         morning: "coffie",
//         afternoon: "Ice Tea"
//     },
//     action: function () {
//         return `${this.beverege.morning} + is great combination`
//     },
//     action2(){
//         return `${this.beverege.afternoon} + is great combination`
//     }

// }

// console.log(anotherObj.action());
// console.log(anotherObj.action2());


// const vehicle = {
//     wheels: 4,
//     engine() {
//         return "WOOOHOOM"
//     }
// }

// console.log(vehicle);

// const truck = Object.create(vehicle) //Inheritance

// console.log(truck.wheels);

// truck.doors =  2

// console.log(truck);
// console.log(truck.wheels);
// console.log(truck.engine());

// const car = Object.create(vehicle)
// // car.engine = function() {return "VOOHOOOHOOHO"}
// car.engine = () => {return "VOKOKOOOOOO"}

// console.log(car.wheels);
// console.log(car.engine());

// const family = {
//     love: "ane",
//     brother: "Majstorot",
//     father: "Mitko",
//     mother:  "Mira",
// }

// family.dog = "Meggle"

// delete family.dog

// console.log(Object.keys(family));
// console.log(Object.values(family));

// for (fMember in family){
//     // console.log(fMember);
//     console.log(`${family[fMember]} is my ${fMember}`);
// }

// const whoIsCooking =  ({mother}) => { return `${mother} cook's the best food!` }

// console.log(whoIsCooking(family));

// CLASSES

// class Pizza {
//     constructor(pizzaSize){
//         this.size = pizzaSize,
//         this.crust = "original",
//         this.toppings = []
//     }
//     setSize(size){
//         this.size = size
//     }
//     getSize(){
//         return this.size
//     }
//     setToppings(toppings){
//         this.toppings.push(toppings)

//     }
//     getToppings(){
//         return this.toppings

//     }

//     bake(){
//         console.log(`Baking a ${this.size} ${this.crust} crust pizaa `);
//     }
// }

// const myPizza = new Pizza("MEDIUM")
// console.log(typeof myPizza);
// console.log(myPizza.size);
// myPizza.bake()

// myPizza.setSize("small")
// console.log(myPizza.getSize());
// myPizza.bake()


// myPizza.setToppings("saussage, olives")
// console.log(myPizza.getToppings());

// class SpecialityPizza extends Pizza{
//     constructor(pizzaSize){
//         super(pizzaSize)
//         this.type="The Works"
//     }
//     slice(){
//         return `Our ${this.type} ${this.size} has 8 slices, => ${this.toppings}`
//     }
// }

// const mySpec = new SpecialityPizza("MEDIUM")
// mySpec.setToppings("galic, origano")
// console.log(mySpec.slice());


// //PRIVATE JUST NAMING
// class PizzaPrivate  {
//     constructor(pizzaSize){
//         this._size = pizzaSize
//         this._type = "The Worker"

//     }

//     getSize(){
//         return this._size
//     }

//     setSize(size){
//         this._size = size

//     }

//     bake(){
//         return `The Oreder is ${this._size}  ${this._type} pizza`
//     }
// }

// const pizzaPrvate = new PizzaPrivate("LARGE")
// const bake = pizzaPrvate.bake()
// console.log(bake);
// pizzaPrvate._size = "TINY"
// pizzaPrvate._type = "NEW TYPE"
// console.log(pizzaPrvate.bake());


// //Factory function PRIVATE FIELD METHOD
// function pizzaFuctory (pizaSize) {
//     const size = pizaSize
//     const type = "One Private Type"
//     return{
//         bake() {return `Factory ${size} of type ${type}` }
//     }
// }

// const ffPizzaModel = pizzaFuctory("F_MEDIUM")
// console.log(ffPizzaModel.bake());

// // PRIVATE CLASS #
// class PizzaPrivateUpdate  {
//     type = "The Worker"
//     #sauce = "traditional"
//     #size
//     constructor(pizzaSize){
//         this.#size = pizzaSize

//     }

//     getSize(){
//         return this.size
//     }

//     setSize(size){
//         this.size = size

//     }

//     bake(){
//         return `The Oreder is ${this.#size}  ${this.type} pizza with ${this.#sauce} sauce`
//     }
// }

// const privateP = new PizzaPrivateUpdate("p_SMALLLLL")
// const bakePrivate = privateP.bake()
// console.log(bakePrivate);
// console.log(privateP.type);

// ERROR

// const errorFunction = () => {
//     let i = 1
//     while(i <=5){
//         try{
//             if(i % 2 !==0){
//                 throw new Error("Odd Number !!")
//             }
//             console.log("Even number");
    
//         }catch(err){
//             console.error(err.message);
    
    
//         }finally{
//             console.log("...finnaly");
//             i++
    
//         }

//     }
// }

// errorFunction()

// DOM

// const view1 = document.getElementById("view1")
// console.log(view1);
// const view2 = document.querySelector("#view2")
// console.log(view2);
// view1.style.display = "flex"
// view2.style.display = "none"

// const divs = view1.querySelectorAll("div")
// console.log(divs);
// const sameDivs = view1.getElementsByTagName("div")
// console.log(sameDivs);
// const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)")
// console.log(evenDivs);

// for(i=0; i < evenDivs.length; i++){
//     evenDivs[i].style.backgroundColor = "darkBlue"
// }

// const navText = document.querySelector("nav h1")
// console.log(navText);
// navText.textContent = 'Hello World'
// console.log(navText);
// const navbar = document.querySelector("nav")
// console.log(navbar);


// view2.style.display="flex"
// view2.style.flexDirection="row"
// view2.style.flexWrap="wrap"
// console.log(view2.firstElementChild);
// view2.firstElementChild.remove()

// const createDivs = (parent, iter) => {
//     const newDiv = document.createElement("div")

//     newDiv.textContent = iter
//     newDiv.style.backgroundColor = "green"
//     newDiv.style.width = "100px"
//     newDiv.style.height = "100px"
//     newDiv.style.margin = "10px"
//     newDiv.style.display = "flex"
//     newDiv.style.justifyContent = "center"
//     newDiv.style.alignItem = "center"
//     parent.append(newDiv)

// }

// for (i=1; i<=12; i++){
//     createDivs(view2, i)
// }

// FORMDATA


// const form = document.getElementById('form');
// const formData = new FormData(form)

// const userObj = {}
// for (const [keys, values] of formData){
//     console.log(keys, values);
// }

//EVENT LISTENERS

// const view3 = document.querySelector("#view3")
// const d = view3.querySelector("div")
// const h2 = d.querySelector("h2")

// view3.addEventListener("click", (event) => {
//     // event.stopPropagation()
//     event.target.style.backgroundColor = "blue"
// }, true)

// d.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = "green"
// }, true)

// h2.addEventListener("click", (event) => {
//    event.target.textContent = "CLICKED"
// }, true)

// MODULE

// import playGuitar from "./guitar.js"
// import { ukulele as smallGuitar, change } from "./guitar.js"
// import * as Guitart from "./guitar.js"
// import { User } from "./userInfo.js";


// console.log(playGuitar());
// console.log(smallGuitar());
// console.log(Guitart.change());

// const me = new User("deko@mail.com", "Dejan")

// console.log('====================================');
// console.log(me);
// console.log('====================================');

// console.log('====================================');
// console.log(me.info());
// console.log('====================================');

// HIGHER ORDER FUNCTION

// import { post } from "./post.js";

// post.forEach((post) => {
//     console.log(post);
// })


// ASYNC

// const myPromise = new Promise((resolve, reject) => {
//     const error = false
//     if(!error){
//         resolve("YES, resolve the promise")
//     }else{
//         reject("No! reject the promise")
//     }
// })

// console.log(myPromise);


// const mySecondPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("YES, resolve the promise")

//     },3000)
// })

// mySecondPromise.then(value => {
//     console.log(value);
// })

// myPromise.then(value => {
//     return value + " TOAA"

// }).then(value => {
//     console.log(value);

// }).catch(error => {
//     console.log(error);
// })

// const userList = {
//     userArr:[]
// }

// const user = fetch("https://jsonplaceholder.typicode.com/users").then(value => {
//     return value.json()
// }).then(value => {
//     console.log(value);
// })

// const  myCoolUser = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const jsonData = await response.json()
//     return jsonData
// }

// const  myCoolUserArr = async () => {
//     const data = await myCoolUser() 
//     userList.userArr = data
//     console.log("arr + myCoolUserArr", userList.userArr);
// }

// console.log(user);
// console.log(myCoolUser());
// console.log(myCoolUserArr(),myCoolUserArr );
// console.log("arr", userList.userArr);

const getUserEmails = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })
    const jsonData = await response.json()
    console.log(jsonData);

    // const userEmailArray = jsonData.map(user => {
    //     return user.email

    // }) 

    // console.log(userEmailArray);
    // return userEmailArray
    postToWeb(jsonData)
}

const postToWeb = (data) => {
    console.log(data);

}

// console.log(getUserEmails());
 getUserEmails()


 ///PROCEDURAL WORKFLOW

 const getDataFromForm = () => {
       const  reqData = {
            firstName: "Bruce",
            lastName: "Lee",
         }

         return reqData

 }

 const buildRequestUrl = ({firstName, lastName}) => {
    return `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`

 }

 const requestJoke = async (url) => {
    const res = await fetch(url)
    const jsonData = await res.json()
    const jokeArr = jsonData.value
    postJoke(jokeArr)

 }

 const postJoke = (joke) => {
    console.log(joke);
 }

 const proceduralFunction = async () => {
    const getReqData = getDataFromForm()
    const setDataToUrl = buildRequestUrl(getReqData)
    await requestJoke(setDataToUrl)
 }

 proceduralFunction()

//  REGAX


document.getElementById("phoneNum").addEventListener("input", (e) => {
   const regax = /^\(?(\d{3})\)?[-. ]?(\d{3})?[-. ]?(\d{4})$/g
   const input = document.getElementById("phoneNum")
   const format = document.querySelector(".phoneFormat")
   const phone = input.value
   const found = regax.test(phone)

   if(!found && phone.length){
      input.classList.add("invalid")
      format.classList.add("block")
   }else{
      input.classList.remove("invalid")
      format.classList.remove("block")
   }
})

// document.getElementById("phoneForm").addEventListener("submit", (e) => {
//    e.preventDefault()
//    const input = document.getElementById("phoneNum")
//    const regax = /[()-. ]/g
//    const savePhone = input.value.replace(regax, "")
//    console.log(savePhone);


// })














 