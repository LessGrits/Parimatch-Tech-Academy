const CURRENCY = 'UAH';

const CURRENCY_EXCHANGE = {
    USD: 27.96,
    RUB: 0.38,
};

const BASKET = {
    elements: 4,
    price: 4000,
};

const TOP_MENU = {
    about_company: {
        order: 2,
        title: 'О компании',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            }
        ]
    },
    paymenw_delivery: {
        order: 1,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    },
    catalog: {
        order: 1,
        title: 'Каталог',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            }
        ]
    },
    catalog1: {
        order: 8,
        title: 'Каталог',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            }
        ]
    },
    catalog2: {
        order: 8,
        title: 'Каталог',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            }
        ]
    },
    catalog3: {
        order: 8,
        title: 'Каталог',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            }
        ]
    },
    catalog4: {
        order: 8,
        title: 'Каталог',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            }
        ]
    },
    catalog9: {
        order: 8,
        title: 'Каталог9',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            }
        ]
    },

};

const MENU = [
    {
        order: 2,
        title: 'SKYPE оборудование',
        url: 'skype_equipment.html',
    },
    {
        order: 1,
        title: 'VOIP ОБОРУДОВАНИЕ',
        url: 'voip_equipment.html',
    },

    {
        order: 3,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    }
];

const NEWS = [
    {
        date: '2021/01/01',
        title: 'Новинка от «Элтекс» - точка доступа WEP',
        description: 'Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.',
        img: 'https://www.khotwa-group.com/wp-content/uploads/2020/08/Icons-18.png',
        url: 'voip_equipment.html',
    },
    {
        date: '2020/12/25',
        title: 'Новинка от компании Grandstream!',
        description: 'Скоро в продаже мощный маршрутизатор GWN7000!',
        img: 'https://www.omarimc.com/wp-content/uploads/2017/01/news-636978_960_720.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2021/01/14',
        title: 'WiFi точка доступа от компании Grandstream!',
        description: 'Уже скоро в продаже!',
        img: 'https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn.png',
        url: 'voip_equipment.html',
    },
    {
        date: '2021/01/13',
        title: 'WiFi точка доступа от компании Grandstream!',
        description: 'Уже скоро в продаже!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSY__mTfU-mx5oWgPLyYOPZAZU0ZOvM5ExA&usqp=CAU',
        url: 'voip_equipment.html',
    },
    {
        date: '2021/01/12',
        title: 'WiFi точка доступа от компании Grandstream!',
        description: 'Уже скоро в продаже!',
        img: 'https://www.omarimc.com/wp-content/uploads/2017/01/news-636978_960_720.jpg',
        url: 'voip_equipment.html',
    },
];

const BANNER = [
    {
        order: 1,
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
    {
        order: 2,
        img: 'https://same_url2.jpg',
        url: 'voip_equipment.html',
    }
];

// type ['new', 'recommended', 'sale']
const ITEMS = [
    {
        type: 'new',
        description: 'IP C530A IP',
        img: 'images/news1.png',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2000/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'new',
        description: ' C530A IP',
        img: 'images/news1.png',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '4000/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'new',
        description: ' new IP телефон Siemens Gigaset C530A IP',
        img: 'images/news1.png',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2021/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/news1.png',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2023/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/news1.png',
        price: '300',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'recommended',
        description: 'IP C530A IP',
        img: 'images/news1.png',
        price: '100',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'recommended',
        description: 'recommend C530A IP',
        img: 'images/news1.png',
        price: '400',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'recommended',
        description: 'recommend!!! C530A IP',
        img: 'images/news1.png',
        price: '3000',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },

    {
        type: 'recommended',
        description: 'NOKIA',
        img: 'images/news1.png',
        price: '350',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/news1.png',
        price: '100',
        oldPrice: '1000',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
    {
        type: 'sale',
        description: 'IP C530A IP',
        img: 'images/news1.png',
        price: '150',
        oldPrice: '200',
        currency: 'UAH',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
    {
        type: 'sale',
        description: 'телефон Siemens',
        img: 'images/news1.png',
        price: '250',
        oldPrice: '2000',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
    {
        type: 'sale',
        description: 'телефон Siemens',
        img: 'images/news1.png',
        price: '2500',
        oldPrice: '10000',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
];

// time_action format: "d" - day, "h" - hour, "m" - minute. if doesn't exist = infinity
const PROMOTIONS = [
    {
        title: 'Название акции',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/offer1.png',
        url: 'https://same_url/item.html',
        time_action: '1d 2h 20m'
    },
    {
        title: 'Название акции 2',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/offer1.png',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название акции 3',
        description: 'IP  Gigaset C530A IP',
        img: 'images/offer1.png',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название акции 15',
        description: 'IP  Gigaset C530A IP',
        img: 'images/offer1.png',
        url: 'https://same_url/item.html',
    }
];

const BUYING_RIGHT_NOW = [
    {
        title: 'Название товара',
        img: 'images/samsung-shs-2320.png',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 2',
        img: 'images/samsung-shs-2320.png',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 3',
        img: 'images/samsung-shs-2320.png',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 4',
        img: 'images/samsung-shs-2320.png',
        url: 'https://same_url/item.html',
    },
]