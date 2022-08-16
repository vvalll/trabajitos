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
