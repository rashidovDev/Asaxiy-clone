export interface INavigation {
    href : string,
    name : string
}

export const navigation : INavigation[] = [
    {
        href : "/new",
        name : "Новинки"
    },
    {
        href : "/clothes",
        name : "Одежды"
    },
    {
        href : "/laptop",
        name : "Компютеры"
    },
    {
        href : "/gadget",
        name : "Телефоны и гаджеты"
    },
    {
        href : "/books",
        name : "Книги"
    },
    {
        href : "/another",
        name : "Разное"
    },
    {
        href : "/airconditioner",
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
    }
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
        like : boolean,
        type : string,
        new : boolean
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
        like : false,
        type : "clothes",
        new : false
    },
    {
        id : 2,
        image : require("./assets/products/2.png"),
        heading : "Smart Watch",
        rate : 4,
        price : 269000,
        monthPrice : 32600,
        comment : 5,
        like : false,
        type : "gadget",
        new : true
    },
    {
        id : 3,
        image : require("./assets/products/3.png"),
        heading : "Planshet",
        rate : 4,
        price : 4083000,
        monthPrice : 439000,
        comment : 4,
        like : false,
        type : "gadget",
        new : true
    },
    {
        id : 4,
        image : require("./assets/products/4.png"),
        heading : "Kitoblar to'plami",
        rate : 3,
        price : 999000,
        monthPrice : 109000,
        comment : 2,
        like : false,
        type : "book",
        new : true
    },
    {
        id : 5,
        image : require("./assets/products/5.png"),
        heading : "Klaus Shvab",
        rate : 4,
        price : 60000,
        monthPrice : 6600,
        comment : 2,
        like : false,
        type : "book",
        new : true
    },
    {
        id : 6,
        image : require("./assets/products/6.png"),
        heading : "Iphone 14 pro max",
        rate : 5,
        price : 155999000,
        monthPrice : 1929000,
        comment : 7,
        like : false,
        type : "gadget",
        new : false
    },
    {
        id : 7,
        image : require("./assets/products/7.png"),
        heading : "Iphone 114 Pro",
        rate : 3,
        price : 119000,
        monthPrice : 13900,
        comment : 3,
        like : false,
        type : "gadget",
        new : false
    },
    {
        id : 8,
        image : require("./assets/products/4.png"),
        heading : "Kitoblar to'plami",
        rate : 3,
        price : 999000,
        monthPrice : 109000,
        comment : 2,
        like : false,
        type : "book",
        new : true
    },
    {
        id : 9,
        image : require("./assets/products/5.png"),
        heading : "Klaus Shvab",
        rate : 4,
        price : 60000,
        monthPrice : 6600,
        comment : 2,
        like : false,
        type : "book",
        new : true
    },
    {
        id : 10,
        image : require("./assets/products/6.png"),
        heading : "Iphone 14 pro max",
        rate : 5,
        price : 155999000,
        monthPrice : 1929000,
        comment : 7,
        like : false,
        type : "gadget",
        new : true
    },
    {
        id : 11,
        image : require("./assets/products/8.png"),
        heading : "Клавиатура A4TECH Bloody B865N USB Red Switch",
        rate : 4,
        price : 506000,
        monthPrice : 58600,
        comment : 8,
        like : false,
        type : "gadget",
        new : true
    },
    {
        id : 12,
        image : require("./assets/products/9.png"),
        heading : "Беспроводная мышь A4tech G3-760N Black/Orange",
        rate : 4,
        price : 196000 ,
        monthPrice : 22700,
        comment : 5,
        like : false,
        type : "gadget",
        new : false
    },
    {
        id : 13,
        image : require("./assets/products/10.png"),
        heading : "Наушники HUAWEI FreeBuds 4i Black",
        rate : 4,
        price : 799000,
        monthPrice : 93300,
        comment : 5,
        like : false,
        type : "gadget",
        new : false
    },
    {
        id : 14,
        image : require("./assets/products/11.png"),
        heading : "Смартфон HUAWEI nova Y70 4/64GB Midnight black",
        rate : 5,
        price : 2360000,
        monthPrice : 287200,
        comment : 10,
        like : false,
        type : "gadget",
        new : false
    },
    {
        id : 15,
        image : require("./assets/products/12.png"),
        heading : "Проводные наушники Xiaomi Mi Pro HD (Серебряные)",
        rate : 3,
        price : 99000 ,
        monthPrice : 11600,
        comment : 1,
        like : false,
        type : "gadget",
        new : true
    },
    {
        id : 16,
        image : require("./assets/products/13.png"),
        heading : "Адаптер Смарт ТВ Xiaomi Mi TV Stick 4K HDR",
        rate : 4,
        price : 645000,
        monthPrice : 77300,
        comment : 7,
        like : false,
        type : "gadget",
        new : true
    },
    {
        id : 17,
        image : require("./assets/products/14.png"),
        heading : "Беспроводные наушники Razer Barracuda X Black",
        rate : 5,
        price : 1150000,
        monthPrice : 137800,
        comment : 2,
        like : false,
        type : "gadget",
        new : true
    },
    {
        id : 18,
        image : require("./assets/products/15.png"),
        heading : "Смарт браслет Xiaomi Mi Band 7 Black",
        rate : 4,
        price : 529000,
        monthPrice : 63400,
        comment : 6,
        like : false,
        type : "gadget",
        new : false
    },
    {
        id : 19,
        image : require("./assets/products/16.png"),
        heading : "Смартфон Xiaomi Redmi Note 11 4/128 GB Gray (Global version)",
        rate : 5,
        price :2599000,
        monthPrice : 297100,
        comment : 4,
        like : false,
        type : "gadget",
        new : false
    },
    {
        id : 20,
        image : require("./assets/products/17.png"),
        heading : "Миксер авто",
        rate : 5,
        price : 1599000,
        monthPrice : 119000,
        comment : 4,
        like : false,
        type : "another",
        new : true
    },
    {
        id : 21,
        image : require("./assets/products/18.png"),
        heading : "Ноутбук Apple MacBook Air 13 8GB/512GB 2020",
        rate : 5,
        price : 14929000,
        monthPrice : 1840700,
        comment : 4,
        like : false,
        type : "laptop",
        new : false
    },
    {
        id : 22,
        image : require("./assets/products/19.png"),
        heading : "Ноутбук Lenovo V15 / Intel i3-10110 / DDR4 4GB",
        rate : 4,
        price : 4034000 ,
        monthPrice : 471200,
        comment : 5,
        like : false,
        type : "laptop",
        new : false
    },
    {
        id : 23,
        image : require("./assets/products/20.png"),
        heading : "Ноутбук Asus X515J / Intel i3-1005 / DDR4 8GB",
        rate : 5,
        price : 4968000,
        monthPrice : 618500,
        comment : 3,
        like : false,
        type : "laptop",
        new : false
    },
    {
        id : 24,
        image : require("./assets/products/21.png"),
        heading : "Принтер Canon Pixma G2415 (Струйный, А4)",
        rate : 5,
        price : 2149000,
        monthPrice : 254800,
        comment : 3,
        like : false,
        type : "gadget",
        new : true
    },
    {
        id : 25,
        image : require("./assets/products/22.png"),
        heading : "Ноутбук Acer Aspire 3 A315-34-C5Y3. Intel Celeron",
        rate : 4,
        price :3519000,
        monthPrice : 419700,
        comment : 4,
        like : false,
        type : "laptop",
        new : true
    },
    {
        id : 26,
        image : require("./assets/products/23.png"),
        heading : "Кондиционер ZIFFLER Monaco 09 Inverter",
        rate : 3,
        price : 4740000,
        monthPrice :4841000,
        comment : 2,
        like : false,
        type : "conditioner",
        new : false
    },
    {
        id : 27,
        image : require("./assets/products/24.png"),
        heading : "Кондиционер Midea Cold Low voltage 12",
        rate : 5,
        price : 5204000,
        monthPrice : 647900,
        comment : 3,
        like : false,
        type : "conditioner",
        new : false
    },
    {
        id : 28,
        image : require("./assets/products/25.png"),
        heading : "Кондиционер Sitronic Snow DC Inverter 12",
        rate : 4,
        price : 5547000,
        monthPrice : 692100,
        comment : 1,
        like : false,
        type : "conditioner",
        new : true
    },
    {
        id : 29,
        image : require("./assets/products/26.png"),
        heading : "Кондиционер Sitronic Snow DC Inverter 09",
        rate : 3,
        price : 5405000,
        monthPrice : 647900,
        comment : 2,
        like : false,
        type : "conditioner",
        new : false
    },
    {
        id : 30,
        image : require("./assets/products/27.png"),
        heading : "Кондиционер Sitronic Mars Inverter 12",
        rate : 5,
        price : 5547000 ,
        monthPrice : 692100,
        comment : 1,
        like : false,
        type : "conditioner",
        new : true
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


interface ISort {
    title : string,
    value : string
}

export const sort : ISort[] = [
    {
        title : "Сначала по дешевле",
        value : "min"
    },
    {
        title : "Сначала по дороже",
        value : "max"
    },
    {
        title : "Рейтинг (начиная с низкого)",
        value : "rateMin"
    },
    {
        title : "Рейтинг (начиная с высокого)",
        value : "rateMax"
    },
]

interface IProductType {
    href : string,
    image : any,
    title : string
}

export const productType : IProductType[] = [
    {
        href : "/laptop",   
        image : require("./assets/pages/c_pc.png"),
        title : "Компютеры"
    },
    {
        href : "/clothes",
        image : require("./assets/pages/shirt.png"),
        title : "Одежды"
    },
    {
        href : "/books",
        image : require("./assets/pages/c_book.png"),
        title : "Книги"
    },
    {
        href : "/airconditioner",
        image : require("./assets/pages/c_mach.png"),
        title : "Кондиционеры"
    },
    {
        href : "/gadget",
        image : require("./assets/pages/c_ph.png"),
        title : "Телефоны и гаджеты"
    },
    {
        href : "/another",
        image : require("./assets/pages/c_kitch.png"),
        title : "Разное"
    },
]