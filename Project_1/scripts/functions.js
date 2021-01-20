const sortByOrder = array => array.sort((a, b) => a.order - b.order);

const sortByIncreasePrice = list => {
    return list.sort((a, b) => a.price - b.price);
}

const getNewestRandomNews = (news, newsElement) => {
    const NEWEST_NEWS = getNewestDate(news, 3)
    return shuffle(NEWEST_NEWS);
}

const sortByBigSale = list => {
    const difference = ({oldPrice, price}) => oldPrice - price;
    return list.sort((a, b) => difference(b) - difference(a))
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
    let image = document.createElement('img');
    image.onerror = () => {
        this.src = 'images/news1.png';
    };
    image.src = src;

    return image;
}