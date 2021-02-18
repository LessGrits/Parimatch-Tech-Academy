import HttpService from "./HttpService";
import User from "./User";

export default class UserService {
    static async getUserRepositories(targetData) {
        User.userData[targetData] = await HttpService.getJSON(`/users/${User.userData['login']}/${targetData}`);
    }
}