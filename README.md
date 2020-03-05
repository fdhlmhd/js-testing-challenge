# Mengenal Paradigma Functional Programming di JavaScript

### Apa itu Paradigma Programming ?

Paradigma pemrograman adalah gaya atau cara kita menulis program.

Untuk membuat penulisan kode function di JavaScript yang mengikuti paradigma FP, ada beberapa hal yang harus diperhatikan:
- Function harus bersifat pure, dimana ia akan menerima parameter sebagai input dan mengembalikan nilai, tanpa mengubah nilai dari variabel manapun.
- Function tidak boleh menggunakan nilai dari variabel yang bukan sebagai parameter.
- Function harus mengembalikan satu nilai untuk setiap input. Function yang mengembalikan kemungkinan nilai untuk satu nilai input yang sama tidak memenuhi prinsip FP.

contoh sederhana sebagai berikut :
```sh
const perkalian = (x) => {
  return num * 2;
}

multiplyByTwo(5); // 10
```
Dilihat dari contoh tersebut, function Perkalian menerima satu parameter yaitu x, yang kemudian proses di dalam function tersebut akan mengembalikan nilai dua kali lipat dari angka tersebut. Contoh diatas terlihat sangat sederhana dan umum, sehingga mungkin kita akan lebih paham jika kita melihat contoh function yang tidak pure (impure).

```sh
const name = "Fadhel Muhammad";

const concatMe = () => {
  return name + " is me.";
};

concatMe(); // "Fadhel Muhammad is me."

// IMPURE FUNCTION 2: Not returning any value
const divideByThree = (num) => {
  const result = num / 3;
};

dividedByThree(); // undefined

// IMPURE FUNCTION 3: Possibility to return different values for single input
const addByRandom = (num) => {
  const randomNumber = Math.floor(Math.random() * 10);
  return num + randomNumber;
};

addByRandom(3); // 5
addByRandom(3); // 7
addByRandom(3); // 9
// for num = 3, the function returns different values
```

### Mutability vs Immutability

Immutability adalah sebuah konsep dimana semua variabel, setelah sekali didefinisikan dan diassign sebuah nilai, nilai tersebut tidak boleh digantikan atau berubah. Hal ini memiliki keuntungan dimana kita terhidar dari terjadinya side-effects, dimana satu proses dapat mempengaruhi nilai sebuah variabel secara global dan menyebabkan error yang relatif sulit untuk di debug.

```sh
// mutable variable
var mutableNumber = 5;
mutableNumber = 7;

// immutable variable
const immutableNumber = 3;
// immutableNumber = 1; // this operation will fetch an error -> TypeError: Assignment to constant variable.

// mutable array
var mutableHobbies = ["Reading"];
mutableHobbies.push("Gaming");

console.log(mutableHobbies); // ["Reading", "Gaming"];

// immutable array (ES5 using concat)
var immutableHobbies = ["Reading"];
var newUpdatedImmutableHobbiesES5 = immutableHobbies.concat("Gaming");

console.log(immutableHobbies); // ["Reading"]
console.log(newUpdatedImmutableHobbiesES5); // ["Reading", "Gaming"];

// immutable array (ES6 using spread operator)
var newUpdatedImmutableHobbiesES6 = [...immutableHobbies, "Gaming"];

console.log(newUpdatedImmutableHobbiesES6); // ["Reading", "Gaming"];

// mutable Object
var myMutableObj = { name: "John Doe", age: 20 };
myMutableObj.age = 21;

console.log(myMutableObj); // { name: "John Doe", age: 21 };

// immutable Object (ES5 using Object.assign)
var myImmutableObj = { name: "John Doe", age: 20 };
const newUpdatedObjES5 = Object.assign({}, myImmutableObj, { age: 21 });

console.log(myImmutableObj); // { name: "John Doe", age: 20 };
console.log(newUpdatedObjES5); // { name: "John Doe", age: 21 };

// immutable Object (ES6 using spread operator)
const newUpdatedObjES6 = {...myImmutableObj, age: 21 };

console.log(myImmutableObj); // { name: "John Doe", age: 20 };
console.log(newUpdatedObjES6); // { name: "John Doe", age: 21 };
```

### Higher-order Functions
di JavaScript dan di bahasa programming functional ada sebuah konsep yang dinamakan Higher-order function. Higher-order function adalah function yang menerima argumen atau parameter berupa function. Sebelum mendengar higher-order function, mungkin kita pernah mendengar callback di JavaScript. Ya, callback function adalah function yang dikirimkan sebagai parameter ke dalam higher-order function. Contoh paling sederhana dari penerapan higher-order function adalah filter function.
```sh
// Example 1: Array.prototype.filter
const isEven = (num) => {
  return num % 2 === 0
}

const nums = [1,2,3,4,5,6];

const evenNums = nums.filter(isEven);
console.log(evenNums); // [2,4,6]

// Example 2: Array.prototype.map
const capitalizeWord = (word) => {
  return word[0].toUpperCase() + word.slice(1,word.length);
}

const sentence = "you there. i'm batman!";

const uppercasedSentence = sentence.split(' ').map(capitalizeWord);

console.log(uppercasedSentence); // "You There. I'm Batman!"
```

### Currying
Currying adalah sebuah teknik dalam functional programming, dimana sebuah function tidak mengambil semua argumen atau parameter dan digunakan sekaligus, melainkan mengembalikan sebuah function baru yang mengambil parameter kedua, yang kemudian mengembalikan function baru yang mengambil parameter ketiga, dan seterusnya hingga seluruh argument atau parameter digunakan. Pada teknik ini, setiap argumen akan dievaluasikan satu per satu.
```sh
const myWordsOperation = (firstWord) => (secondWord) => (thirdWord) => {
  return firstWord + ' ' + secondWord + ' ' + thirdWord;
}
console.log(myWordsOperation("John")("Mick")("Johannson"))
```
### Function Rekursif
Fungsi rekursif merupakan sebuah fungsi yang memanggil dirinya sendiri, baik secara langsung maupun tidak langsung. Rekursif merupakan salah satu teknik penyelesaian masalah yang sangat berguna. Ketika menyelesaikan masalah secara rekursif, umumnya kita memecah-mecah masalah besar menjadi banyak masalah yang lebih kecil, dan menyelesaikan masalah kecil tersebut dengan fungsi rekursif.
```sh
var kali = function pengali(a, b) {
    if (b === 1) {
        return a;
    } else {
        return a + pengali(a, b - 1)
    }
};

kali(3, 4);  // 12
kali(4, 2);  // 8
kali(5, 10); // 50
```

# UNIT TESTING
Unit Testing adalah metode verifikasi perangkat lunak di mana programmer menguji suatu unit program layak untuk tidaknya dipakai. Unit testing ini fokusnya pada verifikasi pada unit yang terkecil pada desain perangkat lunak (komponen atau modul perangkat lunak)

Framework unit testing ada banyak diantaranya :
- Unit.js
- QUnit
- Jasmine
- Karma
- Mocha
- Jest
- AVA
- dll

Dsini saya menggunakan Jest sebagai unit testing , untuk instalasi jest bisa di lihat di https://jestjs.io/docs/en/getting-started.html

sebelum install pastikan telah ada package.json pada project , jika tidak ada install dulu geh :
> $ npm init

lalu install Jest , ketik :
> $ npm install --save-dev jest

nah setelah terinstall kita masuk ke package.json 
```sh
{
  "scripts": {
    "test": "jest"     // jika default maka ganti jest pada script test
  }
}
```
next , kita bikin file project , contoh 01.js
```sh
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

lalu bikin file test , contoh test.01.js 
```sh
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);   // bisa menggunakan toEqual();
});
```

setelah itu kita eksekusi dengan membuat perintah di terminal seperti ini :
> $ npm run test

nah jika error maka akan tampil pesan error karna unit telah di testing tetapi menemukan error , jika tidak ada error maka menampilkan pesan berikut : 
>PASS  ./01.test.js
✓ adds 1 + 2 to equal 3 (5ms)

