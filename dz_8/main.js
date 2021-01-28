const assert = require('assert');

const multiplyBy = (multiplier, ...arr) => {
    return arr.map((num) => num * multiplier);
}

const flatWhite = arr => arr.flat();

const extendWith = (obj1, obj2) => {
    return {...obj2, ...obj1};
}

const extendWithEndless= (...arr) => {
    return arr.reduce((accum, obj) => ({...accum, ...obj}), {});
}


console.log("MultiplyBy ");
assert.deepStrictEqual(multiplyBy(2, 3, 4, 5), [6, 8, 10]);
assert.deepStrictEqual(multiplyBy(10, 20, 40, 100, 200, 3), [200, 400, 1000, 2000, 30]);
console.log('Looks good');

console.log("FlatWhite ");
assert.deepStrictEqual(flatWhite(['doppio', ['hot'], 'milk']), ['doppio', 'hot', 'milk']);
assert.deepStrictEqual(flatWhite([['espresso', 'hot'], 'milk']), ['espresso', 'hot', 'milk']);
console.log('Looks good');

console.log("ExtendWith ");
assert.deepStrictEqual(extendWith(
    {flatWhite: ['doppio', 'hot', 'milk'], isValid: true},
    {isValid: false, additionalProp: {thisIsGoodProp: 123}}
    ),
    {flatWhite: ['doppio', 'hot', 'milk'], isValid: true, additionalProp: {thisIsGoodProp: 123}}
);

assert.deepStrictEqual(extendWith(
    {isValid: false, myMax: 9990},
    {isValidos: false, myMin: 8999}
    ),
    {isValid: false, myMax: 9990, isValidos: false, myMin: 8999}
);
console.log('Looks good');

console.log("ExtendWithEndless ");
assert.deepStrictEqual(extendWithEndless(
    {flatWhite: ['doppio', 'hot', 'milk'], isValid: true},
    {isValid: false, additionalProp: {thisIsGoodProp: 123}},
    {prop3: true},
    {prop4: true},
    {isValid: [false, false]},
    ),
    {
        flatWhite: ['doppio', 'hot', 'milk'],
        isValid: [false, false],
        additionalProp: {thisIsGoodProp: 123},
        prop3: true,
        prop4: true
    }
);
console.log('Looks good');
