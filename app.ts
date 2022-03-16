const person: {
  name: string;
  age: number;
  hobbies: string[];
  // Tuple type, array with 2 element, first number, second string
  role: [number, string];
} = {
  // const person = {
  name: "Irakli",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push("admin"); // push is allow in tuple
person.role = [10, "admin", "user"]; // this is not allowed, you can add element only with push
person.role[1] = 10; // this is not allowed, second element must be number

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!! property 'map' does not exist on type 'string'
}
