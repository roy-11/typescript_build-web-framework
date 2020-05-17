import { User } from "./models/User";
const user = new User({ name: "test", age: 99 });

// get test
console.log(user.get("name"));
console.log(user.get("age"));

// set test
console.log(user.set({ name: "test2", age: 100 }));
console.log(user.get("name"));
console.log(user.get("age"));
