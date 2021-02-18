import searchUI from './SearchUI';
import userUI from './UserUI';

export default class App {

    static init() {
        searchUI.render();
        userUI.render();
    }

}
