//1

console.log(2 + "2" == "2" + 2);  // true,

// з двух сторін буде конкатинація і порівнюватиметься "22"

console.log(2 + "3" == "3" + 2); // false,

// також конкатинація, "23" != "32"

console.log("3" + "2" == 3 + 2); // false,

// зліва конкатинація 32, зправа просто додавання,

console.log("3" + "2" == "3" + 2); // true,

// зліва і справа - конкатенація, "32" = "32"

console.log("3" + "2" == 2 + "3"); // false,

// також конкатинація з двух сторін, але "32" != "23"

console.log(2 + Number("3") == Number("3") + 2); // true,

// з двух сторін строки стануть числами і додадуться, 5 = 5

console.log(12 / "6");  // 2,

// "6" стає числом через знак /

console.log("number" + 15 + 3); // "number153",

// спочатку "number" + 15  стає "number15", потім "number15" + 3 стає "number153"

console.log(15 + 3 + "number"); // "18number"

 // 15 і 3 додаються, а потім конкатинуються з "number" і стає "18number"

console.log([1] > null);  // true,

// зліва стає 1, справа - 0

console.log("foo" + +"bar"); // "fooNaN",

// унарний + перетворює "bar" не може перевести значення в число, стає NaN , який додається до foo

console.log('true' == true); // false,

// при порівняні буліана з строкою, значення перетворюються в числа, зліва - NaN, справа - 1, при порівнянні числа з NaN - false

console.log(false == 'false'); // false ,

// все те саме тільки зліва - NaN, справа - 0, а при порівнні числа з NaN - false

console.log(null == ''); // false,

// null при не строгій рівності поверне true тільки в порівнянні з null и undefined

console.log(!!"false" == !!"true"); // true,

// дві строки переводяться в true

console.log([`x`] == `x`); // true,

// буде порівняння двух строк `x` і `x`



// 2


const enemy = {
  name: "Bob"
};

const friend = {
  name: "Alex"
};

const me = friend;

me.name = "Bob";

console.log(friend.name); //Bob,

// me i friend ссилаються на один об'єкт в якого наразі свойство name = "Bob"

console.log(me === friend); //true,

// дві змінні ссилаються на один і той самий об'єкт

console.log(me === enemy); //false,

// дві змінні ссилаються на різні об'єкти


//3

function getMonth(value) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];

  if (!isNaN(Number(value))) {
    value = Number(value);
  }

  switch (typeof value) {
    case "string":
      return month.includes(value)?
        months.indexOf(value) + 1:
        "Not found";
    case "number":
      return !months[value - 1]?
        "Not found":
        months[value - 1];
  }
}

let month = prompt("Enter value:")
alert(getMonth(month))