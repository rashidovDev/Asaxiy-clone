export interface INavigation {
    href : string,
    name : string
}

export const navigation : INavigation[] = [
    {
        href : "/",
        name : "Новости"
    },
    {
        href : "/",
        name : "Новинки"
    },
    {
        href : "/",
        name : "Скидки"
    },
    {
        href : "/",
        name : "Книги"
    },
    {
        href : "/",
        name : "Мебель"
    },
    {
        href : "/",
        name : "Телефоны и гаджеты"
    },
    {
        href : "/",
        name : "Кондиционеры"
    }
]

export interface ISlider {
    id : number | string,
    image : any
}

export const slider : ISlider[] = [
    {
        id : 1,
        image : require("./assets/slider/1.png")
    },
    {
        id : 2,
        image : require("./assets/slider/2.png")
    },
    {
        id : 3,
        image : require("./assets/slider/3.png")
    },
]

export interface IBooks {
    id : number | string,
    image : any,
    heading : string,
    title : string
}

export const books = [
    {
        id : 1, 
        image : require("./assets/books/1.png"),
        heading : "Дарон Ажемўғли, Жеймс А. Робинсон",
        title : "Asaxiy books kitoblari"
    },
    {
        id : 2, 
        image : require("./assets/books/2.png"),
        heading : "Дарон Ажемўғли, Жеймс А. Робинсон",
        title : "Asaxiy books kitoblari"
    },
    {
        id : 3, 
        image : require("./assets/books/3.png"),
        heading : "Дарон Ажемўғли, Жеймс А. Робинсон",
        title : "Asaxiy books kitoblari"
    },
    {
        id : 4, 
        image : require("./assets/books/4.png"),
        heading : "Дарон Ажемўғли, Жеймс А. Робинсон",
        title : "Asaxiy books kitoblari"
    },
    {
        id : 4, 
        image : require("./assets/books/4.png"),
        heading : "Дарон Ажемўғли, Жеймс А. Робинсон",
        title : "Asaxiy books kitoblari"
    },
    {
        id : 4, 
        image : require("./assets/books/4.png"),
        heading : "Дарон Ажемўғли, Жеймс А. Робинсон",
        title : "Asaxiy books kitoblari"
    },
    {
        id : 4, 
        image : require("./assets/books/4.png"),
        heading : "Дарон Ажемўғли, Жеймс А. Робинсон",
        title : "Asaxiy books kitoblari"
    },
]

export interface IProduct {
    product : {
        id : number,
        image : any,
        heading : string,
        rate : number,
        price : number,
        monthPrice : number, 
        comment : number
    }[]
}

export const products : IProduct["product"] = [
    {
        id : 1,
        image : require("./assets/products/1.png"),
        heading : "Futbolka Yoki 'Akang kuchaydi uji'",
        rate : 3,
        price : 119000,
        monthPrice : 13900,
        comment : 3
    },
    {
        id : 2,
        image : require("./assets/products/2.png"),
        heading : "Smart Watch",
        rate : 4,
        price : 269000,
        monthPrice : 32600,
        comment : 5
    },
    {
        id : 3,
        image : require("./assets/products/3.png"),
        heading : "Planshet",
        rate : 4,
        price : 4083000,
        monthPrice : 439000,
        comment : 4
    },
    {
        id : 4,
        image : require("./assets/products/4.png"),
        heading : "Kitoblar to'plami",
        rate : 3,
        price : 999000,
        monthPrice : 109000,
        comment : 2
    },
    {
        id : 5,
        image : require("./assets/products/5.png"),
        heading : "Klaus Shvab",
        rate : 4,
        price : 60000,
        monthPrice : 6600,
        comment : 2
    },
    {
        id : 6,
        image : require("./assets/products/6.png"),
        heading : "Iphone 14 pro max",
        rate : 5,
        price : 155999000,
        monthPrice : 1929000,
        comment : 7
    },
    {
        id : 7,
        image : require("./assets/products/7.png"),
        heading : "Iphone 114 Pro",
        rate : 3,
        price : 119000,
        monthPrice : 13900,
        comment : 3
    },
    {
        id : 8,
        image : require("./assets/products/4.png"),
        heading : "Kitoblar to'plami",
        rate : 3,
        price : 999000,
        monthPrice : 109000,
        comment : 2
    },
    {
        id : 9,
        image : require("./assets/products/5.png"),
        heading : "Klaus Shvab",
        rate : 4,
        price : 60000,
        monthPrice : 6600,
        comment : 2
    },
    {
        id : 10,
        image : require("./assets/products/6.png"),
        heading : "Iphone 14 pro max",
        rate : 5,
        price : 155999000,
        monthPrice : 1929000,
        comment : 7
    },
]