//Object tasks

const makeHashTable = array => {
    let hashTable = {};
    for (const OBJECT of array) {
        hashTable[OBJECT.id] = OBJECT;
    }
    return hashTable;
}


const getUserById = (dataObj, id) => {
    return dataObj[id] || `user with id ${id} not found`
}

const getUserAddress = (dataObj, id) => {
    return !dataObj[id] ? `user with id ${id} not found` :
        dataObj[id].address || `user with id ${id} have not address`
}

const getUserByCompany = (dataObj, targetCompanyName) => {
    const USER_LIST = Object.values(dataObj).filter(({company: {name}}) => name === targetCompanyName);
    return USER_LIST.length ? USER_LIST : `users with company name ${targetCompanyName} not found`;
}

const makePropertyUnchangeable = (dataObj, property) => {
    for (const USER of Object.values(dataObj)) {
        Object.defineProperties(USER, {
            [property]: {
                value: USER[property],
                writable: false,
                configurable: false
            }
        })
    }
}

const configPhoneSetter = (dataObj) => {
    for (const USER of Object.values(dataObj)) {
        Object.defineProperties(USER,{
            shadowPhone: {
              value:  USER.phone,
              writable: true,
            },
            phone: {
                get() {
                  return this.shadowPhone
                },
                set: function (value) {
                    const regex = /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/;
                    if (!regex.test(value)) return;
                    this.shadowPhone = value;
                }
            }
        })
    }
}

const HASH_TABLE = makeHashTable(DATA);

configPhoneSetter(HASH_TABLE);

console.log('OBJECT TASKS')
console.log('data');
console.log(DATA);


console.log('1) makeHashTable');
console.log(HASH_TABLE);
console.log('\n')

console.log('2) getUserById');
console.log('getUserById(HASH_TABLE, 1)')
console.log(getUserById(HASH_TABLE, 1))
console.log('getUserById(HASH_TABLE, 200)')
console.log(getUserById(HASH_TABLE, 200))
console.log('\n')

console.log('3) getUserAddress');
console.log('getUserAddress(HASH_TABLE, 1)')
console.log(getUserAddress(HASH_TABLE, 1,))
console.log('getUserAddress(HASH_TABLE, 9)')
console.log(getUserAddress(HASH_TABLE, 9,))
console.log('getUserAddress(HASH_TABLE, 90)')
console.log(getUserAddress(HASH_TABLE, 90))
console.log('\n')

console.log('4) getUserByCompany');
console.log("getUserByCompany(DATA, 'Deckow-Crist')");
console.log(getUserByCompany(DATA, 'Deckow-Crist'));
console.log("getUserByCompany(DATA, 'КОМПІНЯ')");
console.log(getUserByCompany(DATA, 'КОМПАНІЯ'));
console.log('\n')

console.log('5) makePropertyUnchangeable');
makePropertyUnchangeable(HASH_TABLE, 'id');
console.log("HASH_TABLE['1'].id")
console.log(HASH_TABLE['1'].id)
console.log("HASH_TABLE['1'].id = 5");
HASH_TABLE['1'].id = 5;
console.log("HASH_TABLE['1'].id")
console.log(HASH_TABLE['1'].id)
console.log('\n')

console.log('6) configPhoneSetter');
console.log("HASH_TABLE['1'].phone");
console.log(HASH_TABLE['1'].phone);
console.log("HASH_TABLE['1'].phone = 123");
HASH_TABLE['1'].phone = 123;
console.log("HASH_TABLE['1'].phone");
console.log(HASH_TABLE['1'].phone);
console.log("HASH_TABLE['1'].phone = '(123) 456-68-99'");
HASH_TABLE['1'].phone = '(123) 456-68-99';
console.log("HASH_TABLE['1'].phone");
console.log(HASH_TABLE['1'].phone);
console.log('\n')
console.log('---------------------------');
console.log('\n')


// arrays tasks

const NUMBER_ARRAY = [2,5,7,3,2,4,3,5,4];
const NUMBER_ARRAY2 = [2,5,7,99];

const firstAndLastIndexOf = (array, number) => {
    return [array.indexOf(number),array.lastIndexOf(number)]
}

const getCommonElements = (array1, array2) => {
    return [...new Set(array1.filter( element => array2.includes(element)))]
}

const pushArrayInsideByIndex = (mainArray, subArray, index) => {
    return [...mainArray.slice(0,index), ...subArray, ...mainArray.slice(index)]
}

const sortById = array => {
    return [...array].sort((a,b) => b.id - a.id);
}

const sortByDate = array => {
    const regex = /\s\+\s\d{4}/g;
    const getDate = value =>{
        const newDateValue = value =>value.registrationDate.replace(regex,'');
        return new Date(newDateValue(value));
    }
    return [...array].sort((a,b) =>{
        return getDate(b) - getDate(a)
    });
}

console.log('ARRAY TASKS')

console.log('NUMBER_ARRAY')
console.log(NUMBER_ARRAY)
console.log('NUMBER_ARRAY2')
console.log(NUMBER_ARRAY2)
console.log('\n')

console.log('1');
console.log('firstAndLastIndexOf(NUMBER_ARRAY,5)');
console.log(firstAndLastIndexOf(NUMBER_ARRAY,5));
console.log('\n')

console.log('2');
console.log('getCommonElements(NUMBER_ARRAY, NUMBER_ARRAY2)');
console.log(getCommonElements(NUMBER_ARRAY, NUMBER_ARRAY2));
console.log('\n')

console.log('3');
console.log('pushArrayInsideByIndex(NUMBER_ARRAY,NUMBER_ARRAY2,3)');
console.log(pushArrayInsideByIndex(NUMBER_ARRAY,NUMBER_ARRAY2,3))
console.log('\n')

console.log('4');
console.log('sortById');
console.log(sortById(DATA));
console.log('\n')

console.log('4*');
console.log('sortByDate');
console.log(sortByDate(DATA));
