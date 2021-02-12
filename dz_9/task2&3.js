class PersonGenderError extends Error {
    constructor(message) {
        super(message);
    }

    toString() {
        return this.message;
    }
}

class Person {
    static GENDER = {
        NOT_DEFINED:0,
        MAN:1,
        WOMAN:2
    }
    name = 'NoName';
    #genderValue = Person.GENDER.NOT_DEFINED ;

    #updatePersonGender(gender) {
        const genderValues = Object.values(Person.GENDER);
        if (genderValues.includes(gender)){
            this.#genderValue = gender;
        } else {
            throw new PersonGenderError(`Gender ${gender} has invalid value`);
        }
    }

    constructor(name, gender) {
        this.name = name;
        try {
            gender && this.#updatePersonGender(gender);
        } catch (e) {
            console.error(e.message);
        }
    }

    set gender(gender) {
        try {
            this.#updatePersonGender(gender);
        } catch (e) {
            console.error(e.message);
        }
    }

    get gender() {
        return this.#genderValue;
    }

}
const testPerson = new Person('Name2', 1);
console.log(`Gender: ${testPerson.gender}`);
const testPerson2 = new Person('Name');
testPerson2.gender = 'invalid_value';
console.log(`Gender: ${testPerson2.gender}`);
console.log(`-----------------`);


 class PersonLog extends Person {
     #logsList = [];

     constructor(name, gender) {
         super(name, gender);
         const PROXY_HANDLER = {
             get(obj, prop) {
                 return obj[prop];
             },
             set(obj, prop, newValue) {
                 if(Reflect.has(obj, prop)){
                     const oldValue = obj[prop];
                     obj[prop] = newValue;
                     obj.#updateLogs(prop, oldValue, newValue);
                     return true;
                 }
                 obj[prop] = newValue;
             }
         }
         return new Proxy(this, PROXY_HANDLER);
     }


     get logs() {
         return this.#logsList;
     }

     #updateLogs(prop, oldValue, newValue) {
         if (this[prop] !== oldValue && prop !== "logs") {
             this.#logsList.push(`${prop}: from ${oldValue} to ${newValue}`);
         }
     }
 }

 const personWithLog = new PersonLog("Name",2);
personWithLog.name = "Name3";
personWithLog.name = "Name4";
personWithLog.name = "Name4";
personWithLog.name = "Name5";

personWithLog.gender = 2;
personWithLog.gender = 1;
personWithLog.gender = 2;
personWithLog.gender = "NOR_VALID";


 personWithLog.test = "test";
 console.log(personWithLog.test, personWithLog.hasOwnProperty("test-value"));

 console.log(personWithLog.logs);
