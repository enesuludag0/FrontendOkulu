/* 
// Local Storage
let userName = "Enes";
localStorage.setItem("userName", userName); // setItem ile veri ekleme

let localUserName = localStorage.getItem("userName"); // getItem ile veri çekme
console.log("userName: ", localUserName);

let age = 23;
localStorage.setItem("yas", age);
let localAge = Number(localStorage.getItem("yas"));
console.log("yas: ", localAge);

let user = {
  name: "Enes",
  age: 23,
  city: "Ankara",
  languages: ["Python", "Java", "C#", "JavaScript"]
};

localStorage.setItem("user", JSON.stringify(user)); // object türündeki veriyi stringe çevirir
let localUser = JSON.parse(localStorage.getItem("user")); // string türündeki veriyi objecte çevirir
console.log("user: ", localUser);

let users = [
  { name: "Enes", age: 23 },
  { name: "Melih", age: 36 },
  { name: "Arda", age: 19 }
];

localStorage.setItem("users", JSON.stringify(users));
let localUsers = JSON.parse(localStorage.getItem("users"));
console.log("users: ", localUsers);

localUsers.map((user) => document.writeln(`<p>${user.name}</p>`));

// Session Storage
let users = [
  { name: "Enes", age: 23 },
  { name: "Melih", age: 36 },
  { name: "Arda", age: 19 }
];

sessionStorage.setItem("users", JSON.stringify(users));
let localUsers = JSON.parse(sessionStorage.getItem("users"));
console.log("users: ", localUsers);

localUsers.map((user) => document.writeln(`<p>${user.name}</p>`));

// spread operator (...)
const languages = ["Python", "Java", "C#", "JavaScript"];
const numbers = [3, 7, 5, 9, 15];
let result;

result = [...languages, ...numbers]; // iki arrayı birleştirir
result = [...languages, "C", "Go"];

console.log(result);

let user = {
  name: "Enes",
  age: 23,
  city: "Ankara",
  languages: ["Python", "Java", "C#", "JavaScript"]
};

let { name, age, ...geriKalanlar } = user;

console.log(name, age, geriKalanlar);
*/

const languages = ["Python", "Java", "C#", "JavaScript"];

let [language1, language2, ...geriKalanlar] = languages;

console.log(language1, language2, geriKalanlar);
