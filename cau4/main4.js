class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(newName) {
        this.name = newName;
    }

    setWeight(newWeight) {
        this.weight = newWeight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    toString() {
        return `Full info: ${this.getName()}, ${this.getWeight()}`;
    }

}

let objAnimal1 = new Animal();
objAnimal1.setName('Elephant');
objAnimal1.setWeight(45.6);
document.write(objAnimal1.toString());
document.write('<br>');
let objAnimal2 = new Animal('Dog', 30);
objAnimal2.setName('Mouse');
document.write(objAnimal2.getName());