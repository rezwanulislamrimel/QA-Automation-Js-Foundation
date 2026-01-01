// Constructor function
function User(name, age, role) {
  this.name = name;
  this.age = age;
  this.role = role;
}

// Method added via prototype
User.prototype.getInfo = function () {
  return `${this.name} is ${this.age} years old and works as a ${this.role}.`;
};

// Creating objects
const user1 = new User("Rimel", 25, "SQA Engineer");
const user2 = new User("Alex", 30, "Developer");

// Using the objects
console.log(user1.getInfo());
console.log(user2.getInfo());
