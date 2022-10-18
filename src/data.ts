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

