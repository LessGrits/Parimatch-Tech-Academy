export default class User {
    static userData = {};

    static isUserData = () => {
        return Object.keys(this.userData).length !== 0
    }


}