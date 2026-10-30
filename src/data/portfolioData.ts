// Auto-generated portfolio data for HUTZAHAV STUDIO / Galina Khvostenko
export interface PortfolioImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  nameEn: string;
  nameRu: string;
  category: 'clothing' | 'atelier' | 'textiles' | 'paintings';
  price?: string;
  descriptionRu: string;
  descriptionEn: string;
  tags: string[];
  featured: boolean;
  coverImage: string;
  images: PortfolioImage[];
}

export interface CategoryInfo {
  id: 'all' | 'clothing' | 'atelier' | 'textiles' | 'paintings';
  titleRu: string;
  titleEn: string;
  titleHe: string;
  subtitleRu: string;
  icon: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    titleRu: 'Все работы',
    titleEn: 'All Works',
    titleHe: 'כל העבודות',
    subtitleRu: 'Полная коллекция авторских работ и услуг студии',
    icon: 'Sparkles'
  },
  {
    id: 'clothing',
    titleRu: 'Эксклюзивная одежда',
    titleEn: 'Exclusive Clothing',
    titleHe: 'בגדים אקסקלוסיביים',
    subtitleRu: 'Ручная роспись по шелку и льну, нуно-войлок, арт-жакеты',
    icon: 'Shirt'
  },
  {
    id: 'atelier',
    titleRu: 'Индивидуальный пошив',
    titleEn: 'Atelier & Tailoring',
    titleHe: 'תפירה אישית',
    subtitleRu: 'Вечерние платья, костюмы, подгонка по фигуре, реставрация',
    icon: 'Scissors'
  },
  {
    id: 'textiles',
    titleRu: 'Домашний текстиль',
    titleEn: 'Home Textiles',
    titleHe: 'טקסטיל לבית',
    subtitleRu: 'Шторы, авторское постельное белье, покрывала, ткани',
    icon: 'Home'
  },
  {
    id: 'paintings',
    titleRu: 'Картины и живопись',
    titleEn: 'Paintings & Art',
    titleHe: 'ציורים ואמנות',
    subtitleRu: 'Оригинальная интерьерная живопись маслом и акрилом на холсте',
    icon: 'Palette'
  }
];

export const STUDIO_INFO = {
  name: 'HUTZAHAV',
  brandNameRu: 'Студия «Хут Захав» (Золотая Нить)',
  masterNameRu: 'Галина Хвостенко',
  masterNameEn: 'Galina Khvostenko',
  masterNameHe: 'גלינה חבוסטנקו',
  roleRu: 'Дизайнер одежды, художник по текстилю, основатель ателье',
  roleEn: 'Fashion Designer & Textile Artist',
  taglineRu: 'Искусство неповторимого стиля и безупречного кроя',
  taglineEn: 'The Art of Unique Haute Couture & Fine Craftsmanship',
  aboutStoryRu: `Добро пожаловать в творческую мастерскую Hutzahav дизайнера Галины Хвостенко. 
Я создаю одежду и расписываю ткани уже более 15 лет. В 2019 году я открыла студию Hutzahav, чтобы дарить людям радость от ношения действительно уникальных, душевных вещей.

Мы создаем авторские и вечерние платья, расписываем вручную натуральный лен и шелк, создаем арт-вещи в технике нуно-войлока, осуществляем индивидуальный пошив любой сложности, шьем шторы и домашний текстиль, а также реставрируем любимую одежду, обувь и сумки.`,
  phone: '+972 58-587-7708',
  phoneRaw: '972585877708',
  whatsappUrl: 'https://wa.me/972585877708',
  email: 'Hutzahav@gmail.com',
  instagram: 'https://www.instagram.com/hutzahav.atelier/',
  facebook: 'https://www.facebook.com/hutzahav',
  experienceYears: 15,
  foundedYear: 2019,
  addressRu: 'Израиль (доставка по всему миру)',
  addressEn: 'Israel (Worldwide shipping available)'
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    "id": "00351d15-718a-7d7f-6834-ff4df3a1a272",
    "slug": "handmade-denim-jacket-denim-jacket-with-embroidery-felting-wool-details-knitt",
    "nameEn": "Handmade Denim jacket with embroidery felting, wool details, knit",
    "nameRu": "Джинсовый арт-жакет с авторской вышивкой и шерстяным валянием",
    "category": "clothing",
    "price": "1,200.00 ₪",
    "descriptionRu": "Эксклюзивная ручная работа в технике арт-фелтинг (валяние шерсти), авторская вышивка и вязаные детали. Неповторимый авторский дизайн.",
    "descriptionEn": "",
    "tags": [
      "Ручная работа",
      "Валяние",
      "Деним",
      "Шерсть",
      "Эксклюзив"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_dde2c9ed2a784fbea1ef5c407111b464.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_dde2c9ed2a784fbea1ef5c407111b464.jpg",
        "width": 2139,
        "height": 3000,
        "alt": "Джинсовый арт-жакет с авторской вышивкой и шерстяным валянием"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_1575b549443a421494a6196bdac3232d.jpg",
        "width": 570,
        "height": 857,
        "alt": "Джинсовый арт-жакет с авторской вышивкой и шерстяным валянием"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_50f921e6e3144a42bf20e04ca3566df2.jpg",
        "width": 570,
        "height": 909,
        "alt": "Джинсовый арт-жакет с авторской вышивкой и шерстяным валянием"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_828cf4b11eaa45a994be3db6f2479134.jpg",
        "width": 570,
        "height": 1040,
        "alt": "Джинсовый арт-жакет с авторской вышивкой и шерстяным валянием"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_ae0764da6ad14f4c9479ccfbc6e62d01.jpg",
        "width": 570,
        "height": 861,
        "alt": "Джинсовый арт-жакет с авторской вышивкой и шерстяным валянием"
      }
    ]
  },
  {
    "id": "6901949c-0aaf-9ad7-275a-9063818828ec",
    "slug": "handmade-wool-scarf",
    "nameEn": "White silk/wool scarf nuno felting technique.",
    "nameRu": "Джинсовый арт-жакет с авторской вышивкой и шерстяным валянием",
    "category": "clothing",
    "price": "150.00 ₪",
    "descriptionRu": "Эксклюзивная ручная работа в технике арт-фелтинг (валяние шерсти), авторская вышивка и вязаные детали. Неповторимый авторский дизайн.",
    "descriptionEn": "",
    "tags": [
      "Ручная работа",
      "Валяние",
      "Деним",
      "Шерсть",
      "Эксклюзив"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_8b45f02519c248d9a95e769ac77c89c5.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_8b45f02519c248d9a95e769ac77c89c5.jpg",
        "width": 540,
        "height": 290,
        "alt": "Джинсовый арт-жакет с авторской вышивкой и шерстяным валянием"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_038cc3222e61435e8a4b23c1a2a0f406.jpg",
        "width": 540,
        "height": 352,
        "alt": "Джинсовый арт-жакет с авторской вышивкой и шерстяным валянием"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_3dc782ebd6894450a0e586d9199576c5.jpg",
        "width": 405,
        "height": 540,
        "alt": "Джинсовый арт-жакет с авторской вышивкой и шерстяным валянием"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_520b7a7976d04782982b59fdc958dd8d.jpg",
        "width": 385,
        "height": 540,
        "alt": "Джинсовый арт-жакет с авторской вышивкой и шерстяным валянием"
      }
    ]
  },
  {
    "id": "9caeb3a4-af5c-9616-4be6-93a9cb60761b",
    "slug": "hand-painted-linen-a-line-dress-size-m",
    "nameEn": "Hand painted linen A-line dress. Size M",
    "nameRu": "Льняное платье А-силуэта с авторской ручной росписью",
    "category": "clothing",
    "price": "1,350.00 ₪",
    "descriptionRu": "100% натуральный умягченный лен высшего качества. Уникальная авторская роспись специальными стойкими красками по ткани. Свободный элегантный крой.",
    "descriptionEn": "",
    "tags": [
      "Натуральный лен",
      "Ручная роспись",
      "Платье",
      "Авторский дизайн"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_f0890a6485f349469fdb956bef48b976.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_f0890a6485f349469fdb956bef48b976.jpg",
        "width": 2848,
        "height": 4288,
        "alt": "Льняное платье А-силуэта с авторской ручной росписью"
      }
    ]
  },
  {
    "id": "18cbef94-7687-d1af-c682-23ba59a2c0af",
    "slug": "hand-painted-dress-3",
    "nameEn": "Hand-painted dress",
    "nameRu": "Дизайнерское платье с художественной росписью",
    "category": "clothing",
    "price": "1,350.00 ₪",
    "descriptionRu": "Индивидуальный пошив и ручная живопись по ткани. Каждое платье создается в единственном экземпляре, подчеркивая индивидуальность и изысканность.",
    "descriptionEn": "",
    "tags": [
      "Ручная роспись",
      "Дизайнерское платье",
      "Шелк / Лен",
      "Эксклюзив"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_3f5c33852d5b43bc9895a36182978246.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_3f5c33852d5b43bc9895a36182978246.jpg",
        "width": 1286,
        "height": 1772,
        "alt": "Дизайнерское платье с художественной росписью"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_a3f2db2c031649cf90c9b4fc02ffa1d6.jpg",
        "width": 1000,
        "height": 1504,
        "alt": "Дизайнерское платье с художественной росписью"
      }
    ]
  },
  {
    "id": "0d29cd9f-c974-cb3e-a68c-664921cf2311",
    "slug": "dresses-with-original-prints-1",
    "nameEn": "Dresses with original prints",
    "nameRu": "Платье с авторским принтом",
    "category": "clothing",
    "price": "450.00 ₪",
    "descriptionRu": "Комфортный крой, дышащие натуральные ткани и яркие авторские принты, созданные по оригинальным картинам Галины Хвостенко.",
    "descriptionEn": "",
    "tags": [
      "Авторский принт",
      "Платье",
      "Летняя коллекция"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_293e5422c44a40858c4fb1516cb6f4b5.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_293e5422c44a40858c4fb1516cb6f4b5.jpg",
        "width": 1181,
        "height": 1320,
        "alt": "Платье с авторским принтом"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_287630d714844402a2752c2a61e64475.jpg",
        "width": 1181,
        "height": 1772,
        "alt": "Платье с авторским принтом"
      }
    ]
  },
  {
    "id": "e2f2407d-db6a-41d3-892b-7242b237fc43",
    "slug": "dresses-with-original-prints",
    "nameEn": "Dresses with original prints (Vol. 2)",
    "nameRu": "Платье с авторским принтом — Вариант 2",
    "category": "clothing",
    "price": "450.00 ₪",
    "descriptionRu": "Комфортный крой, дышащие натуральные ткани и яркие авторские принты, созданные по оригинальным картинам Галины Хвостенко.",
    "descriptionEn": "",
    "tags": [
      "Авторский принт",
      "Платье",
      "Летняя коллекция"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_ce35ef5bcf124138a5d0dad9c8412126.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_ce35ef5bcf124138a5d0dad9c8412126.jpg",
        "width": 1772,
        "height": 1181,
        "alt": "Платье с авторским принтом — Вариант 2"
      }
    ]
  },
  {
    "id": "6fd065c4-5201-4f0e-3278-3b5523b0901c",
    "slug": "hand-painted-t-shirt-1",
    "nameEn": "Hand-painted T-shirt",
    "nameRu": "Футболка с авторской росписью ручной работы",
    "category": "clothing",
    "price": "250.00 ₪",
    "descriptionRu": "Премиальный 100% хлопок. Ручная роспись стойкими текстильными пигментами. Не смывается при стирке, сохраняет яркость.",
    "descriptionEn": "",
    "tags": [
      "Хлопок",
      "Ручная роспись",
      "Футболка",
      "Casual Chic"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_f0433777eacb49adb010c7f61dd79815.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_f0433777eacb49adb010c7f61dd79815.jpg",
        "width": 1772,
        "height": 1181,
        "alt": "Футболка с авторской росписью ручной работы"
      }
    ]
  },
  {
    "id": "6615e123-4bc3-e1f5-853f-6856f7a56371",
    "slug": "t-shirts-with-original-prints-1",
    "nameEn": "T-shirts with original prints",
    "nameRu": "Футболка с авторским художественным принтом",
    "category": "clothing",
    "price": "250.00 ₪",
    "descriptionRu": "Высококачественный хлопковый трикотаж с оригинальной графикой и картинами студии Hutzahav.",
    "descriptionEn": "",
    "tags": [
      "Хлопок",
      "Авторский принт",
      "Casual"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_21bc1c63f9134865b50321ab280d4934.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_21bc1c63f9134865b50321ab280d4934.jpg",
        "width": 1772,
        "height": 1181,
        "alt": "Футболка с авторским художественным принтом"
      }
    ]
  },
  {
    "id": "0536259a-1946-ec73-e5bb-0a3aaa81b242",
    "slug": "t-shirts-with-original-prints",
    "nameEn": "T-shirts with original prints (Vol. 2)",
    "nameRu": "Футболка с авторским художественным принтом — Вариант 2",
    "category": "clothing",
    "price": "100.00 ₪",
    "descriptionRu": "Высококачественный хлопковый трикотаж с оригинальной графикой и картинами студии Hutzahav.",
    "descriptionEn": "",
    "tags": [
      "Хлопок",
      "Авторский принт",
      "Casual"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_39624725715d4117a2fc3baf30004e16.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_39624725715d4117a2fc3baf30004e16.jpg",
        "width": 1322,
        "height": 1772,
        "alt": "Футболка с авторским художественным принтом — Вариант 2"
      }
    ]
  },
  {
    "id": "7fe506e2-a864-bbbd-f6d1-57f92877056e",
    "slug": "hand-painted-dress-2",
    "nameEn": "Hand-painted dress (Vol. 2)",
    "nameRu": "Дизайнерское платье с художественной росписью — Вариант 2",
    "category": "clothing",
    "price": "1,350.00 ₪",
    "descriptionRu": "Индивидуальный пошив и ручная живопись по ткани. Каждое платье создается в единственном экземпляре, подчеркивая индивидуальность и изысканность.",
    "descriptionEn": "",
    "tags": [
      "Ручная роспись",
      "Дизайнерское платье",
      "Шелк / Лен",
      "Эксклюзив"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_719ecdff889449bf824c6d4c679bf17e.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_719ecdff889449bf824c6d4c679bf17e.jpg",
        "width": 1600,
        "height": 1062,
        "alt": "Дизайнерское платье с художественной росписью — Вариант 2"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_4fb78ff238a745f198b8477e5f91d33e.jpg",
        "width": 2000,
        "height": 1330,
        "alt": "Дизайнерское платье с художественной росписью — Вариант 2"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_ad2b01cb9d7c424e9d64b545e28c1fd1.jpg",
        "width": 922,
        "height": 1198,
        "alt": "Дизайнерское платье с художественной росписью — Вариант 2"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_678edc55af7544d2a0df1cf1ba28aeb0.jpg",
        "width": 1667,
        "height": 3000,
        "alt": "Дизайнерское платье с художественной росписью — Вариант 2"
      }
    ]
  },
  {
    "id": "b98d79df-8ade-80eb-cd2e-e13b21cc8b9f",
    "slug": "handpainted-linen-dress",
    "nameEn": "Handpainted linen dress",
    "nameRu": "Льняное платье А-силуэта с авторской ручной росписью",
    "category": "clothing",
    "price": "1,350.00 ₪",
    "descriptionRu": "100% натуральный умягченный лен высшего качества. Уникальная авторская роспись специальными стойкими красками по ткани. Свободный элегантный крой.",
    "descriptionEn": "",
    "tags": [
      "Натуральный лен",
      "Ручная роспись",
      "Платье",
      "Авторский дизайн"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_2c31e9d3e51d4aaabace3c5112690f52.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_2c31e9d3e51d4aaabace3c5112690f52.jpg",
        "width": 856,
        "height": 829,
        "alt": "Льняное платье А-силуэта с авторской ручной росписью"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_cd946af2160143368a2256c6b19943a1.jpg",
        "width": 968,
        "height": 932,
        "alt": "Льняное платье А-силуэта с авторской ручной росписью"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_5310f15d2b954a8ca9e08cd08bbe3362.jpg",
        "width": 2608,
        "height": 4288,
        "alt": "Льняное платье А-силуэта с авторской ручной росписью"
      }
    ]
  },
  {
    "id": "0c69bf43-b53e-9206-d47e-eda5513686f3",
    "slug": "hand-painted-dress-1",
    "nameEn": "Hand-painted dress (Vol. 3)",
    "nameRu": "Дизайнерское платье с художественной росписью — Вариант 3",
    "category": "clothing",
    "price": "1,650.00 ₪",
    "descriptionRu": "Индивидуальный пошив и ручная живопись по ткани. Каждое платье создается в единственном экземпляре, подчеркивая индивидуальность и изысканность.",
    "descriptionEn": "",
    "tags": [
      "Ручная роспись",
      "Дизайнерское платье",
      "Шелк / Лен",
      "Эксклюзив"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_171f0b41b12d419b97f971d8bef4c7c7.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_171f0b41b12d419b97f971d8bef4c7c7.jpg",
        "width": 968,
        "height": 1600,
        "alt": "Дизайнерское платье с художественной росписью — Вариант 3"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_0fe887e457ea49d1863c4453d316e8a3.jpg",
        "width": 1180,
        "height": 1772,
        "alt": "Дизайнерское платье с художественной росписью — Вариант 3"
      }
    ]
  },
  {
    "id": "1748f2e2-2f83-7f1c-531a-f424d6545342",
    "slug": "hand-painted-dresses",
    "nameEn": "Hand-painted dresses",
    "nameRu": "Дизайнерское платье с художественной росписью",
    "category": "clothing",
    "price": "1,350.00 ₪",
    "descriptionRu": "Индивидуальный пошив и ручная живопись по ткани. Каждое платье создается в единственном экземпляре, подчеркивая индивидуальность и изысканность.",
    "descriptionEn": "",
    "tags": [
      "Ручная роспись",
      "Дизайнерское платье",
      "Шелк / Лен",
      "Эксклюзив"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_6022e7eb30f04db1898d82435dc6396f.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_6022e7eb30f04db1898d82435dc6396f.jpg",
        "width": 2500,
        "height": 3063,
        "alt": "Дизайнерское платье с художественной росписью"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_c7e84f299fc14c5296c1d430427f88cd.jpg",
        "width": 2500,
        "height": 4185,
        "alt": "Дизайнерское платье с художественной росписью"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_6d229d9c4e164469bbbc9080b0227019.jpg",
        "width": 1142,
        "height": 1600,
        "alt": "Дизайнерское платье с художественной росписью"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_6173c9c65dc943ed91c7105bc05cba62.jpg",
        "width": 2500,
        "height": 1662,
        "alt": "Дизайнерское платье с художественной росписью"
      }
    ]
  },
  {
    "id": "965dbd7f-945b-97d7-28ac-a832d1abdfa7",
    "slug": "hand-painted-dress",
    "nameEn": "Hand-painted dress (Vol. 4)",
    "nameRu": "Дизайнерское платье с художественной росписью — Вариант 4",
    "category": "clothing",
    "price": "1,350.00 ₪",
    "descriptionRu": "Индивидуальный пошив и ручная живопись по ткани. Каждое платье создается в единственном экземпляре, подчеркивая индивидуальность и изысканность.",
    "descriptionEn": "",
    "tags": [
      "Ручная роспись",
      "Дизайнерское платье",
      "Шелк / Лен",
      "Эксклюзив"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_d527fb291df54c848153cceba5753eb2.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_d527fb291df54c848153cceba5753eb2.jpg",
        "width": 991,
        "height": 1772,
        "alt": "Дизайнерское платье с художественной росписью — Вариант 4"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_0b7ae010dd9c4004ad39962163dbd266.jpg",
        "width": 1196,
        "height": 1772,
        "alt": "Дизайнерское платье с художественной росписью — Вариант 4"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_3f5c33852d5b43bc9895a36182978246.jpg",
        "width": 1286,
        "height": 1772,
        "alt": "Дизайнерское платье с художественной росписью — Вариант 4"
      }
    ]
  },
  {
    "id": "95931ae3-987f-da3b-9574-9eaab5257c15",
    "slug": "hand-painted-t-shirt",
    "nameEn": "Hand-painted T-shirt (Vol. 2)",
    "nameRu": "Футболка с авторской росписью ручной работы — Вариант 2",
    "category": "clothing",
    "price": "280.00 ₪",
    "descriptionRu": "Премиальный 100% хлопок. Ручная роспись стойкими текстильными пигментами. Не смывается при стирке, сохраняет яркость.",
    "descriptionEn": "",
    "tags": [
      "Хлопок",
      "Ручная роспись",
      "Футболка",
      "Casual Chic"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_be2d39aff99d4bb083428c3ddfa76a58.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_be2d39aff99d4bb083428c3ddfa76a58.jpg",
        "width": 1608,
        "height": 1772,
        "alt": "Футболка с авторской росписью ручной работы — Вариант 2"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_e68bf3297cbb497db507c7d0a12e32d8.jpg",
        "width": 1177,
        "height": 1772,
        "alt": "Футболка с авторской росписью ручной работы — Вариант 2"
      }
    ]
  },
  {
    "id": "61f402f0-be6a-97f6-6219-6aa3ec6757b9",
    "slug": "dresses",
    "nameEn": "Dresses",
    "nameRu": "Dresses",
    "category": "clothing",
    "price": "800.00 ₪",
    "descriptionRu": "",
    "descriptionEn": "",
    "tags": [],
    "featured": false,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_8dd8741e16124caa98326a1850d987e5.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_8dd8741e16124caa98326a1850d987e5.jpg",
        "width": 1036,
        "height": 1772,
        "alt": "Dresses"
      }
    ]
  },
  {
    "id": "83f69819-859e-96ec-91aa-e7075ce0261a",
    "slug": "bags-1",
    "nameEn": "Felt clothing",
    "nameRu": "Авторская одежда из валяной шерсти (нуно-фелтинг)",
    "category": "clothing",
    "price": "2,300.00 ₪",
    "descriptionRu": "Теплая, дышащая, уникальная вещь ручного валяния из тончайшей шерсти австралийского мериноса и шелковых волокон.",
    "descriptionEn": "",
    "tags": [
      "Валяная шерсть",
      "Нуно-войлок",
      "Авторская одежда",
      "Премиум"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_028b0cbc8faf45989f009bc92c8e1c06.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_028b0cbc8faf45989f009bc92c8e1c06.jpg",
        "width": 1152,
        "height": 1600,
        "alt": "Авторская одежда из валяной шерсти (нуно-фелтинг)"
      },
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_512cecb85f124cd4a4f9c617dc53a0fa.jpg",
        "width": 1600,
        "height": 1062,
        "alt": "Авторская одежда из валяной шерсти (нуно-фелтинг)"
      }
    ]
  },
  {
    "id": "a484c02c-2d96-ef94-f0be-845fa65893a4",
    "slug": "bags",
    "nameEn": "Bags",
    "nameRu": "Авторская эко-сумка с принтом",
    "category": "clothing",
    "price": "50.00 ₪",
    "descriptionRu": "Прочная и стильная текстильная сумка для прогулок и покупок с оригинальным рисунком.",
    "descriptionEn": "",
    "tags": [
      "Сумки",
      "Аксессуары",
      "Эко"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_9d6ab1e474ab48eabcc2a064d12bc7a8.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_9d6ab1e474ab48eabcc2a064d12bc7a8.jpg",
        "width": 1310,
        "height": 1772,
        "alt": "Авторская эко-сумка с принтом"
      }
    ]
  },
  {
    "id": "a2540fa6-5f34-9ac9-f25e-c6a4e84d9920",
    "slug": "scarves",
    "nameEn": "Scarves",
    "nameRu": "Дизайнерский шарф / платок",
    "category": "clothing",
    "price": "50.00 ₪",
    "descriptionRu": "Легкий струящийся платок с авторским принтом для дополнения любого образа.",
    "descriptionEn": "",
    "tags": [
      "Шарфы",
      "Шелк",
      "Аксессуары"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/exclusive_clothing/8f183f_c930557813aa4016a6b460af6958bbd1.jpg",
    "images": [
      {
        "url": "/images/portfolio/exclusive_clothing/8f183f_c930557813aa4016a6b460af6958bbd1.jpg",
        "width": 1772,
        "height": 1173,
        "alt": "Дизайнерский шарф / платок"
      }
    ]
  },
  {
    "id": "ef3db65e-5235-02f2-869a-f2fb2ee1ed87",
    "slug": "tailoring-of-evening-dresses-3",
    "nameEn": "Tailoring of evening dresses",
    "nameRu": "Пошив вечернего платья премиум-класса",
    "category": "atelier",
    "price": "800.00 ₪",
    "descriptionRu": "Безупречная посадка по индивидуальным меркам, моделирование корсетов, работа с деликатными тканями (шелк, тафта, шифон, французское кружево).",
    "descriptionEn": "",
    "tags": [
      "Ателье",
      "Вечернее платье",
      "Индивидуальный пошив",
      "Выпускной"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/atelier/8f183f_7a9306154f4b4e77a28481bdc58d81c4.jpg",
    "images": [
      {
        "url": "/images/portfolio/atelier/8f183f_7a9306154f4b4e77a28481bdc58d81c4.jpg",
        "width": 2953,
        "height": 2362,
        "alt": "Пошив вечернего платья премиум-класса"
      }
    ]
  },
  {
    "id": "bfd61120-e161-bec7-4769-8b0a573a7a3f",
    "slug": "tailoring-of-evening-dresses-1",
    "nameEn": "Tailoring of evening dresses (Vol. 2)",
    "nameRu": "Пошив вечернего платья премиум-класса — Вариант 2",
    "category": "atelier",
    "price": "800.00 ₪",
    "descriptionRu": "Безупречная посадка по индивидуальным меркам, моделирование корсетов, работа с деликатными тканями (шелк, тафта, шифон, французское кружево).",
    "descriptionEn": "",
    "tags": [
      "Ателье",
      "Вечернее платье",
      "Индивидуальный пошив",
      "Выпускной"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/atelier/8f183f_2ca784aa44084651a79967a2bba60b8a.jpg",
    "images": [
      {
        "url": "/images/portfolio/atelier/8f183f_2ca784aa44084651a79967a2bba60b8a.jpg",
        "width": 1772,
        "height": 1235,
        "alt": "Пошив вечернего платья премиум-класса — Вариант 2"
      }
    ]
  },
  {
    "id": "7e952464-1dcb-593d-0e68-b93d4a2c19de",
    "slug": "tailoring-of-evening-dresses",
    "nameEn": "Tailoring of evening dresses (Vol. 3)",
    "nameRu": "Пошив вечернего платья премиум-класса — Вариант 3",
    "category": "atelier",
    "price": "800.00 ₪",
    "descriptionRu": "Безупречная посадка по индивидуальным меркам, моделирование корсетов, работа с деликатными тканями (шелк, тафта, шифон, французское кружево).",
    "descriptionEn": "",
    "tags": [
      "Ателье",
      "Вечернее платье",
      "Индивидуальный пошив",
      "Выпускной"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/atelier/8f183f_fb038d49d6254d49ac84362629af81f7.jpg",
    "images": [
      {
        "url": "/images/portfolio/atelier/8f183f_fb038d49d6254d49ac84362629af81f7.jpg",
        "width": 1181,
        "height": 1299,
        "alt": "Пошив вечернего платья премиум-класса — Вариант 3"
      },
      {
        "url": "/images/portfolio/atelier/8f183f_69efee7f26b2414eaa7d22ae5eef6cf3.jpg",
        "width": 1181,
        "height": 1678,
        "alt": "Пошив вечернего платья премиум-класса — Вариант 3"
      }
    ]
  },
  {
    "id": "2770cc11-c638-ded9-27ff-e1a4af60f92e",
    "slug": "tailoring-of-evening-dresses-2",
    "nameEn": "Tailoring of evening dresses (Vol. 4)",
    "nameRu": "Пошив вечернего платья премиум-класса — Вариант 4",
    "category": "atelier",
    "price": "800.00 ₪",
    "descriptionRu": "Безупречная посадка по индивидуальным меркам, моделирование корсетов, работа с деликатными тканями (шелк, тафта, шифон, французское кружево).",
    "descriptionEn": "",
    "tags": [
      "Ателье",
      "Вечернее платье",
      "Индивидуальный пошив",
      "Выпускной"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/atelier/8f183f_e5ca42fd8e624ff0964ea76ce8bfedcc.jpg",
    "images": [
      {
        "url": "/images/portfolio/atelier/8f183f_e5ca42fd8e624ff0964ea76ce8bfedcc.jpg",
        "width": 1772,
        "height": 1299,
        "alt": "Пошив вечернего платья премиум-класса — Вариант 4"
      }
    ]
  },
  {
    "id": "9fc40346-6b5d-3927-d7f1-fa7e0d4e6823",
    "slug": "tailoring-of-carnival-costumes",
    "nameEn": "Tailoring of carnival costumes",
    "nameRu": "Пошив карнавальных и сценических костюмов",
    "category": "atelier",
    "price": "200.00 ₪",
    "descriptionRu": "Создание ярких сценических образов, костюмов для Пурима, праздников, театральных постановок и фотосессий.",
    "descriptionEn": "",
    "tags": [
      "Ателье",
      "Костюмы",
      "Карнавал",
      "Сцена"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/atelier/8f183f_c79c7fe787974f859a4af4659825fe4b.jpg",
    "images": [
      {
        "url": "/images/portfolio/atelier/8f183f_c79c7fe787974f859a4af4659825fe4b.jpg",
        "width": 1890,
        "height": 1182,
        "alt": "Пошив карнавальных и сценических костюмов"
      }
    ]
  },
  {
    "id": "0b7519d5-cb9c-3b9e-fba7-75132fe344d5",
    "slug": "tailoring-of-children-s-clothing",
    "nameEn": "Tailoring of children's clothing",
    "nameRu": "Индивидуальный пошив детской нарядной одежды",
    "category": "atelier",
    "price": "300.00 ₪",
    "descriptionRu": "Платья для девочек, костюмчики для торжеств и фотосессий из гипоаллергенных натуральных тканей с мягкой подкладкой.",
    "descriptionEn": "",
    "tags": [
      "Ателье",
      "Детская одежда",
      "Праздник"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/atelier/8f183f_214cf4c6649b4474bef0c12d369a4c19.jpg",
    "images": [
      {
        "url": "/images/portfolio/atelier/8f183f_214cf4c6649b4474bef0c12d369a4c19.jpg",
        "width": 1506,
        "height": 1163,
        "alt": "Индивидуальный пошив детской нарядной одежды"
      },
      {
        "url": "/images/portfolio/atelier/8f183f_110653919b2f4055b86075bbc709fd65.jpg",
        "width": 1772,
        "height": 1156,
        "alt": "Индивидуальный пошив детской нарядной одежды"
      }
    ]
  },
  {
    "id": "3ccb9f8c-fc1d-ddc1-9128-a863a701730c",
    "slug": "tailoring-of-children-s-clothin",
    "nameEn": "Tailoring of children's clothin",
    "nameRu": "Индивидуальный пошив детской нарядной одежды",
    "category": "atelier",
    "price": "300.00 ₪",
    "descriptionRu": "Платья для девочек, костюмчики для торжеств и фотосессий из гипоаллергенных натуральных тканей с мягкой подкладкой.",
    "descriptionEn": "",
    "tags": [
      "Ателье",
      "Детская одежда",
      "Праздник"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/atelier/8f183f_447eb711fca24adb8935b34e3cbce435.jpg",
    "images": [
      {
        "url": "/images/portfolio/atelier/8f183f_447eb711fca24adb8935b34e3cbce435.jpg",
        "width": 1181,
        "height": 1890,
        "alt": "Индивидуальный пошив детской нарядной одежды"
      }
    ]
  },
  {
    "id": "575c457b-b8ba-4b87-5254-f5a6bbf92bb2",
    "slug": "tailoring-of-children-s-clothin-1",
    "nameEn": "Tailoring of children's clothin (Vol. 2)",
    "nameRu": "Индивидуальный пошив детской нарядной одежды — Вариант 2",
    "category": "atelier",
    "price": "300.00 ₪",
    "descriptionRu": "Платья для девочек, костюмчики для торжеств и фотосессий из гипоаллергенных натуральных тканей с мягкой подкладкой.",
    "descriptionEn": "",
    "tags": [
      "Ателье",
      "Детская одежда",
      "Праздник"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/atelier/8f183f_d2de953de21545eba90b2625f9b9221f.jpg",
    "images": [
      {
        "url": "/images/portfolio/atelier/8f183f_d2de953de21545eba90b2625f9b9221f.jpg",
        "width": 1772,
        "height": 1181,
        "alt": "Индивидуальный пошив детской нарядной одежды — Вариант 2"
      }
    ]
  },
  {
    "id": "6614e132-52b9-40de-f0d0-d21385f0af65",
    "slug": "tailoring-of-corporate-clothing",
    "nameEn": "Tailoring of corporate clothing",
    "nameRu": "Пошив корпоративной и форменной одежды",
    "category": "atelier",
    "price": "300.00 ₪",
    "descriptionRu": "Разработка и пошив стильной униформы, фартуков, жакетов для персонала бутиков, салонов красоты и ресторанов.",
    "descriptionEn": "",
    "tags": [
      "Ателье",
      "Корпоративная одежда",
      "Униформа"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/atelier/8f183f_967f764fb7ab4b07bfa6fbc2a2d19f67.jpg",
    "images": [
      {
        "url": "/images/portfolio/atelier/8f183f_967f764fb7ab4b07bfa6fbc2a2d19f67.jpg",
        "width": 1772,
        "height": 1181,
        "alt": "Пошив корпоративной и форменной одежды"
      }
    ]
  },
  {
    "id": "286c1e01-358d-98d7-851d-4a82b47b4359",
    "slug": "repair-and-fitting-of-clothing",
    "nameEn": "Repair and fitting of clothing",
    "nameRu": "Подгонка по фигуре, реставрация и ремонт одежды",
    "category": "atelier",
    "price": "85.00 ₪",
    "descriptionRu": "Укорачивание, ушивание, замена молний, сложная реставрация трикотажа, кожи, дубленок, брендовой одежды, а также обуви и сумок.",
    "descriptionEn": "",
    "tags": [
      "Ремонт одежды",
      "Подгонка",
      "Реставрация",
      "Кожа и текстиль"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/atelier/8f183f_642a3166de1749be9e9a9cb8e471642a.jpg",
    "images": [
      {
        "url": "/images/portfolio/atelier/8f183f_642a3166de1749be9e9a9cb8e471642a.jpg",
        "width": 1554,
        "height": 1772,
        "alt": "Подгонка по фигуре, реставрация и ремонт одежды"
      }
    ]
  },
  {
    "id": "7e7c75bb-db26-aeb7-58ec-ed7938743b2d",
    "slug": "repair-and-fitting-of-clothing-1",
    "nameEn": "Repair and fitting of clothing (Vol. 2)",
    "nameRu": "Подгонка по фигуре, реставрация и ремонт одежды — Вариант 2",
    "category": "atelier",
    "price": "49.00 ₪",
    "descriptionRu": "Укорачивание, ушивание, замена молний, сложная реставрация трикотажа, кожи, дубленок, брендовой одежды, а также обуви и сумок.",
    "descriptionEn": "",
    "tags": [
      "Ремонт одежды",
      "Подгонка",
      "Реставрация",
      "Кожа и текстиль"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/atelier/8f183f_eb9affc403124efea078d2f2f97213ff.jpg",
    "images": [
      {
        "url": "/images/portfolio/atelier/8f183f_eb9affc403124efea078d2f2f97213ff.jpg",
        "width": 899,
        "height": 1588,
        "alt": "Подгонка по фигуре, реставрация и ремонт одежды — Вариант 2"
      }
    ]
  },
  {
    "id": "ff093021-fa58-af0d-0a75-ac6f7492322c",
    "slug": "home-decor-1",
    "nameEn": "Home decor",
    "nameRu": "Текстильный декор для дома и интерьера",
    "category": "textiles",
    "price": "59.00 ₪",
    "descriptionRu": "Подушки, дорожки на стол, декоративные панно и текстиль, преображающий атмосферу вашего дома.",
    "descriptionEn": "",
    "tags": [
      "Домашний текстиль",
      "Декор",
      "Интерьер"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/paintings/8f183f_ec1fe805d7f8403f98b1da0022dc85c7.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_ec1fe805d7f8403f98b1da0022dc85c7.jpg",
        "width": 1042,
        "height": 1772,
        "alt": "Текстильный декор для дома и интерьера"
      },
      {
        "url": "/images/portfolio/paintings/8f183f_dadfefab37b840d1aa383fb838527b87.jpg",
        "width": 1772,
        "height": 1776,
        "alt": "Текстильный декор для дома и интерьера"
      }
    ]
  },
  {
    "id": "9bd132c4-9316-456b-3e71-cda718ef4946",
    "slug": "bed-linen-and-bedspreads",
    "nameEn": "Bed linen and Bedspreads",
    "nameRu": "Пошив авторского постельного белья и покрывал",
    "category": "textiles",
    "price": "39.00 ₪",
    "descriptionRu": "Индивидуальный пошив комплектов постельного белья из сатина, льна и вареного хлопка нестандартных размеров, а также декоративных стеганых покрывал.",
    "descriptionEn": "",
    "tags": [
      "Домашний текстиль",
      "Постельное белье",
      "Покрывала",
      "Уют"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/home_textiles/8f183f_4fd3d84259c14c37a92a9f7492200040.jpg",
    "images": [
      {
        "url": "/images/portfolio/home_textiles/8f183f_4fd3d84259c14c37a92a9f7492200040.jpg",
        "width": 1939,
        "height": 1772,
        "alt": "Пошив авторского постельного белья и покрывал"
      },
      {
        "url": "/images/portfolio/home_textiles/8f183f_eaf0f8a27ea34a19a3402185fef9e4e0.jpg",
        "width": 2657,
        "height": 1772,
        "alt": "Пошив авторского постельного белья и покрывал"
      }
    ]
  },
  {
    "id": "b8e8edeb-afd8-e044-2598-f50323a19896",
    "slug": "fabrics-1",
    "nameEn": "Fabrics",
    "nameRu": "Коллекционные ткани и подбор материалов",
    "category": "textiles",
    "price": "29.00 ₪",
    "descriptionRu": "Премиальные ткани из Италии и Франции: натуральный шелк, лен, кашемир, кружево. Консультация по расходу и свойствам тканей.",
    "descriptionEn": "",
    "tags": [
      "Ткани",
      "Шелк",
      "Лен",
      "Материалы"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/home_textiles/8f183f_1e31e527baa24398bfd063e3cd9a7a1c.jpg",
    "images": [
      {
        "url": "/images/portfolio/home_textiles/8f183f_1e31e527baa24398bfd063e3cd9a7a1c.jpg",
        "width": 2953,
        "height": 1969,
        "alt": "Коллекционные ткани и подбор материалов"
      }
    ]
  },
  {
    "id": "3aaf2c74-e1fd-54f0-5d4c-f606743e2a53",
    "slug": "fabrics",
    "nameEn": "*",
    "nameRu": "*",
    "category": "textiles",
    "price": "0.00 ₪",
    "descriptionRu": "",
    "descriptionEn": "",
    "tags": [],
    "featured": false,
    "coverImage": "/images/portfolio/home_textiles/8f183f_f5a223545d624bba884f2a081706003f.jpg",
    "images": [
      {
        "url": "/images/portfolio/home_textiles/8f183f_f5a223545d624bba884f2a081706003f.jpg",
        "width": 1772,
        "height": 1181,
        "alt": "*"
      }
    ]
  },
  {
    "id": "ffdd1fa6-c972-252b-2bb9-eac675f97d74",
    "slug": "home-decor",
    "nameEn": "Home decor (Vol. 2)",
    "nameRu": "Текстильный декор для дома и интерьера — Вариант 2",
    "category": "paintings",
    "price": "100.00 ₪",
    "descriptionRu": "Подушки, дорожки на стол, декоративные панно и текстиль, преображающий атмосферу вашего дома.",
    "descriptionEn": "",
    "tags": [
      "Домашний текстиль",
      "Декор",
      "Интерьер"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/paintings/8f183f_a71a39002409489586b23007cb6097ea.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_a71a39002409489586b23007cb6097ea.jpg",
        "width": 1050,
        "height": 1772,
        "alt": "Текстильный декор для дома и интерьера — Вариант 2"
      }
    ]
  },
  {
    "id": "73582c41-c4d1-0b79-10c0-3229ab9d68cc",
    "slug": "paintings-on-canvas1",
    "nameEn": "Paintings on canvas1",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония #1»",
    "category": "paintings",
    "price": "3,350.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_b12cc095cfe94426bf951e4d840364d1.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_b12cc095cfe94426bf951e4d840364d1.jpg",
        "width": 1246,
        "height": 1772,
        "alt": "Картина маслом на холсте «Интерьерная гармония #1»"
      }
    ]
  },
  {
    "id": "fba3b495-1286-a58b-f727-c0eae325f8e7",
    "slug": "paintings-on-canvas3",
    "nameEn": "Paintings on canvas3",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония #3»",
    "category": "paintings",
    "price": "3,350.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_aacdd15bfc4d46ba83ba23117e3edcec.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_aacdd15bfc4d46ba83ba23117e3edcec.jpg",
        "width": 1772,
        "height": 1775,
        "alt": "Картина маслом на холсте «Интерьерная гармония #3»"
      }
    ]
  },
  {
    "id": "ff093021-fa58-af0d-0a75-ac6f7492322c",
    "slug": "home-decor-1",
    "nameEn": "Home decor (Vol. 3)",
    "nameRu": "Текстильный декор для дома и интерьера — Вариант 3",
    "category": "paintings",
    "price": "59.00 ₪",
    "descriptionRu": "Подушки, дорожки на стол, декоративные панно и текстиль, преображающий атмосферу вашего дома.",
    "descriptionEn": "",
    "tags": [
      "Домашний текстиль",
      "Декор",
      "Интерьер"
    ],
    "featured": false,
    "coverImage": "/images/portfolio/paintings/8f183f_ec1fe805d7f8403f98b1da0022dc85c7.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_ec1fe805d7f8403f98b1da0022dc85c7.jpg",
        "width": 1042,
        "height": 1772,
        "alt": "Текстильный декор для дома и интерьера — Вариант 3"
      },
      {
        "url": "/images/portfolio/paintings/8f183f_dadfefab37b840d1aa383fb838527b87.jpg",
        "width": 1772,
        "height": 1776,
        "alt": "Текстильный декор для дома и интерьера — Вариант 3"
      }
    ]
  },
  {
    "id": "9dc42e8d-f3b1-376a-d609-118a6f3ae576",
    "slug": "paintings-on-canvas8",
    "nameEn": "Paintings on canvas8",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония #8»",
    "category": "paintings",
    "price": "3,200.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_8a58089222514dc49550fa4f50abf2f2.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_8a58089222514dc49550fa4f50abf2f2.jpg",
        "width": 1811,
        "height": 1772,
        "alt": "Картина маслом на холсте «Интерьерная гармония #8»"
      }
    ]
  },
  {
    "id": "4417f751-938d-e236-b4e4-e14741575bd3",
    "slug": "paintings-on-canvas9",
    "nameEn": "Paintings on canvas9",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония #9»",
    "category": "paintings",
    "price": "3,500.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_6cff8297815b4178b2e196d81aa98ee6.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_6cff8297815b4178b2e196d81aa98ee6.jpg",
        "width": 1236,
        "height": 1772,
        "alt": "Картина маслом на холсте «Интерьерная гармония #9»"
      }
    ]
  },
  {
    "id": "56a0b71c-0338-b671-10ab-206adca2dfa5",
    "slug": "paintings-on-canvas10",
    "nameEn": "Paintings on canvas10",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония #10»",
    "category": "paintings",
    "price": "3,200.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_a1b550d86f784660a2faa2a96e41f742.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_a1b550d86f784660a2faa2a96e41f742.jpg",
        "width": 1772,
        "height": 1766,
        "alt": "Картина маслом на холсте «Интерьерная гармония #10»"
      }
    ]
  },
  {
    "id": "985f845c-f550-0686-c567-507d2fe3f8fe",
    "slug": "paintings-on-canvas7",
    "nameEn": "Paintings on canvas7",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония #7»",
    "category": "paintings",
    "price": "3,000.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_74b1be17cbdc41c4927ea7f7a80f261c.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_74b1be17cbdc41c4927ea7f7a80f261c.jpg",
        "width": 1784,
        "height": 1772,
        "alt": "Картина маслом на холсте «Интерьерная гармония #7»"
      }
    ]
  },
  {
    "id": "cfdcff88-0372-09bb-22a2-b3be90084292",
    "slug": "paintings-on-canvas6",
    "nameEn": "Paintings on canvas6",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония #6»",
    "category": "paintings",
    "price": "3,200.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_bd6be058f3e7474d90a650a91df744b8.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_bd6be058f3e7474d90a650a91df744b8.jpg",
        "width": 1761,
        "height": 1772,
        "alt": "Картина маслом на холсте «Интерьерная гармония #6»"
      }
    ]
  },
  {
    "id": "8436f99c-62e3-c031-c6fc-5876a0b25aed",
    "slug": "paintings-on-canvas4",
    "nameEn": "Paintings on canvas4",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония #4»",
    "category": "paintings",
    "price": "3,300.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_bad1d0f213d84c168dc2d346ce00ef73.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_bad1d0f213d84c168dc2d346ce00ef73.jpg",
        "width": 1772,
        "height": 1758,
        "alt": "Картина маслом на холсте «Интерьерная гармония #4»"
      }
    ]
  },
  {
    "id": "f4f274cb-5a88-84cb-1840-4b80c7c9cdee",
    "slug": "paintings-on-canvas",
    "nameEn": "Paintings on canvas",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония»",
    "category": "paintings",
    "price": "3,500.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_4630df4599e14b69bf89cecee03ce3e8.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_4630df4599e14b69bf89cecee03ce3e8.jpg",
        "width": 2380,
        "height": 1785,
        "alt": "Картина маслом на холсте «Интерьерная гармония»"
      }
    ]
  },
  {
    "id": "c0844354-9894-0f8a-6a36-46fb6de35398",
    "slug": "paintings-on-canvas5",
    "nameEn": "Paintings on canvas5",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония #5»",
    "category": "paintings",
    "price": "3,350.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_86896e38276040c48a59c6d37c56e88f.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_86896e38276040c48a59c6d37c56e88f.jpg",
        "width": 1772,
        "height": 1769,
        "alt": "Картина маслом на холсте «Интерьерная гармония #5»"
      }
    ]
  },
  {
    "id": "da68874b-e050-6798-5106-9114e4e24d05",
    "slug": "paintings-on-canvas-2",
    "nameEn": "Paintings on canvas (Vol. 2)",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония» — Вариант 2",
    "category": "paintings",
    "price": "3,200.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_46f98db0a6a243e58407a829ef76579b.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_46f98db0a6a243e58407a829ef76579b.jpg",
        "width": 1772,
        "height": 1756,
        "alt": "Картина маслом на холсте «Интерьерная гармония» — Вариант 2"
      }
    ]
  },
  {
    "id": "24883f1f-0540-333c-947a-a68003762650",
    "slug": "paintings-on-canvas12",
    "nameEn": "Paintings on canvas12",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония #12»",
    "category": "paintings",
    "price": "3,500.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_662f5b3c19ae4ae6a403ace337e67219.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_662f5b3c19ae4ae6a403ace337e67219.jpg",
        "width": 1772,
        "height": 1761,
        "alt": "Картина маслом на холсте «Интерьерная гармония #12»"
      }
    ]
  },
  {
    "id": "06a4da97-38b5-17e9-0bb8-5fa4f3b1365d",
    "slug": "painting-on-canvas",
    "nameEn": "Painting  on canvas",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония»",
    "category": "paintings",
    "price": "45.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_96ac6aced56145dea22046b734b9fa1d.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_96ac6aced56145dea22046b734b9fa1d.jpg",
        "width": 1785,
        "height": 1772,
        "alt": "Картина маслом на холсте «Интерьерная гармония»"
      }
    ]
  },
  {
    "id": "4f0c530b-27a6-0bf9-9908-12b7e9fcec45",
    "slug": "paintings-on-canvas11",
    "nameEn": "Paintings on canvas11",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония #11»",
    "category": "paintings",
    "price": "3,500.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_8cf62f0e17614dd8971c44e04bad43ff.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_8cf62f0e17614dd8971c44e04bad43ff.jpg",
        "width": 2358,
        "height": 1772,
        "alt": "Картина маслом на холсте «Интерьерная гармония #11»"
      }
    ]
  },
  {
    "id": "5fec60bd-dd5d-ed94-bdc3-7a886aadda4f",
    "slug": "paintings-on-canvas-1",
    "nameEn": "Paintings on canvas (Vol. 3)",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония» — Вариант 3",
    "category": "paintings",
    "price": "3,500.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_571a720742714aff9ead197de0a90d77.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_571a720742714aff9ead197de0a90d77.jpg",
        "width": 1772,
        "height": 1772,
        "alt": "Картина маслом на холсте «Интерьерная гармония» — Вариант 3"
      }
    ]
  },
  {
    "id": "2ef78761-3cda-f46e-defd-69bd857a7cfe",
    "slug": "paintings-on-canvas13",
    "nameEn": "Paintings on canvas13",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония #13»",
    "category": "paintings",
    "price": "3,500.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_4ac89dfbfd404938b6d4dd9ecfce2ce6.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_4ac89dfbfd404938b6d4dd9ecfce2ce6.jpg",
        "width": 1772,
        "height": 1773,
        "alt": "Картина маслом на холсте «Интерьерная гармония #13»"
      }
    ]
  },
  {
    "id": "db1a0a6f-c0d4-0910-af28-98a4f152748c",
    "slug": "paintings-on-canvas16",
    "nameEn": "Paintings on canvas16",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония #16»",
    "category": "paintings",
    "price": "3,500.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_fb79493c99844555aa8860b0634efd17.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_fb79493c99844555aa8860b0634efd17.jpg",
        "width": 1772,
        "height": 1749,
        "alt": "Картина маслом на холсте «Интерьерная гармония #16»"
      }
    ]
  },
  {
    "id": "c7896667-d86f-54b8-f3b9-f3195c1c5333",
    "slug": "paintings-on-canvas15",
    "nameEn": "Paintings on canvas15",
    "nameRu": "Картина маслом на холсте «Интерьерная гармония #15»",
    "category": "paintings",
    "price": "3,500.00 ₪",
    "descriptionRu": "Оригинальная живопись на качественном холсте на подрамнике. Живые фактурные мазки, глубокие цвета. Идеально для современного интерьера.",
    "descriptionEn": "",
    "tags": [
      "Живопись",
      "Холст",
      "Масло / Акрил",
      "Интерьерная картина"
    ],
    "featured": true,
    "coverImage": "/images/portfolio/paintings/8f183f_ea34f3ee58a44d3da62e8c5b49e69118.jpg",
    "images": [
      {
        "url": "/images/portfolio/paintings/8f183f_ea34f3ee58a44d3da62e8c5b49e69118.jpg",
        "width": 1758,
        "height": 1772,
        "alt": "Картина маслом на холсте «Интерьерная гармония #15»"
      }
    ]
  }
];
