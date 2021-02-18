import HttpService from "./HttpService";
import Search from "./Search";
import emitter from './EventEmitter';

export default class SearchService {
    static async searchUsers(value) {
        const {items} = await HttpService.getJSON(`/search/users?q=${value}`);
        if (items.length === 0) {

        }
        Search.searchResults = items;
        emitter.emit('getSearchResult')
    }
}