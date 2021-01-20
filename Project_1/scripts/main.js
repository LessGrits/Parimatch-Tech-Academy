const TOP_MENU_ELEMENT = document.querySelector('.menu-items');
const CATEGORIES_MENU_ELEMENT = document.querySelector('.categories');
const MAX_TOP_MENU_ELEMENTS = 9;
const BASKET_ELEMENT = document.querySelector('.basket__info')
const NEWS_ELEMENT = document.querySelector('.news-list');
const PROMOTION_ELEMENT = document.querySelector('.promotion');
const BUYING_RIGHT_NOW_ELEMENT = document.querySelector('.right-now_slider');


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

const basketRender = () => {
    BASKET_ELEMENT.innerHTML = `
                            <p class="basket__info">
                                <strong>Корзина</strong>
                                <br>
                                ${BASKET_VALUE.num} /${BASKET_VALUE.value} ${BASKET_VALUE.currency}
                            </p>
    `
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

const itemsOneSectionRender = (sectionType, sectionItemsList) => {
    const SECTION_ELEMENT = document.querySelector('.' + sectionType);

    console.log('BEFORE', sectionItemsList);
    console.log(itemsTypeSort[sectionType])
    const SORTED_ITEMS_LIST = itemsTypeSort[sectionType](sectionItemsList);
    console.log('AFTER', SORTED_ITEMS_LIST)

    const SECTION_TEMPLATE = sectionItemsList
        .map(({
                  type,
                  description,
                  img,
                  price,
                  oldPrice,
                  currency,
                  url
              }) => {

            return `
            <div class="one-good  ${type}-label">
                    <div class="one-good__image-wrap">
                    <img src="${img}" alt="${description}">
                    </div>
                    <a class="one-good__name" href="${url}">${description}</a>
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

const itemsALLSectionsRender = () => {
    for (const sectionType in sortItemsByTypes(ITEMS)) {
        itemsOneSectionRender(sectionType, sortItemsByTypes(ITEMS)[sectionType])
    }
}

const promotionRender = () => {

    if (!PROMOTIONS.length) {
        PROMOTION_ELEMENT.remove();
        return;
    }
    const PROMOTIONS_LIST_TEMPLATE = PROMOTIONS
        .map(({
                  title,
                  description,
                  img,
                  url,
                  time_action
              }) => {

            if (!!time_action) {
                const deadlineDate = time_action.match(/\d+/g).map((num) => num.length > 1 ? num : "0" + num);
            }

            return `
            <div class="one-offer">
                    <a class="one-offer__name" href="${url}">${title}</a>
                    <div class="one-offer__image-wrap">
                        <img src="${img}" alt="">
                    </div>
                    <div class="one-offer__text-wrap">
                        <p class="one-offer__text">${description} </p>
                    </div>
                    <div class="one-offer-time">
                        <span class="one-offer__text">
                        Срок действия
                        </span>
                        <div class="deadline">
                            <div class="deadline__time-measure">
                                <div class="deadline__numbers">
                                    <span class="deadline__number">1</span>
                                    <span class="deadline__number">0</span>
                                </div>
                                <p class="deadline__measure-title">
                                    дней
                                </p>
                            </div>
                            <div class="deadline__time-measure">
                                <div class="deadline__numbers">
                                    <span class="deadline__number">0</span>
                                    <span class="deadline__number">7</span>
                                </div>
                                <p class="deadline__measure-title">
                                    часов
                                </p>
                            </div>
                            <div class="deadline__time-measure">
                                <div class="deadline__numbers">
                                    <span class="deadline__number">5</span>
                                    <span class="deadline__number">9</span>
                                </div>
                                <p class="deadline__measure-title">
                                    минут
                                </p>
                            </div>
                        </div>
                    </div>
                    <a class="one-offer__about" href="${url}">Подробнее</a>
                </div>`
        })

    PROMOTION_ELEMENT.innerHTML = PROMOTIONS_LIST_TEMPLATE.join('')
}

const buyingRightNowRender = () => {
    const BUYING_RIGHT_NOW_TEMPLATE = BUYING_RIGHT_NOW
        .map(({title, img, url}) => {
            return `
             <div class="right-now_slider__product">
                    <a class="right-now_product__img" href="${url}">
                        <img src="${img}" alt="">
                    </a>
                    <a class="right-now-product__link" href="#">
                       ${title}
                    </a>
                </div>
`
        })

    BUYING_RIGHT_NOW_ELEMENT.innerHTML = BUYING_RIGHT_NOW_TEMPLATE.join('');
}


menuRender(TOP_MENU, TOP_MENU_ELEMENT, MAX_TOP_MENU_ELEMENTS);
menuRender(MENU, CATEGORIES_MENU_ELEMENT, 20, 'category');
basketRender();
newsRender(NEWS, NEWS_ELEMENT);
itemsALLSectionsRender();
promotionRender();
buyingRightNowRender();


