var person = {
    // const person = {
    name: "Irakli",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
person.role.push("admin"); // push is allow in tuple
person.role = [10, "admin", "user"]; // this is not allowed, you can add element only with push
person.role[1] = 10; // this is not allowed, second element must be number
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!! property 'map' does not exist on type 'string'
}
