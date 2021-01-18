const body = document.body;
const menu = document.querySelector('.menu');
const filesListElement = document.querySelector('.filesList');
const file = document.querySelectorAll('.file');

const renderListFiles = () => {
    filesListElement.innerHTML = '';

    for (let {key, name} of filesList) {
        const fileTemplate = document.createElement('div');
        fileTemplate.classList.add('file');
        fileTemplate.dataset.key = key;
        fileTemplate.innerText = name;
        filesListElement.append(fileTemplate);
    }
}

const renderMenu = (isFile, {x, y}) => {
    body.removeEventListener('contextmenu', menuHandler);
    body.addEventListener('contextmenu', menuHandler);
    menuState.list = isFile ?
        menuState.types.onFile :
        menuState.types.onBackground;

    menu.style.cssText = `
        left:${x}px;
        top:${y}px;
        `
    menu.innerHTML = '';
    for (let option of menuState.list) {
        const optionTemplate = document.createElement('div');
        optionTemplate.classList.add(...['menu-option', option.toLowerCase()]);
        optionTemplate.innerText = option;
        menu.append(optionTemplate);
    }
}

const menuHandler = event => {
    event.preventDefault();
    const isOnFile = event.target.classList.contains('file')
    const menuPosition = {
        x: event.x,
        y: event.y
    }
    renderMenu(isOnFile, menuPosition);
    menu.classList.remove('hidden');
    body.addEventListener('click',
        function eventTransfer(e) {
            afterOpenMenuHandler(e, event.target)
            body.removeEventListener('click' ,eventTransfer);
        },
        {once: true})
}

const afterOpenMenuHandler = (event, fileArea) => {
    const menuClassList = event.target.classList;
    const targetKey = fileArea.dataset.key;
    if (menuClassList.contains('delete')) {
        removeFile(targetKey);
    }
    if (menuClassList.contains('rename')) {
        renameFile(targetKey)
    }
    if (menuClassList.contains('create')) {
        createFile();
    }
    menu.classList.add('hidden')
}

const removeFile = targetKey => {
    filesList = filesList.filter(file => file.key!== +targetKey);
    renderListFiles();
}

const renameFile = targetKey => {
    const oldFileName = filesList.find(({key})=> key=== +targetKey).name;
    const newFileName = prompt('Write new file name', oldFileName);
    if (!newFileName) return;
    filesList = filesList.map((file)=> {
        if(file.key === +targetKey) {
            return {...file,name:newFileName}
        }
        return file;
    })
    renderListFiles();
}

const createFile = () => {
    const name = prompt('Write new file name', 'New File');
    if (!name) return;
    const key = filesList.length;
    filesList = [...filesList, {name, key}  ];
    renderListFiles();
}


body.addEventListener('contextmenu', menuHandler, {once:true});

renderListFiles();