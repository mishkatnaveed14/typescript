console.log("mishkat");
let myprod = {
    name: "mishi",
    price: 89,
    Status: "in-stock",
};
console.log(myprod);
let myCar = {
    brand: "toyota",
    model: "honda",
    year: 2026,
};
console.log(myCar);
// q---3 function type
function greetuser(username) {
    console.log(`hello ${username}`);
}
greetuser("saba");
//  OOPS
class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
}
const myacc = new Account("amna", 5000);
console.log(myacc);
// q--4
class Employee {
    constructor(names, salaries, id) {
        this.name = names;
        this.salary = salaries;
        this.id = id;
    }
}
const emp1 = new Employee("saba", 5000, "opiu8");
const emp2 = new Employee("amna", 8000, "opiu9");
const emp3 = new Employee("alina", 10000, "opiu10");
console.log(emp1);
console.log(emp2);
console.log(emp3);
// oops ----- parameter properties
class Vehicles {
    constructor(brand, engineType) {
        this.brand = brand;
        this.engineType = engineType;
    }
}
class Car {
    constructor(brand, enginetype) {
        super(Vehicles);
    }
}
export {};
//# sourceMappingURL=index.js.map