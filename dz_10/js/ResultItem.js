import SearchUI from "./SearchUI";

export default class ResultItem {
    static render(user) {
        const searchItem = document.createElement('div');
        searchItem.classList.add('searcher-result');

        const searchItemImg = document.createElement('img');
        searchItemImg.src = user.avatar_url;
        searchItemImg.classList.add('searcher-result__avatar');

        const searchItemNickname = document.createElement('p');
        searchItemNickname.classList.add('searcher-result__nickname');
        searchItemNickname.innerText = user.login;
        searchItemNickname.addEventListener('click', () => SearchUI.showUserData(user))

        searchItem.append(searchItemImg);
        searchItem.append(searchItemNickname);

        return searchItem;
    }


}