let dog = { dogName: "JavaScript",
 weight: 2.4,
 color: "brown",
 breed: "chihuahua"
 };

 console.log(dog)


 class ClassName {
    constructor(prop1, prop2) {
    this.prop1 = prop1;
   this.prop2 = prop2;
    }
   }
   let obj = new ClassName("arg1", "arg2");

console.log(obj)


function Dog(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
   }
let dog1 = new Dog("Jacky", 30, "brown", "labrador"); 

Dog(console.log(dog1))


class Dog {
    constructor(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
    }
   }
   let dog2 = new Dog("JavaScript", 2.4, "brown", "chihuahua");
   
   console.log(dog2.dogName, "is a", dog2.breed, "and weighs", dog2.weight, "kg.");


   class Person {
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    }
   }
   let p = new Person("Maaike", "van Putten");
   console.log("Hi", p.firstname);

   let p1 = new Person("Maaike");
   console.log("Hi", p1.firstname, p1.lastname);
   

   class Personas{
    constructor(nombre, apellido){
    this._nombre = nombre;
    this._apellido = apellido;
    }

    greet() {
        console.log("Hi there! I'm", this._nombre);
        }
    
    compliment(_nombre, object) {
        return "That's a wonderful " + object + ", " + _nombre;
        }

    fullname(_nombre,_apellido){
        return `${this._nombre}  ${this._apellido}`
    }
           
    }

   let amigo = new Personas("Jesus", "Utria");

   let amigo2 = new Personas ("Laura", "Amaya");

   console.log(`Hola`, amigo._nombre, amigo._apellido, `Y`, amigo2._nombre,  amigo2._apellido)

   amigo.greet();

   let compliment = amigo.compliment(amigo._nombre, "hat");
   console.log(compliment);

   console.log(amigo.fullname());
   console.log(amigo2.fullname());
   console.log(`Mis amigos: `, amigo.fullname(), `Y `, amigo2.fullname());



   class Person1 {
    #firstname;
    #lastname;
   constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
    }
   }

   let person = new Person1("Maria", "Saga");
console.log(person.firstname);

   //undefined

   class Person2 {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        if(firstname.startsWith("M")){
        this.#firstname = firstname;
        } else {
        this.#firstname = "M" + firstname;
        }
        this.#lastname = lastname;
    }       
   }

   let people = new Person2("kay", "Moon");


   //--------------------------------------------------------------------------------------------

   function judge(grade) {
    switch (true) {
    case grade == "A":
    console.log("You got an", grade, ": amazing!");
    break;
    case grade == "B":
    console.log("You got a", grade, ": well done!");
    break;
    case grade == "C":
    console.log("You got a", grade, ": alright.");
    break;
    case grade == "D":
    console.log("You got a", grade, ": hmmm...");
    break;
    default:
    console.log("An", grade, "! What?!");
    }
   }
   function getGrade(score, callback) {
    let grade;
    switch (true) {
    case score >= 90:
    grade = "A";
    break;
    case score >= 80:
    console.log(score);
    grade = "B";
    break;
    case score >= 70:
   grade = "C";
    break;
    case score >= 60:
    grade = "D";
    break;
    default:
    grade = "F";
    }
    callback(grade);
   }
   getGrade(85, judge);

   //--

   let promise = new Promise(function (resolve, reject) {
    // do something that might take a while
    // let's just set x instead for this example
    let x = 20;
    if (x > 10) {
    resolve(x); // on success
    } else {
    reject("Too low"); // on error
    }
   });

   promise.then(
    function (value) {
    console.log("Success:", value);
    },
    function (error) {
    console.log("Error:", error);
    }
   );

   //----

   const promise1 = new Promise((resolve, reject) => {
    resolve("success!");
   })
   .then(value => {
    console.log(value);
    return "we";
    })
    .then(value => {
    console.log(value);
    return "can";
    })
    .then(value => {
    console.log(value);
    return "chain";
    })
    .then(value => {
    console.log(value);
    return "promises";
    })
    .then(value => {
    console.log(value);
    })
    .catch(value => {
    console.log(value);
    })
   
    //---- 

    const promise2 = new Promise((resolve, reject) => {
        reject("oops... ");
       })
        .then(value => {
        console.log(value);
        return "we";
        })
       .then(value => {
        console.log(value);
        return "can";
        })
        .then(value => {
        console.log(value);
        return "chain";
        })
        .then(value => {
        console.log(value);
        return "promises";
        })
        .then(value => {
        console.log(value);
        })
        .catch(value => {
        console.log(value);
        })

//----

function saySomething(x) {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve("something" + x);
    }, 2000);
    });
   }
   async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
   }
   talk(2);
   talk(4);
   talk(8);
   
       
   
   