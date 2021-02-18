import User from './User';
import emitter from "./EventEmitter";
import UserService from "./UserService";


class UserUI {

    constructor() {
        this.userContainer = document.querySelector('.user');
        this.userLogo = document.querySelector('.user-avatar');
        this.userName = document.querySelector('.user-nickname');

        this.registerListeners();
    }


    render = async () => {
        if (User.isUserData()) {
            this.userContainer.classList.remove('hide');
            this.userContainer.innerText = 'Loading...'
            await this.getUserListsData();
            this.displayUserData();
        } else {
            this.userContainer.classList.add('hide');
        }
    }

    registerListeners() {
        emitter.subscribe('showUserData', this.render)
    }

    displayUserData = () => {
        const {login, avatar_url, html_url} = User.userData;
        this.userContainer.innerText = '';
        this.userContainer.innerHTML = `
        <div class="user-avatar-wrap">
            <img class="user-avatar" src=${avatar_url} alt="avatar">
        </div>
        <a href=${html_url} target="_blank" class="user-nickname">${login}</a>
        <div class="user-data">
            <div class="user-repositories">
                <div class="repository">repositories:</div>
                ${this.writeUserListData("repos")}
            </div>
            <div class="user-followers">
                <div class="follower">followers:</div>
                ${this.writeUserListData("followers")}
            </div>
        </div>
        `
        this.userLogo.src = avatar_url;
        this.userName.innerText = login;
    }

    getUserListsData = async () => {
        await UserService.getUserRepositories("repos");
        await UserService.getUserRepositories("followers");
    }

    writeUserListData(targetData) {
        const dataKeys = {
            repos: {
                className: "repository",
                value: "name",
                link: "html_url"
            },
            followers: {
                className: "follower",
                value: "login",
                link: "html_url"
            }
        }

        return User.userData[targetData].map(item => {
            const {className, value, link} = dataKeys[targetData];

            return `<div class=${item[className]}>
                        <a target="_blank" href=${item[link]}>${item[value]}</a>
                    </div>`
        })
    }

}

export default new UserUI()