class Call {

    static ITERATION = 0;
    callMe = ()=> {
        Call.ITERATION++;
    }

    static callCount = ()=> {
        return Call.ITERATION;
    }

}


const test = new Call();
const test2 = new Call();

console.log(test);
test.callMe();
test.callMe();
test.callMe();
test2.callMe();
test2.callMe();

console.log(Call.callCount());


