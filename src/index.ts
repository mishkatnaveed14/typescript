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
greetuser("saba")
// q--4 oops
