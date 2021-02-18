import {END_POINT} from "./config"

export default class HttpService {

    static getJSON = async (path) => {
        const url = `${END_POINT}${path}`;
        const response = await fetch(url);
        return response.json();
    }

}