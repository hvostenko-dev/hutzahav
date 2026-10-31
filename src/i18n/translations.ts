export type Language = 'ru' | 'en' | 'he';

export interface TranslationDictionary {
  // Navigation & Top bar
  topAddress: string;
  topHours: string;
  topDelivery: string;
  topConcierge: string;
  navServices: string;
  navCalculator: string;
  navJourney: string;
  navCatalog: string;
  navCertificates: string;
  navAbout: string;
  navFaq: string;
  navContact: string;
  navBookFitting: string;
  navCart: string;
  navWishlist: string;
  navSizeGuide: string;

  // Hero
  heroPill: string;
  heroTitleLine1: string;
  heroTitleHighlight: string;
  heroTitleLine2: string;
  heroSubtitle: string;
  heroBookBtn: string;
  heroCalcBtn: string;
  heroExploreBtn: string;
  heroStat1Val: string;
  heroStat1Lbl: string;
  heroStat2Val: string;
  heroStat2Lbl: string;
  heroStat3Val: string;
  heroStat3Lbl: string;
  heroBadgeCollection: string;
  heroPhotoTitle: string;
  heroPhotoSubtitle: string;
  heroFloatingSeal: string;
  heroFloatingSilk: string;
  heroFloatingFit: string;

  // Marquee
  marqueeItems: string[];

  // Services
  servicesTitle: string;
  servicesSubtitle: string;
  servicesCategoryBadge: string;
  servicesBtn: string;

  // Calculator
  calcTitle: string;
  calcSubtitle: string;
  calcTotalLabel: string;
  calcTimelineLabel: string;
  calcBookBtn: string;

  // Journey
  journeyTitle: string;
  journeySubtitle: string;

  // Lookbook Catalog
  catalogTitle: string;
  catalogSubtitle: string;
  catalogSizeGuideBtn: string;
  catalogFabricGuideBtn: string;
  catalogSearchPlaceholder: string;
  catalogSortDefault: string;
  catalogSortPriceAsc: string;
  catalogSortPriceDesc: string;
  catalogSortName: string;
  catalogInStock: string;
  catalogAddToBag: string;
  catalogInspect: string;
  catalogEmpty: string;
  catalogResetFilters: string;

  // Categories
  catAll: string;
  catDresses: string;
  catJackets: string;
  catAccessories: string;
  catTailoring: string;
  catHomeTextiles: string;

  // Gift Certificates
  giftTitle: string;
  giftSubtitle: string;
  giftCertificateLabel: string;
  giftValueLabel: string;
  giftRecipientPlaceholder: string;
  giftSenderPlaceholder: string;
  giftMsgPlaceholder: string;
  giftOrderBtn: string;

  // Atmosphere & Master
  aboutTitle: string;
  aboutSubtitle: string;
  aboutMasterName: string;
  aboutMasterRole: string;

  // Testimonials
  testimonialsTitle: string;
  testimonialsSubtitle: string;

  // FAQ
  faqTitle: string;
  faqSubtitle: string;

  // Booking & Location
  bookingTitle: string;
  bookingSubtitle: string;
  bookingNamePlaceholder: string;
  bookingPhonePlaceholder: string;
  bookingServiceSelect: string;
  bookingNotesPlaceholder: string;
  bookingSubmitBtn: string;
  bookingLocationHeading: string;
  bookingAddress: string;
  bookingOpenGoogleMaps: string;
  bookingOpenWaze: string;
  bookingOpenEasy: string;

  // Cart & Wishlist
  cartTitle: string;
  cartEmptyTitle: string;
  cartEmptySubtitle: string;
  cartCheckoutWhatsApp: string;
  cartCheckoutTelegram: string;
  cartCheckoutEmail: string;
  wishlistTitle: string;
  wishlistEmpty: string;
  wishlistMoveAll: string;

  // Common
  currencySymbol: string;
  readMore: string;
  close: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  ru: {
    topAddress: 'г. Ашдод, ул. Шавей Цион 2 (Shavei Tzion 2)',
    topHours: 'Прием и примерка: Вс–Пт по записи',
    topDelivery: 'Индивидуальный пошив & доставка по всему Израилю',
    topConcierge: 'Консьерж: +972 58-587-7708',
    navServices: 'Услуги ателье',
    navCalculator: 'Калькулятор',
    navJourney: 'Процесс пошива',
    navCatalog: 'Коллекция',
    navCertificates: 'Сертификаты',
    navAbout: 'О мастере',
    navFaq: 'FAQ',
    navContact: 'Контакты & Карта',
    navBookFitting: 'Примерка в ателье',
    navCart: 'Корзина',
    navWishlist: 'Избранное',
    navSizeGuide: 'Таблица размеров',

    heroPill: 'HUTZAHAV • ATELIER HAUTE COUTURE • חוט זהב',
    heroTitleLine1: 'Искусство',
    heroTitleHighlight: 'кутюрного кроя',
    heroTitleLine2: '& авторская роспись шелка',
    heroSubtitle: 'Ателье дизайнера Галины Хвостенко. Индивидуальный пошив вечерних платьев с безупречной посадкой по 25 анатомическим меркам, наряды из 100% льна с ручной росписью, арт-деним в технике нуно-войлока и тончайшая реставрация в Ашдоде.',
    heroBookBtn: 'Записаться на примерку',
    heroCalcBtn: 'Рассчитать стоимость',
    heroExploreBtn: 'Коллекция',
    heroStat1Val: '15+',
    heroStat1Lbl: 'Лет мастерства',
    heroStat2Val: '25+',
    heroStat2Lbl: 'Анатомических мерок',
    heroStat3Val: '100%',
    heroStat3Lbl: 'Ручная работа',
    heroBadgeCollection: 'Коллекция Hutzahav',
    heroPhotoTitle: 'Неповторимый авторский стиль',
    heroPhotoSubtitle: 'Тонкая ручная работа, струящийся шелк и натуральный лен, созданные для вашей индивидуальности.',
    heroFloatingSeal: 'HUTZAHAV ATELIER • ASHDOD',
    heroFloatingSilk: '100% Натуральный шелк & шерсть мериноса',
    heroFloatingFit: '★ 5.0 • Идеальная посадка по фигуре',

    marqueeItems: [
      'АВТОРСКИЙ ПОШИВ ПО МЕРКАМ',
      'РУЧНАЯ РОСПИСЬ ПО ШЕЛКУ И ЛЬНУ',
      'ТЕХНИКА НУНО-ВОЙЛОКА',
      'ПРЕМИУМ РЕСТАВРАЦИЯ БРЕНДОВ',
      'АШДОД • ШАВЕЙ ЦИОН 2',
      'ДОСТАВКА ПО ВСЕМУ ИЗРАИЛЮ',
    ],

    servicesTitle: 'Услуги Авторского Ателье',
    servicesSubtitle: 'От вечерних нарядов ручной работы до идеальной подгонки и текстиля для дома.',
    servicesCategoryBadge: 'HAUTE COUTURE SERVICES',
    servicesBtn: 'Записаться на примерку',

    calcTitle: 'Онлайн-Калькулятор Пошива',
    calcSubtitle: 'Узнайте ориентировочную стоимость и сроки создания вашего будущего наряда за 1 минуту.',
    calcTotalLabel: 'Ориентировочная стоимость:',
    calcTimelineLabel: 'Срок создания:',
    calcBookBtn: 'Забронировать пошив в WhatsApp',

    journeyTitle: 'Кутюрный Путь: 4 Шага к Идеалу',
    journeySubtitle: 'Как создается эксклюзивное изделие в ателье Hutzahav — от эскиза до безупречного наряда.',

    catalogTitle: 'Каталог Авторских Работ',
    catalogSubtitle: 'Эксклюзивные платья, жакеты в технике нуно-войлока, вечерний пошив и домашний текстиль. Заказывайте примерку в ателье или онлайн с доставкой.',
    catalogSizeGuideBtn: 'Таблица размеров',
    catalogFabricGuideBtn: 'Гид по тканям & уходу',
    catalogSearchPlaceholder: 'Поиск: шелк, лен, платье...',
    catalogSortDefault: 'Сортировка: По умолчанию',
    catalogSortPriceAsc: 'Цена: Сначала доступнее',
    catalogSortPriceDesc: 'Цена: Сначала эксклюзив',
    catalogSortName: 'По названию',
    catalogInStock: 'В наличии / Пошив',
    catalogAddToBag: 'В заказ',
    catalogInspect: 'Рассмотреть детали',
    catalogEmpty: 'Ничего не найдено по данному запросу.',
    catalogResetFilters: 'Сбросить фильтры',

    catAll: 'Все изделия',
    catDresses: 'Платья & Наряды',
    catJackets: 'Арт-жакеты & Нуно-войлок',
    catAccessories: 'Шарфы & Аксессуары',
    catTailoring: 'Пошив & Ремонт',
    catHomeTextiles: 'Домашний текстиль',

    giftTitle: 'Подарочные Сертификаты Ателье',
    giftSubtitle: 'Подарите незабываемые эмоции создания идеального наряда у мастера Галины Хвостенко.',
    giftCertificateLabel: 'GIFT CERTIFICATE',
    giftValueLabel: 'Сертификат на сумму:',
    giftRecipientPlaceholder: 'Имя получателя (Например: Любимая мама)...',
    giftSenderPlaceholder: 'Ваше имя...',
    giftMsgPlaceholder: 'Теплые пожелания для открытки...',
    giftOrderBtn: 'Заказать сертификат в WhatsApp',

    aboutTitle: 'Атмосфера Ателье & О Мастере',
    aboutSubtitle: 'Знакомство с кутюрье Галиной Хвостенко и мастерской Hutzahav в Ашдоде.',
    aboutMasterName: 'Галина Хвостенко',
    aboutMasterRole: 'Дизайнер, художник по текстилю, основатель ателье',

    testimonialsTitle: 'Отзывы Наших Клиентов',
    testimonialsSubtitle: 'Истории людей, которые доверили нам свои самые важные наряды.',

    faqTitle: 'Всё о Заказе, Примерке & Доставке',
    faqSubtitle: 'Ответы на главные вопросы об онлайн-заказе и визите в ателье в Ашдоде.',

    bookingTitle: 'Запись на Примерку & Контакты',
    bookingSubtitle: 'Ждем вас в нашем уютном ателье в Ашдоде или готовы обсудить пошив онлайн.',
    bookingNamePlaceholder: 'Ваше имя',
    bookingPhonePlaceholder: 'Телефон / WhatsApp',
    bookingServiceSelect: 'Выберите услугу ателье...',
    bookingNotesPlaceholder: 'Опишите ваши пожелания, дату мероприятия или параметры...',
    bookingSubmitBtn: 'Отправить заявку в WhatsApp',
    bookingLocationHeading: 'Локация Ателье в Ашдоде',
    bookingAddress: 'г. Ашдод, ул. Шавей Цион 2 (Shavei Tzion 2, Ashdod)',
    bookingOpenGoogleMaps: 'Открыть в Google Maps',
    bookingOpenWaze: 'Маршрут в Waze',
    bookingOpenEasy: 'Страница на Easy.co.il',

    cartTitle: 'Корзина Заказа',
    cartEmptyTitle: 'Ваша корзина пуста',
    cartEmptySubtitle: 'Добавьте понравившиеся авторские платья, жакеты или текстиль из каталога ателье.',
    cartCheckoutWhatsApp: 'Оформить заказ в WhatsApp',
    cartCheckoutTelegram: 'Заказать в Telegram',
    cartCheckoutEmail: 'Отправить на Email',
    wishlistTitle: 'Список Желаний',
    wishlistEmpty: 'Ваш список желаний пуст',
    wishlistMoveAll: 'Добавить все в корзину заказа',

    currencySymbol: '₪',
    readMore: 'Подробнее',
    close: 'Закрыть',
  },

  en: {
    topAddress: 'Shavei Tzion 2, Ashdod, Israel',
    topHours: 'Fittings & Consultations: Sun–Fri by appointment',
    topDelivery: 'Bespoke Couture & Delivery across all Israel',
    topConcierge: 'Concierge: +972 58-587-7708',
    navServices: 'Services',
    navCalculator: 'Calculator',
    navJourney: 'Couture Journey',
    navCatalog: 'Collection',
    navCertificates: 'Gift Cards',
    navAbout: 'About Master',
    navFaq: 'FAQ',
    navContact: 'Contact & Map',
    navBookFitting: 'Book a Fitting',
    navCart: 'Order Bag',
    navWishlist: 'Wishlist',
    navSizeGuide: 'Size Guide',

    heroPill: 'HUTZAHAV • ATELIER HAUTE COUTURE • חוט זהב',
    heroTitleLine1: 'The Fine Art of',
    heroTitleHighlight: 'Haute Couture Tailoring',
    heroTitleLine2: '& Hand-Painted Silks',
    heroSubtitle: 'Boutique Atelier by designer Galina Khvostenko. Bespoke evening & bridal gowns custom-fitted across 25 anatomical measurements, pure linen painted garments, nuno-felting art denim, and delicate luxury alterations in Ashdod.',
    heroBookBtn: 'Book Studio Fitting',
    heroCalcBtn: 'Cost Calculator',
    heroExploreBtn: 'View Collection',
    heroStat1Val: '15+',
    heroStat1Lbl: 'Years of Craft',
    heroStat2Val: '25+',
    heroStat2Lbl: 'Anatomical Points',
    heroStat3Val: '100%',
    heroStat3Lbl: 'Handcrafted',
    heroBadgeCollection: 'Hutzahav Signature',
    heroPhotoTitle: 'Distinctive Signature Style',
    heroPhotoSubtitle: 'Meticulous artisanal craftsmanship, flowing silk and natural linen tailored to your true individuality.',
    heroFloatingSeal: 'HUTZAHAV ATELIER • ASHDOD',
    heroFloatingSilk: '100% Pure Silk & Australian Merino Wool',
    heroFloatingFit: '★ 5.0 • Flawless Bespoke Fit Guaranteed',

    marqueeItems: [
      'BESPOKE HAUTE COUTURE TAILORING',
      'HAND-PAINTED SILK & PURE LINEN',
      'AUSTRALIAN MERINO NUNO-FELTING',
      'PREMIUM DESIGNER ALTERATIONS',
      'SHAVEI TZION 2 • ASHDOD',
      'NATIONWIDE ISRAEL DELIVERY',
    ],

    servicesTitle: 'Haute Couture Services',
    servicesSubtitle: 'From handcrafted gala gowns to bespoke home textiles and designer restorations.',
    servicesCategoryBadge: 'HAUTE COUTURE SERVICES',
    servicesBtn: 'Book a Consultation',

    calcTitle: 'Bespoke Price Calculator',
    calcSubtitle: 'Estimate the cost and production timeline for your custom dream garment in seconds.',
    calcTotalLabel: 'Estimated Price:',
    calcTimelineLabel: 'Turnaround Time:',
    calcBookBtn: 'Reserve Creation on WhatsApp',

    journeyTitle: 'The Couture Journey: 4 Steps',
    journeySubtitle: 'How each bespoke masterpiece is crafted at Hutzahav Atelier — from sketch to flawless wear.',

    catalogTitle: 'Bespoke Lookbook & Boutique',
    catalogSubtitle: 'Exclusive gowns, nuno-felting art coats, accessories, and interior textiles. Direct order via WhatsApp or in-studio fitting in Ashdod.',
    catalogSizeGuideBtn: 'Size Guide',
    catalogFabricGuideBtn: 'Fabric & Care Guide',
    catalogSearchPlaceholder: 'Search: silk, linen, gown...',
    catalogSortDefault: 'Sort: Featured',
    catalogSortPriceAsc: 'Price: Low to High',
    catalogSortPriceDesc: 'Price: High to Low',
    catalogSortName: 'Alphabetical',
    catalogInStock: 'In Atelier / Made to Order',
    catalogAddToBag: 'Add to Bag',
    catalogInspect: 'View Details',
    catalogEmpty: 'No items match your filter selection.',
    catalogResetFilters: 'Reset Filters',

    catAll: 'All Creations',
    catDresses: 'Dresses & Gowns',
    catJackets: 'Art Jackets & Felting',
    catAccessories: 'Scarves & Accessories',
    catTailoring: 'Bespoke & Alterations',
    catHomeTextiles: 'Home Textiles',

    giftTitle: 'Atelier Gift Certificates',
    giftSubtitle: 'Give the gift of bespoke luxury fashion tailored personally by Galina Khvostenko.',
    giftCertificateLabel: 'GIFT CERTIFICATE',
    giftValueLabel: 'Certificate Amount:',
    giftRecipientPlaceholder: 'Recipient Name (e.g. Beloved Mother)...',
    giftSenderPlaceholder: 'Your Name...',
    giftMsgPlaceholder: 'Personal heartfelt greeting card message...',
    giftOrderBtn: 'Order Gift Card on WhatsApp',

    aboutTitle: 'Atelier Atmosphere & About Master',
    aboutSubtitle: 'Meet couturier Galina Khvostenko and discover the creative studio in Ashdod.',
    aboutMasterName: 'Galina Khvostenko',
    aboutMasterRole: 'Fashion Designer, Textile Artist, Atelier Founder',

    testimonialsTitle: 'Client Stories & Reviews',
    testimonialsSubtitle: 'Words from patrons who entrusted us with their most cherished occasions.',

    faqTitle: 'Ordering, Fitting & Delivery FAQ',
    faqSubtitle: 'Everything you need to know about remote orders and studio visits in Ashdod.',

    bookingTitle: 'Book a Fitting & Contact',
    bookingSubtitle: 'Visit our warm atelier in Ashdod or schedule a remote video consultation.',
    bookingNamePlaceholder: 'Your Name',
    bookingPhonePlaceholder: 'Phone / WhatsApp',
    bookingServiceSelect: 'Select Atelier Service...',
    bookingNotesPlaceholder: 'Describe your vision, event date, or measurements...',
    bookingSubmitBtn: 'Send Request via WhatsApp',
    bookingLocationHeading: 'Atelier Location in Ashdod',
    bookingAddress: 'Shavei Tzion 2, Ashdod, Israel',
    bookingOpenGoogleMaps: 'Open in Google Maps',
    bookingOpenWaze: 'Navigate with Waze',
    bookingOpenEasy: 'View on Easy.co.il',

    cartTitle: 'Your Order Bag',
    cartEmptyTitle: 'Your order bag is empty',
    cartEmptySubtitle: 'Explore our lookbook and save your favorite bespoke gowns and nuno-felting art pieces.',
    cartCheckoutWhatsApp: 'Inquire on WhatsApp',
    cartCheckoutTelegram: 'Inquire on Telegram',
    cartCheckoutEmail: 'Inquire via Email',
    wishlistTitle: 'Saved Wishlist',
    wishlistEmpty: 'Your wishlist is empty',
    wishlistMoveAll: 'Move All to Order Bag',

    currencySymbol: '₪',
    readMore: 'Learn More',
    close: 'Close',
  },

  he: {
    topAddress: 'שבי ציון 2, אשדוד (Shavei Tzion 2)',
    topHours: 'מדידות וקבלת קהל: א׳–ו׳ בתיאום מראש',
    topDelivery: 'תפירה עילית אישית ומשלוחים לכל רחבי ישראל',
    topConcierge: 'קונסיירז׳: 058-587-7708',
    navServices: 'שירותי האטלייה',
    navCalculator: 'מחשבון עלויות',
    navJourney: 'תהליך התפירה',
    navCatalog: 'קולקציה',
    navCertificates: 'שובר מתנה',
    navAbout: 'על המעצבת',
    navFaq: 'שאלות ותשובות',
    navContact: 'יצירת קשר ומפה',
    navBookFitting: 'תיאום מדידה באטלייה',
    navCart: 'תיק הזמנה',
    navWishlist: 'מועדפים',
    navSizeGuide: 'מדריך מידות',

    heroPill: 'HUTZAHAV • ATELIER HAUTE COUTURE • חוט זהב',
    heroTitleLine1: 'אומנות',
    heroTitleHighlight: 'התפירה העילית',
    heroTitleLine2: 'וציור מקורי על משי טבעי',
    heroSubtitle: 'אטלייה הבוטיק של המעצבת גלינה חבוסטנקו באשדוד. תפירה עילית של שמלות ערב וכלה בהתאמה אנטומית לפי 25 מידות גוף, בגדי פשתן טהור בציור ידני, ז׳קטים בלעדיים בטכניקת נונו-לבד (Nuno-felting) ותיקוני יוקרה מדויקים.',
    heroBookBtn: 'קביעת תור למדידה',
    heroCalcBtn: 'חישוב עלות תפירה',
    heroExploreBtn: 'לצפייה בקולקציה',
    heroStat1Val: '15+',
    heroStat1Lbl: 'שנות מומחיות',
    heroStat2Val: '25+',
    heroStat2Lbl: 'מידות גוף מדויקות',
    heroStat3Val: '100%',
    heroStat3Lbl: 'עבודת יד מוקפדת',
    heroBadgeCollection: 'קולקציית חוט זהב',
    heroPhotoTitle: 'סגנון בלעדי שאין לאף אחת אחרת',
    heroPhotoSubtitle: 'עבודת יד מוקפדת, משי זורם ופשתן טבעי המדגישים את הנשיות והיופי האישי שלך.',
    heroFloatingSeal: 'HUTZAHAV ATELIER • אשדוד',
    heroFloatingSilk: '100% משי טבעי וצמר מרינו אוסטרלי',
    heroFloatingFit: '★ 5.0 • התאמה מושלמת למבנה הגוף',

    marqueeItems: [
      'תפירה עילית אישית בהזמנה מראש',
      'ציור ידני אמנותי על משי ופשתן טהור',
      'טכניקת נונו-לבד (NUNO-FELTING) ייחודית',
      'תיקוני יוקרה וחידוש בגדי מותגים',
      'רחוב שבי ציון 2 • אשדוד',
      'משלוחים מהירים לכל חלקי הארץ',
    ],

    servicesTitle: 'שירותי אטלייה חוט זהב',
    servicesSubtitle: 'משמלות ערב וכלה ייחודיות ועד לתיקוני מותגים מורכבים וטקסטיל יוקרתי לבית.',
    servicesCategoryBadge: 'HAUTE COUTURE SERVICES',
    servicesBtn: 'תיאום פגישה באטלייה',

    calcTitle: 'מחשבון עלויות תפירה אישית',
    calcSubtitle: 'קבלו הערכת מחיר ולוח זמנים משוער לעיצוב הפריט הבא שלכם תוך פחות מדקה.',
    calcTotalLabel: 'עלות משוערת:',
    calcTimelineLabel: 'זמן ביצוע:',
    calcBookBtn: 'שריון תור בווטסאפ',

    journeyTitle: 'מסע התפירה: 4 שלבים לשלמות',
    journeySubtitle: 'כיצד נוצר בגד הוט קוטור באטלייה חוט זהב — מהסקיצה הראשונה ועד למדידה הסופית.',

    catalogTitle: 'קטלוג יצירות וגלריית אטלייה',
    catalogSubtitle: 'שמלות ערב מרהיבות, ז׳קטים מיוחדים בצמר ומשי, צעיפים וטקסטיל לבית. הזמנה ישירה ללא תשלום באתר או תיאום מדידה באשדוד.',
    catalogSizeGuideBtn: 'מדריך מידות ומדידה',
    catalogFabricGuideBtn: 'מדריך בדים וטיפול',
    catalogSearchPlaceholder: 'חיפוש: משי, פשתן, שמלה...',
    catalogSortDefault: 'מיון: מומלצים',
    catalogSortPriceAsc: 'מחיר: מהנמוך לגבוה',
    catalogSortPriceDesc: 'מחיר: מהגבוה לנמוך',
    catalogSortName: 'לפי אלפבית',
    catalogInStock: 'קיים באטלייה / תפירה לפי מידה',
    catalogAddToBag: 'הוספה להזמנה',
    catalogInspect: 'צפייה בפרטים',
    catalogEmpty: 'לא נמצאו פריטים תואמים לחיפוש שלך.',
    catalogResetFilters: 'איפוס סינונים',

    catAll: 'כל היצירות',
    catDresses: 'שמלות ובגדי ערב',
    catJackets: 'ז׳קטים וצמר מלובד',
    catAccessories: 'צעיפים ואביזרים',
    catTailoring: 'תפירה ותיקוני יוקרה',
    catHomeTextiles: 'טקסטיל וילונות לבית',

    giftTitle: 'שוברי מתנה יוקרתיים',
    giftSubtitle: 'העניקו חוויה בלתי נשכחת של תפירה אישית ובגדי מעצבים אצל גלינה חבוסטנקו.',
    giftCertificateLabel: 'GIFT CERTIFICATE',
    giftValueLabel: 'סכום השובר:',
    giftRecipientPlaceholder: 'שם מקבלת המתנה (לדוגמה: לאמא האהובה)...',
    giftSenderPlaceholder: 'השם שלך...',
    giftMsgPlaceholder: 'ברכה אישית וחמה להדפסה על כרטיס המתנה...',
    giftOrderBtn: 'הזמנת שובר בווטסאפ',

    aboutTitle: 'האווירה באטלייה & על המעצבת',
    aboutSubtitle: 'הכירו את המעצבת גלינה חבוסטנקו ואת הסטודיו הייחודי בשבי ציון 2, אשדוד.',
    aboutMasterName: 'גלינה חבוסטנקו',
    aboutMasterRole: 'מעצבת אופנה, אמנית טקסטיל ומייסדת האטלייה',

    testimonialsTitle: 'הלקוחות שלנו מספרות',
    testimonialsSubtitle: 'חוויות מנשים שבחרו בנו לאירועים המרגשים והחשובים ביותר בחייהן.',

    faqTitle: 'שאלות נפוצות על הזמנות, מדידות ומשלוחים',
    faqSubtitle: 'כל התשובות להזמנה מרחוק, הגעה לאטלייה באשדוד ומשלוחים לכל הארץ.',

    bookingTitle: 'תיאום מדידה ויצירת קשר',
    bookingSubtitle: 'נשמח לארח אתכן באטלייה הנעים שלנו באשדוד או לשוחח בשיחת וידאו בווטסאפ.',
    bookingNamePlaceholder: 'שם מלא',
    bookingPhonePlaceholder: 'טלפון / ווטסאפ',
    bookingServiceSelect: 'בחירת שירות מבוקש...',
    bookingNotesPlaceholder: 'פרטים על הבגד, תאריך האירוע או מידות הגוף...',
    bookingSubmitBtn: 'שליחת בקשה בווטסאפ',
    bookingLocationHeading: 'מיקום האטלייה באשדוד',
    bookingAddress: 'רחוב שבי ציון 2, אשדוד (Shavei Tzion 2, Ashdod)',
    bookingOpenGoogleMaps: 'פתיחה ב-Google Maps',
    bookingOpenWaze: 'ניווט באמצעות Waze',
    bookingOpenEasy: 'עמוד העסק ב-Easy.co.il',

    cartTitle: 'תיק ההזמנה שלך',
    cartEmptyTitle: 'תיק ההזמנה ריק',
    cartEmptySubtitle: 'מוזמנת לבחור שמלות, ז׳קטים או טקסטיל מתוך הקטלוג.',
    cartCheckoutWhatsApp: 'שליחת הזמנה בווטסאפ',
    cartCheckoutTelegram: 'פנייה בטלגרם',
    cartCheckoutEmail: 'שליחת מייל',
    wishlistTitle: 'רשימת מועדפים',
    wishlistEmpty: 'רשימת המועדפים שלך ריקה כרגע',
    wishlistMoveAll: 'העברת הכל לתיק ההזמנה',

    currencySymbol: '₪',
    readMore: 'למידע נוסף',
    close: 'סגירה',
  },
};
