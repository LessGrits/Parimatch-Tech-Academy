const MONTHS_ARRAY = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
const CURRENCY_ARRAY = {
    'RUB': 'р.',
    'UAH': 'грн.',
    'USD': '&#36;'
}
const BASKET_VALUE = {
    num: 1,
    value: 100,
    currency: 'р'
}
const itemsTypeSort = {
    new: (list) => getNewestDate(list, list.length),
    recommended: (list) => sortByIncreasePrice(list),
    sale: (list) => sortByBigSale(list),
}
