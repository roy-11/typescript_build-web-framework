import { User } from "./models/User";
const user = new User({ name: "test", age: 99 });

// get test
console.log(user.get("name"));
console.log(user.get("age"));

// set test
console.log(user.set({ name: "test2", age: 100 }));
console.log(user.get("name"));
console.log(user.get("age"));

// on trigger test
user.on("click", () => {
  console.log("click! #1");
});
user.on("click", () => {
  console.log("click! #2");
});
user.on("change", () => {
  console.log("change! #1");
});
user.trigger("click");
user.trigger("change");
user.trigger("noname");
