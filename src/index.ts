console.log("mishkat");
// q--1 type alliases
type Product = {
  name: string;
  price: number;
  Status: "in-stock" | " out-stock";
};
let myprod: Product = {
  name: "mishi",
  price: 89,
  Status: "in-stock",
};
console.log(myprod);
// console.log(myprod.price);
// console.log(myprod.Status);

// q--2 type interface
interface Vehicle {
  brand: string;
  model: string;
  year: number;
}

let myCar: Vehicle = {
  brand: "toyota",
  model: "honda",
  year: 2026,
};
console.log(myCar);
// q---3 function type
function greetuser(username: string): void {
  console.log(`hello ${username}`);
}
greetuser("saba");
//  OOPS
class Account {
  name: string;
  balance: number;
  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }
}
const myacc = new Account("amna", 5000);
console.log(myacc);

// q--4
class Employee {
  public name: string;
  private salary: number;
  readonly id: string;

  constructor(names: string, salaries: number, id: string) {
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
  constructor(
    public brand: string,
    protected engineType: string,
  ) {}
  class Car {
  constructor(brand : string,enginetype : string) {
    super(Vehicles)
    getdetail(){
        
    }
  }
  }
}
