import User from './User';
import SearchService from './SearchService';
import Search from './Search';
import emitter from './EventEmitter';
import ResultItem from './ResultItem';
import EventEmitter from "./EventEmitter";

class SearchUI {

    constructor() {
        this.searchContainer = document.querySelector('.searcher');
        this.searchInput = document.querySelector('.searcher-input');
        this.searchBtn = document.querySelector('.searcher-btn');

        this.searchResultList = document.querySelector('.searcher-results');

        this.registerListeners();
    }

    render = () => {
        if (!User.isUserData()) {
            this.searchContainer.classList.remove('hide');
            if (Search.searchResults.length > 0) {
                this.searchResultList.innerText = '';

                for (const user of Search.searchResults) {
                    this.searchResultList.append(ResultItem.render(user));
                }
            }
        } else {
            this.searchContainer.classList.add('hide');
        }
    }

    showUserData = (user) => {
        User.userData = user
        EventEmitter.emit('showUserData');
    }

    inputSubmitListener = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            this.searchListener();
        }
    }

    searchListener = async () => {
        if(this.searchInput.value.trim() === '') return;
        this.searchResultList.innerText = 'Loading...';
        await SearchService.searchUsers(this.searchInput.value.trim());
    }

    registerListeners = () => {
        this.searchInput.addEventListener('keyup', this.inputSubmitListener)
        this.searchBtn.addEventListener('click', this.searchListener)
        emitter.subscribe('getSearchResult', this.render)
        emitter.subscribe('showUserData', this.render)
    }

}

export default new SearchUI();