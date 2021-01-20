const TOP_MENU_ELEMENT = document.querySelector('.menu-items');
const CATEGORIES_MENU_ELEMENT = document.querySelector('.categories');
const MAX_TOP_MENU_ELEMENTS = 9;
const NEWS_ELEMENT = document.querySelector('.news-list');

const MONTHS_ARRAY = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
const CURRENCY_ARRAY = {
    'RUB':'р.',
    'UAH':'грн.',
    'USD':'&#36;'
}
const itemsTypeSort = {
    new:(list) => getNewestDate(list, list.length),
    recommended:(list) => getNewestDate(list,  list.length ),
    sale:(list) => getNewestDate(list, list.length),
}

const sortByOrder = array => array.sort((a, b) => a.order - b.order);

const makeSubmenuTemplate = (submenu, title) => {
    const SUBMENU_ELEMENT = document.createElement('div');
    SUBMENU_ELEMENT.classList.add('sub-menu');

    const FIRST_SUBMENU_ITEM_ELEMENT = document.createElement('a');
    FIRST_SUBMENU_ITEM_ELEMENT.classList.add('menu-item')
    FIRST_SUBMENU_ITEM_ELEMENT.innerText = title;

    const SUBMENU_ITEMS_ELEMENT = document.createElement('div');
    SUBMENU_ITEMS_ELEMENT.classList.add('sub-menu_items')

    SUBMENU_ELEMENT.append(FIRST_SUBMENU_ITEM_ELEMENT);
    SUBMENU_ELEMENT.append(SUBMENU_ITEMS_ELEMENT)

    menuRender(submenu, SUBMENU_ITEMS_ELEMENT, 10, 'sub-menu_item');

    return SUBMENU_ELEMENT;
}

const menuRender = (menu, menuElement, maxElements = 10, menuItemClassName = 'menu-item') => {
    const SORTED_MENU = sortByOrder(Object.values(menu))
    for (const [index, {title, url, submenu}] of SORTED_MENU.entries()) {
        if (index > maxElements - 1) return;
        if (!!submenu) {

            menuElement.append(makeSubmenuTemplate(submenu, title));

        } else {
            const MENU_ITEM_ELEMENT = document.createElement('a');
            MENU_ITEM_ELEMENT.classList.add(menuItemClassName);
            MENU_ITEM_ELEMENT.href = url;
            MENU_ITEM_ELEMENT.innerText = title;
            menuElement.append(MENU_ITEM_ELEMENT);
        }

    }
}

const newsRender = (news, newsElement) => {

    if (news.length < 1) {
        const WITHOUT_NEWS_ELEMENT = document.createElement('h2');
        WITHOUT_NEWS_ELEMENT.innerText = 'Будут очень скоро';
        newsElement.append(WITHOUT_NEWS_ELEMENT);
        return;
    }

    for (let {date, title, description, img, url} of getNewestRandomNews(news)) {
        const ONE_NEWS_ELEMENT = document.createElement('li');
        ONE_NEWS_ELEMENT.classList.add('news-preview');

        const ONE_NEWS_LINK_ELEMENT = document.createElement('a');
        ONE_NEWS_LINK_ELEMENT.href = url;

        const ONE_NEWS_IMG_ELEMENT = document.createElement('img');
        ONE_NEWS_IMG_ELEMENT.classList.add('news-img');
        ONE_NEWS_IMG_ELEMENT.src = img;
        ONE_NEWS_IMG_ELEMENT.alt = title;

        const ONE_NEWS_DATE_WRAP_ELEMENT = document.createElement('div');
        ONE_NEWS_DATE_WRAP_ELEMENT.classList.add('news-date');

        const newsDate = new Date(date);

        const ONE_NEWS_DATE_DAY_ELEMENT = document.createElement('p');
        ONE_NEWS_DATE_DAY_ELEMENT.classList.add('date-num');
        ONE_NEWS_DATE_DAY_ELEMENT.innerText = newsDate.getDate().toString();

        const ONE_NEWS_DATE_MONTH_ELEMENT = document.createElement('p');
        ONE_NEWS_DATE_MONTH_ELEMENT.innerText = MONTHS_ARRAY[newsDate.getMonth()];

        ONE_NEWS_DATE_WRAP_ELEMENT.append(ONE_NEWS_DATE_DAY_ELEMENT);
        ONE_NEWS_DATE_WRAP_ELEMENT.append(ONE_NEWS_DATE_MONTH_ELEMENT);

        ONE_NEWS_LINK_ELEMENT.append(ONE_NEWS_IMG_ELEMENT);
        ONE_NEWS_LINK_ELEMENT.append(ONE_NEWS_DATE_WRAP_ELEMENT);

        const ONE_NEWS_TEXT_WRAP_ELEMENT = document.createElement('div');
        ONE_NEWS_TEXT_WRAP_ELEMENT.classList.add('news-text');

        const ONE_NEWS_TITLE_ELEMENT = document.createElement('a');
        ONE_NEWS_TITLE_ELEMENT.classList.add('news-title');
        ONE_NEWS_TITLE_ELEMENT.innerText = title;

        const ONE_NEWS_DESCRIPTION_ELEMENT = document.createElement('p');
        ONE_NEWS_DESCRIPTION_ELEMENT.classList.add('news-article');
        ONE_NEWS_DESCRIPTION_ELEMENT.innerText = description;

        ONE_NEWS_TEXT_WRAP_ELEMENT.append(ONE_NEWS_TITLE_ELEMENT);
        ONE_NEWS_TEXT_WRAP_ELEMENT.append(ONE_NEWS_DESCRIPTION_ELEMENT);

        ONE_NEWS_ELEMENT.append(ONE_NEWS_LINK_ELEMENT)
        ONE_NEWS_ELEMENT.append(ONE_NEWS_TEXT_WRAP_ELEMENT)

        newsElement.append(ONE_NEWS_ELEMENT)
    }

    const ALL_NEWS_ELEMENT = document.createElement('a');
    ALL_NEWS_ELEMENT.classList.add('all-news-link');
    ALL_NEWS_ELEMENT.innerText = 'Все новости';

    document.querySelector('.news-section').append(ALL_NEWS_ELEMENT);
}

const getNewestRandomNews = (news, newsElement) => {
    const NEWEST_NEWS = getNewestDate(news, 3)
    return shuffle(NEWEST_NEWS);
}

const getNewestDate = (list, num) => {
    let secondsDateList = list.map(({date}) => Date.parse(date))
        .filter(item => !isNaN(item))
    let iterator = 0;
    const result = []
    while (iterator < num) {
        const maxSeconds = Math.max(...secondsDateList);
        const maxDateIndex = secondsDateList.indexOf(maxSeconds);
        secondsDateList[maxDateIndex] = 0;

        result.push(list[maxDateIndex]);
        iterator++;
    }
    return result;
}

const shuffle = array => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

const sortItemsByTypes = items => {
    let TYPES_ITEMS = {};
    items.forEach((item) => {
        if (!TYPES_ITEMS[item.type]) {
            TYPES_ITEMS[item.type] = [];
            TYPES_ITEMS[item.type].push(item);
        } else {
            TYPES_ITEMS[item.type].push(item);
        }
    })
    return TYPES_ITEMS;
}

const setSrc = (src) => {
   let image =  document.createElement('img');
   image.onerror =  () => {
       this.src = 'images/news1.png';
   };
    image.src = src;

    return image;
}

const itemsOneSectionRender = (sectionType, sectionItemsList) => {
    const SECTION_ELEMENT = document.querySelector('.'+sectionType);

    console.log('BEFORE',sectionItemsList);
    console.log(itemsTypeSort[sectionType])
    const SORTED_ITEMS_LIST = itemsTypeSort[sectionType](sectionItemsList);
    console.log('AFTER',SORTED_ITEMS_LIST)

    const SECTION_TEMPLATE = sectionItemsList
        .map(({
                  type,
                  description,
                  img,
                  price,
                  oldPrice,
                  currency,
                  date,
                  url
              }) => {

            return `
            <div class="one-good ${type}-label">
                    <div class="one-good__image-wrap">
                    <img src="${img}" alt="${description}">
                    </div>
                    <a class="one-good__name" href="url">${description}</a>
                    <div class="one-good__price-wrap">
                        <p class="one-good__price">Цена: <span>${price} ${CURRENCY_ARRAY[currency]}</span></p>
                        <div class="one-good__discount">${oldPrice}${CURRENCY_ARRAY[currency]}</div>
                    </div>
                    <div class="one-good__actions">
                        <button class="btn basket-btn">Купити</button>
                        <p class="one-good__about">Подробнее</p>
                    </div>
                </div>
            `
        })

     SECTION_ELEMENT.innerHTML = SECTION_TEMPLATE.join('')
}

const itemsALLSectionSRender = () => {
    for (const sectionType in sortItemsByTypes(ITEMS)) {
            itemsOneSectionRender(sectionType,sortItemsByTypes(ITEMS)[sectionType] )
    }
}



menuRender(TOP_MENU, TOP_MENU_ELEMENT, MAX_TOP_MENU_ELEMENTS);
menuRender(MENU, CATEGORIES_MENU_ELEMENT, 20, 'category');
newsRender(NEWS, NEWS_ELEMENT);
itemsALLSectionSRender()