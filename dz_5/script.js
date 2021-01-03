
// const firstValue = prompt('first value');
// const secondValue = prompt('second value');

// task 1 Запросить у пользователя два числа, n и m - вывести все числа в диапазоне между ними.

const getNumbersBetween = (...args) => {
  let result = [];

  args.every(num => {
    if (isNaN(Number(num))) {
      result = 'Not correct value';
    }
  });

  const minNum = Math.min(...args);
  const maxNum = Math.max(...args);

  for (let i = minNum + 1; i < maxNum; i++) {
    result.push(i)
  }
  return (result);
};

// task 2 Запросить у пользователя два числа, написать функцию при помощи стрелочного синтаксиса и аналог с function expression которая бы возводила первое число в степень второго
// введенного числа, или в степень 2 по умолчанию

const exaltationInDegree = (num, degree = 2) => !isNaN(Math.pow(num, degree))?Math.pow(num, degree):'Not correct value';

// const exaltationInDegree = function (num, degree = 2) {
//   return !isNaN(Math.pow(num, degree)) ? Math.pow(num, degree) : 'Not correct value';
// };

// Number
// task 1  Запросить у пользователя два числа с плавающей точкой - умножить на 0.3 и округлить до ближайшего целого числа.

const roundNumbers = (...args) => args.map(num => Math.round(num * 0.3));

//task 2  Запросить у пользователя два числа - вывести случайное целое число в этом диапазоне.

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

//String
//Task 1 Запросить  у пользователя две строки, найти сколько раз повторяется вторая в первой. Вывести индексы всех вхождений.

const findSubstring = (string = 'Тест текст теСт ТЕСТ' , substring= 'тест') => {
  string = string.toLowerCase();
  substring = substring.toLowerCase();

  let amountSubstr = 0;
  const indexList =[];
  let index = string.indexOf(substring);

  while (index !== -1) {
    amountSubstr++;
    indexList.push(index);
    index = string.indexOf(substring, index + 1);
  }
  return JSON.stringify({amountSubstr, indexList})
};

//Task 2 Найти все численные значения в строке “ECMAScript 2015 (6th Edition, ECMA-262)”.

const getAllNumbers = (str = 'ECMAScript 2015 (6th Edition, ECMA-262)') => str.match(/\d+/g);

//Task 3 Найти все символы в верхнем регистре ECMAScript 2015 (6th Edition, ECMA-262)”

const getAllUpperSymbols = (str = 'ECMAScript 2015 (6th Edition, ECMA-262)') => str.match(/[A-Z]/g);


// alert(getNumbersBetween(firstValue, secondValue)); //1
// alert(exaltationInDegree(firstValue, secondValue)); //2
// alert(roundNumbers(firstValue, secondValue)); //Number 1
// alert(getRandomNumber(firstValue, secondValue)); // Number 2
// alert(findSubstring()); //String 1
// alert(getAllNumbers()); //String 2
// alert(getAllUpperSymbols()); //String 3



//Regex

//Task 1 Найти все значения цветов #HEX в  HTML

const getHEX = str => str.match(/#([0-9a-f]{3}){1,2}/gi);

// Task 2 Найти все вхождения номера телефона в стандартном виде
const getPhoneNumbers = str => str.match(/\+380(68|96|97|98|50|66|95|99|63|73|93)[0-9]{7}/g);

// Task 3 Написать логику которая находила бы все теги <h1> и заменила их на <h2/>
const replaceTag = str => str.replace(/<h1>/g, '<h2/>');

// Task 4 Найти все теги <script></script>
const getScriptsTag = str => str.match(/<script.*>.*<\/script>/g);



