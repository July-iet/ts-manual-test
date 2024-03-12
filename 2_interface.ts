

interface Person {
  name: string;
  age: number;
}
function greeter(person: Person) {
  return person.name + " : " + person.age;
}
let user = {
  name: "Jane",
  age: 26
};
console.log(greeter(user));