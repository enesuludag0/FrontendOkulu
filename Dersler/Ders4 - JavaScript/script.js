/*
// Başlangıç
console.log("Merhaba Enes");

// Değişkenler
a = 10;
console.log(a);

var a = 10;
console.log(a);

let b = 20;
b = 25;
console.log(b);

const c = 30;
//c = 35; // Hata verir, değiştirilemez
console.log(c);

// Veri Tipleri

// String
var userName = "Enes Uludağ";
console.log(userName);
console.log(typeof userName);

// Number
var age = 36;
console.log(age);
console.log(typeof age);

// Tip Dönüşümü
var firstNumber = 20;
var secondNumber = "30";
var result = firstNumber + secondNumber;
console.log(result); // 2030
console.log(typeof result); // string

var result = firstNumber - secondNumber;
console.log(result); // -10
console.log(typeof result); // number

// Hoisting
console.log(number); // undefined
var number = 20;

deneme(); // Deneme fonksiyonu çalıştı.
function deneme() {
  console.log("Deneme fonksiyonu çalıştı.");
}

// Boolean
var isActive = true;
console.log(isActive);
console.log(typeof isActive);

console.log(2 == "2"); // true
console.log(2 === "2"); // false

// Undefined - değeri atanmamış
var userName1;
console.log(userName1);
console.log(typeof userName1);

// Null - değeri yok, boş
var userName2 = null;
console.log(userName2);
console.log(typeof userName2);

// Object
var user = {
  name: "Enes Uludağ",
  age: 23,
  isActive: true,
  nots: { maths: 70, physics: 80, chemistry: 90 },
  favoriteColors: ["Kırmızı", "Mavi", "Yeşil"],
  showData: function () {
    console.log("Fonksiyon çalıştı.");
  }
};
console.log(user);
console.log(typeof user);
console.log(user.nots.maths);
console.log(user.favoriteColors[1]);
user.showData();

// Array
var names = ["Ahmet", "Mehmet", "Ayşe", "Fatma"];
console.log(names);
console.log(typeof names);
console.log(names[0]);
console.log(names.length);

// Function
function merhaba() {
  console.log("Merhaba Enes");
}
merhaba();
console.log(merhaba);
console.log(typeof merhaba);

// Date
var date = new Date();
console.log(date);
console.log(typeof date);
console.log(date.getDate());
console.log(date.getDay());

// Scope - Kapsam
var x = 10; // Global Scope
function deneme1() {
  var y = 20; // Function Scope
  z = 30; // Global Scope - Önerilmez
  console.log(x);
  console.log(y);
}
deneme1();
console.log(x);
// console.log(y); // Hata verir
console.log(z);

if (true) {
  var a = 10; // Global Scope
  let b = 20; // Block Scope
  const c = 30; // Block Scope
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
// console.log(b);
// console.log(c);

// Tip Dönüşümleri
var a = 10;
console.log(a, typeof a);
var b = "20";
console.log(b, typeof b);
// b = "Enes";
// var result = String(a);
var result = Number(b);
console.log(result, typeof result);

// Operatörler
// Atama Operatörleri (=, +=, -=, *=, /=, %=, **=)
var a = 3;
a **= 4;
console.log(a);

// Aritmetik Operatörler (+, -, *, /, %, **)
console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2);

// Karşılaştırma Operatörleri (==, ===, !=, !==, <, >, <=, >=)
console.log(2 == "2");
console.log(2 === "2");
console.log(2 != "2");
console.log(2 !== "2");
console.log(5 < "2");
console.log(5 > "2");
console.log(5 <= "2");
console.log(5 >= "2");

// Mantıksal Operatörler (&&, ||, !)
console.log(5 < 3 && 2 < 4); // false
console.log(5 < 3 || 2 < 4); // true
console.log(!(5 > 3)); // false

// Math Fonksiyonu
console.log(Math.PI); // 3.14
console.log(Math.round(3.5)); // 4
console.log(Math.ceil(3.2)); // 4
console.log(Math.floor(3.8)); // 3
console.log(Math.sqrt(36)); // 6
console.log(Math.abs(-10)); // 10
console.log(Math.pow(5, 3)); // 125
console.log(Math.floor(Math.random() * 100 + 1)); // 1-100 arası rastgele sayı
console.log(Math.random()); // 0-1 arasında 0 dahil, 1 hariç

let value;
const firstName = "Enes";
const lastName = "Uludağ";
const age = 23;
const city = "Ankara";

// String Metotları
value = firstName + " " + lastName;
value = firstName.length;
value = firstName.toLocaleLowerCase();
value = firstName.toLocaleUpperCase();
value = firstName[0];
value = firstName[firstName.length - 1];
value = firstName.indexOf("n");
value = firstName.includes("n");
value = firstName.concat(" ", lastName, " ", age, " ", city);
value = firstName.slice(0, 2);

// Template Literals
value = `Ad: ${firstName}
Soyad: ${lastName}
Yaş: ${age}
Şehir: ${city}`;

console.log(value);

// Array Metotları
const languages = ["Python", "Java", "C#", "JavaScript"];
const numbers = [3, 5, 2, 10, 15, 7, "14"];
let value;

value = languages.length;
value = languages[0];
value = languages[languages.length - 1];
value = languages.indexOf("Java");
value = languages.includes("Python");
value = languages.push("C++");
value = languages.unshift("Ruby");
value = languages.pop();
value = languages.shift();
value = languages.reverse();
value = languages.sort();
value = numbers.sort();
value = numbers.sort(function (a, b) {
  return a - b;
});
value = numbers.sort(function (a, b) {
  return b - a;
});

// console.log(languages);
console.log(value);

// Object
const student = {
  fullName: "Enes Uludağ",
  age: 23,
  address: {
    country: "Türkiye",
    city: "Ankara",
    district: "Altındağ"
  },
  languages: ["Python", "Java", "C#", "JavaScript"],
  work: function () {
    console.log("Çalışıyor...");
  }
};

let value;
value = student;
value = student.fullName;
value = student["fullName"];
value = student.age;
value = student.address.city;
value = student.languages[0];
student.work();

console.log(value);

let value;
let date = new Date();
value = date.getDate();
value = date.getDay();
value = date.getFullYear();
value = date.getHours();
value = date.getMinutes();
value = date.getSeconds();
value = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

console.log(value);

// Koşul İfadeleri
// if else
let a = 30;
let b = 20;

if (a < b) {
  console.log("a, b'den küçüktür");
} else if (a > b) {
  console.log("a, b'den büyüktür");
} else {
  console.log("a, b'ye eşittir");
}

// switch case
let islem = "çarp";

switch (islem) {
  case "topla":
    console.log("Toplama işlemi seçildi.");
    break;
  case "çıkar":
    console.log("Çıkarma işlemi seçildi.");
    break;
  case "çarp":
    console.log("Çarpma işlemi seçildi.");
    break;
  case "böl":
    console.log("Bölme işlemi seçildi.");
    break;
  default:
    console.log("Geçersiz işlem.");
}

// Döngüler
// for
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    // break; // Döngüyü kırar
    continue; // O anki adımı atlar
  }
  console.log(i);
}

const languages = ["Python", "Java", "C#", "JavaScript"];

for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}

// while
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// do while
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

const languages = ["Python", "Java", "C#", "JavaScript"];
// for in
for (let index in languages) {
  console.log(index, languages[index]);
}

// for of
for (let language of languages) {
  console.log(language);
}

// foreach
languages.forEach((language, index) => {
  console.log(index, language);
});

// map
const numbers = [3, 5, 2, 10, 15, 7];
let square = numbers.map((number) => {
  return number * number;
});
console.log(square);

// Fonksiyonlar
function merhaba() {
  console.log("Merhaba");
}
merhaba();

function merhaba1(name) {
  console.log(`Merhaba ${name}`);
}
merhaba1("Enes");

function userInfo(name = "Ad belirtilmemiş", age = "Yaş belirtilmemiş") {
  console.log(`Ad: ${name}\nYaş: ${age}`);
}
userInfo("Enes");
userInfo(undefined, 23);
userInfo("Enes", 23);

function square(x) {
  return x * x;
}
console.log(square(5) + 5);

// Arrow Function
const square2 = (x) => x * x;
console.log(square2(6) + 6);
*/
