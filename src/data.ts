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
        comment : number,
        quantity? : number,
        like : boolean
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
        comment : 3,
        like : false
    },
    {
        id : 2,
        image : require("./assets/products/2.png"),
        heading : "Smart Watch",
        rate : 4,
        price : 269000,
        monthPrice : 32600,
        comment : 5,
        like : false
    },
    {
        id : 3,
        image : require("./assets/products/3.png"),
        heading : "Planshet",
        rate : 4,
        price : 4083000,
        monthPrice : 439000,
        comment : 4,
        like : false
    },
    {
        id : 4,
        image : require("./assets/products/4.png"),
        heading : "Kitoblar to'plami",
        rate : 3,
        price : 999000,
        monthPrice : 109000,
        comment : 2,
        like : false
    },
    {
        id : 5,
        image : require("./assets/products/5.png"),
        heading : "Klaus Shvab",
        rate : 4,
        price : 60000,
        monthPrice : 6600,
        comment : 2,
        like : false
    },
    {
        id : 6,
        image : require("./assets/products/6.png"),
        heading : "Iphone 14 pro max",
        rate : 5,
        price : 155999000,
        monthPrice : 1929000,
        comment : 7,
        like : false
    },
    {
        id : 7,
        image : require("./assets/products/7.png"),
        heading : "Iphone 114 Pro",
        rate : 3,
        price : 119000,
        monthPrice : 13900,
        comment : 3,
        like : false
    },
    {
        id : 8,
        image : require("./assets/products/4.png"),
        heading : "Kitoblar to'plami",
        rate : 3,
        price : 999000,
        monthPrice : 109000,
        comment : 2,
        like : false
    },
    {
        id : 9,
        image : require("./assets/products/5.png"),
        heading : "Klaus Shvab",
        rate : 4,
        price : 60000,
        monthPrice : 6600,
        comment : 2,
        like : false
    },
    {
        id : 10,
        image : require("./assets/products/6.png"),
        heading : "Iphone 14 pro max",
        rate : 5,
        price : 155999000,
        monthPrice : 1929000,
        comment : 7,
        like : false
    },
]


// ABOUT

interface IAbout {
    heading : string,
    title : string,
    note1 : string,
    note11 : string,
    note2 : string,
    note22 : string,
    name : string,
    registration : number,
    innn : number,
    ceo : string
}

export const about : IAbout = {
    heading : "О компании Asaxiy",
    title : "Главное преимущество нашей компании, которая занимается поставками бытовой техники и электроники в Узбекистане – многолетний опыт работы и заслуженное доброе имя. С момента своего развития интернет-магазин Asaxiy и его команда неустанно следит за тенденциями спроса потребительского рынка, что дает нам возможность всегда быть в курсе самых последних технологий и инновационных решений. Специалисты компании внимательно изучают желания наших клиентов, поэтому ресурс постоянно обновляется качественными новинками, имеющими доступную стоимость.",
    note1 : "Принцип работы компании",
    note11 : `Каждый покупатель должен в комфортных условиях выбрать телефоны и гаджеты максимально быстро, поэтому мы создали интуитивно понятное меню, которое легко освоить новым пользователям сети. Для большего удобства мы раздели меню на соответствующие разделы, в которых вы найдете более 15 тысяч разновидностей оргтехники и сопутствующих товаров. Выглядят они следующим образом:

    • посуда – здесь вы найдете самые необходимые атрибуты домашнего обихода, без которого не обходится наша повседневная жизни. Товары, представленные на сайте нашего магазина, обладают высоким качеством и прочностью;
    • кондиционеры и климатическая техника – раздел позволяет сделать полезные покупки в соответствии с вашими потребностями. К каждому товару имеется описание, которое позволит сделать правильный выбор;
    • телевизоры, видео и аудио находятся в следующем разделе, который достойно позиционируется как бытовая техника. Здесь представлены самые последние новинки и разработки, имеющие полномасштабный перечень функций, идущий в ногу со временем;
    • Техника для красоты и здоровья – один из любимых отделов наших постоянных покупательниц, которые знают цену здоровья и стремятся к естественной красоте путем правильного питания;
    • Компьютеры и оргтехника являются самым большим разделом, так как здесь включены всевозможные аксессуары и вспомогательные комплектующие, призванные облегчить процесс компьютеризации и уменьшить трату рабочего времени.
   
   Также наша компания Asaxiy.uz позаботилась про любителей игровых сервисов, о чем может сказать раздел для геймеров. Здесь предоставлено мощное компьютерное обеспечение, игровые мыши и клавиатуры, которые позволят осуществлять игровой процесс с максимальной точностью и меткостью. А для любителей чтения мы предоставили усовершенствованную литературу в виде аудио книг, тематика жанра которых достаточно широка.`,
    note2 : "Нащи преимущества",
    note22 : `Компания Asaxiy.uz стремительно прорабатывает все свои возможности, и сегодня мы предлагаем своим клиентам значительные скидки и быструю доставку в ряды городов. В зону нашего обслуживания входят такие города как Андижане, Бухаре, Фергане, Джизак, Хорезм, Наманган, Навои, Кашкадарью, Самарканде, Сырдарье, Сурхандарье и всей Ташкентской области, а также Республика Каракалпакстан. И это неполная карта поставок. Уточнить все наши зоны обслуживания вы можете, позвонив специалисту интернет-магазина, который предоставит всю интересующую вас информацию.

    Каждый покупатель нашего магазина – достойный гость, которому мы предложим приятные скидки и бонусные программы. Мы полностью сопроводим весь процесс подбора товаров согласно требованиям клиентам и произведем доставку любым удобным способом.`,
    name : "`Asaxiy Books` ООО",
    registration : 646439,
    innn : 305829008,
    ceo : "Allayev Firuz Abdunasimovich"
}

interface ISlick  {
    id : number,
    image : any
}

export const aboutSlick : ISlick[] = [
    {
        id : 1,
        image : require("./assets/about/1.png")
    },
    {
        id : 2,
        image : require("./assets/about/2.png")
    },
    {
        id : 3,
        image : require("./assets/about/3.png")
    },
    {
        id : 4,
        image : require("./assets/about/4.png")
    },
    {
        id : 5,
        image : require("./assets/about/5.png")
    },
    {
        id : 6,
        image : require("./assets/about/6.png")
    },
    {
        id : 7,
        image : require("./assets/about/7.png")
    },
    {
        id : 8,
        image : require("./assets/about/8.png")
    },
    {
        id : 9,
        image : require("./assets/about/9.png")
    },
    {
        id : 10,
        image : require("./assets/about/10.png")
    },
    {
        id : 11,
        image : require("./assets/about/11.png")
    },
    {
        id : 12,
        image : require("./assets/about/12.png")
    },
    {
        id :13 ,
        image : require("./assets/about/13.png")
    },
]

// FOOTER
interface IPay {
    id : number,
    image : any
}

export const paying = [
    {
     id : 1,
     image : require("./assets/footer/1.png")
    },
    {
    id : 2,
    image : require("./assets/footer/2.png")
    },
    {
    id : 3,
    image : require("./assets/footer/3.png")
    },
    {
    id : 4,
    image : require("./assets/footer/4.png")
    },
    {
    id : 5,
    image : require("./assets/footer/5.png")
    },
    {
    id : 6,
    image : require("./assets/footer/6.png")
    }
]
