class Hamster {
    constructor(owner, name, price){
    this.owner = '';
    this.name = '';
    this.price = 15;
}
wheelRun(){
    console.log("squak squak")
}
eatFood(){
    console.log("nibble nibble")
}
getPrice(){
    return Hamster.price;
}
}

class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount){
        this.name = name;
        this.age = 0;
        this.height = o;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this. bankAccount = 0;
    }
    getName(){
        return Person.name;
    }
    getAge(){
        return Person.age;
    }
    getWeight(){
        return Person.weight;
    }
    greet(){
        console.log(`Hello ${Person.name}`)
    }
    eat(){
         Person.weight ++;
         Person.mood ++;
    }
    exercise(){
        Person.weight --;
    }
    ageUp(){
        Person.age ++;
        Person.height ++;
        Person.weight ++;
        Person.mood --;
        Person.bankAccount += 10;
    }
    buyHamster(hamster){
        this.hamsters.push(hamster)
        this.mood += 10
        this.bankAccount -= getPrice()
    }
}

const timmy = new Person('Timmy')
for (let i =0; i <5; i++){
    timmy.ageUp()
}

for (let i=0; i<5; i++){
    timmy.eat()
}

for (let i=0; i<5; i++){
    timmy.exercise()
}

for (let i =0; i <9; i++){
    timmy.ageUp()
}

const gus = new Hamster('Gus')
gus.owner = 'Timmy'
timmy.buyHamster(gus)

for (let i = 0; i <15; i++){
    timmy.ageUp()
}

for (let i =0; i<2; i++){
timmy.eat()
}

for (let i = 0; i<2; i++){
    timmy.exercise()
}
