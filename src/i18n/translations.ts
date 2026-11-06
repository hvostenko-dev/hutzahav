export type Language = 'ru' | 'en' | 'he';

export interface TranslationDictionary {
  // Navigation & Top bar
  topAddress: string;
  topHours: string;
  topDelivery: string;
  topConcierge: string;
  navServices: string;
  navCatalog: string;
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

  // Marquee
  marqueeItems: string[];

  // Services
  servicesTitle: string;
  servicesSubtitle: string;
  servicesCategoryBadge: string;
  servicesBtn: string;

  // Lookbook Catalog
  catalogTitle: string;
  catalogSubtitle: string;
  catalogSizeGuideBtn: string;
  catalogFabricGuideBtn: string;
  catalogSearchPlaceholder: string;
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
    topAddress: 'г. Ашдод, ул. Шавей Цион 2',
    topHours: 'Прием и примерка: Вс–Пт по записи',
    topDelivery: 'Индивидуальный пошив & доставка по всему Израилю',
    topConcierge: '+972 58-587-7708',
    navServices: 'Услуги',
    navCatalog: 'Коллекция',
    navAbout: 'О мастере',
    navFaq: 'Вопросы',
    navContact: 'Контакты',
    navBookFitting: 'Записаться',
    navCart: 'Корзина',
    navWishlist: 'Избранное',
    navSizeGuide: 'Таблица размеров',

    heroPill: 'HUTZAHAV • ATELIER HAUTE COUTURE • חוט זהב',
    heroTitleLine1: 'Искусство',
    heroTitleHighlight: 'кутюрного кроя',
    heroTitleLine2: '& авторская роспись ткани',
    heroSubtitle:
      'Авторское ателье дизайнера Галины Хвостенко в Ашдоде. Индивидуальный пошив вечерних и праздничных платьев, наряды из 100% льна и шелка с ручной росписью, арт-жакеты в технике нуно-войлока и деликатная подгонка по фигуре.',
    heroBookBtn: 'Записаться на примерку',
    heroExploreBtn: 'Смотреть коллекцию',
    heroStat1Val: '15+',
    heroStat1Lbl: 'Лет мастерства',
    heroStat2Val: '100%',
    heroStat2Lbl: 'Ручная работа',
    heroStat3Val: '1-of-1',
    heroStat3Lbl: 'Эксклюзивный крой',
    heroBadgeCollection: 'Hutzahav Couture',
    heroPhotoTitle: 'Неповторимый авторский стиль',
    heroPhotoSubtitle:
      'Тонкая ручная работа, струящийся шелк и натуральный лен, созданные для вашей индивидуальности.',

    marqueeItems: [
      'ИНДИВИДУАЛЬНЫЙ ПОШИВ ПО МЕРКАМ',
      'РУЧНАЯ РОСПИСЬ ПО ШЕЛКУ И ЛЬНУ',
      'АРТ-ЖАКЕТЫ & НУНО-ВОЙЛОК',
      'ПРЕМИУМ ПОДГОНКА И РЕСТАВРАЦИЯ',
      'АШДОД • ШАВЕЙ ЦИОН 2',
      'ДОСТАВКА ПО ВСЕМУ ИЗРАИЛЮ',
    ],

    servicesTitle: 'Направления Ателье',
    servicesSubtitle:
      'Каждое изделие создается вручную с безупречным вниманием к посадке, ткани и деталям.',
    servicesCategoryBadge: 'ATELIER HAUTE COUTURE',
    servicesBtn: 'Обсудить с мастером',

    catalogTitle: 'Коллекция & Изделия',
    catalogSubtitle:
      'Авторские платья с ручной росписью, жакеты в технике нуно-фелтинг, аксессуары и вечерний кутюр. Примерка в Ашдоде или доставка.',
    catalogSizeGuideBtn: 'Таблица размеров',
    catalogFabricGuideBtn: 'О тканях и уходе',
    catalogSearchPlaceholder: 'Поиск по коллекции...',
    catalogInStock: 'В ателье / На заказ',
    catalogAddToBag: 'В заказ',
    catalogInspect: 'Подробнее',
    catalogEmpty: 'По вашему запросу ничего не найдено.',
    catalogResetFilters: 'Показать все работы',

    catAll: 'Все работы',
    catDresses: 'Платья & Роспись',
    catJackets: 'Жакеты & Войлок',
    catAccessories: 'Аксессуары',
    catTailoring: 'Ателье & Пошив',

    aboutTitle: 'О Мастере & Ателье',
    aboutSubtitle: 'Знакомство с дизайнером Галиной Хвостенко и мастерской Hutzahav в Ашдоде.',
    aboutMasterName: 'Галина Хвостенко',
    aboutMasterRole: 'Дизайнер одежды, художник по ткани, основатель ателье',

    testimonialsTitle: 'Отзывы Клиентов',
    testimonialsSubtitle: 'Теплые слова тех, кто доверил нам создание и посадку своих любимых вещей.',

    faqTitle: 'Частые Вопросы',
    faqSubtitle: 'Всё о примерке в Ашдоде, индивидуальном пошиве и заказе с доставкой.',

    bookingTitle: 'Запись в Ателье & Контакты',
    bookingSubtitle: 'Приглашаем вас на примерку в нашу уютную студию в Ашдоде или на онлайн-консультацию.',
    bookingNamePlaceholder: 'Ваше имя',
    bookingPhonePlaceholder: 'Телефон / WhatsApp',
    bookingServiceSelect: 'Выберите направление...',
    bookingNotesPlaceholder: 'Опишите ваши пожелания к наряду или удобное время визита...',
    bookingSubmitBtn: 'Отправить в WhatsApp',
    bookingLocationHeading: 'Ателье в Ашдоде',
    bookingAddress: 'г. Ашдод, ул. Шавей Цион 2 (Shavei Tzion 2)',
    bookingOpenGoogleMaps: 'Google Maps',
    bookingOpenWaze: 'Waze',
    bookingOpenEasy: 'Easy.co.il',

    cartTitle: 'Ваш Заказ',
    cartEmptyTitle: 'Список заказа пуст',
    cartEmptySubtitle: 'Выберите понравившиеся платья, жакеты или палантины из коллекции ателье.',
    cartCheckoutWhatsApp: 'Оформить в WhatsApp',
    cartCheckoutTelegram: 'Telegram',
    cartCheckoutEmail: 'Email',
    wishlistTitle: 'Избранное',
    wishlistEmpty: 'В избранном пока пусто',
    wishlistMoveAll: 'Добавить всё в заказ',

    currencySymbol: '₪',
    readMore: 'Подробнее',
    close: 'Закрыть',
  },

  en: {
    topAddress: 'Shavei Tzion 2, Ashdod, Israel',
    topHours: 'Fittings: Sun–Fri by appointment',
    topDelivery: 'Bespoke Tailoring & Delivery across Israel',
    topConcierge: '+972 58-587-7708',
    navServices: 'Services',
    navCatalog: 'Collection',
    navAbout: 'About Master',
    navFaq: 'FAQ',
    navContact: 'Contact',
    navBookFitting: 'Book Fitting',
    navCart: 'Order Bag',
    navWishlist: 'Saved',
    navSizeGuide: 'Size Guide',

    heroPill: 'HUTZAHAV • ATELIER HAUTE COUTURE • חוט זהב',
    heroTitleLine1: 'The Fine Art of',
    heroTitleHighlight: 'Couture Tailoring',
    heroTitleLine2: '& Hand-Painted Silk',
    heroSubtitle:
      'Boutique Atelier by designer Galina Khvostenko in Ashdod. Bespoke evening & bridal gowns tailored to your exact silhouette, 100% pure linen dresses with hand-painted artwork, nuno-felting art jackets, and delicate luxury alterations.',
    heroBookBtn: 'Book Studio Fitting',
    heroExploreBtn: 'Explore Collection',
    heroStat1Val: '15+',
    heroStat1Lbl: 'Years of Craft',
    heroStat2Val: '100%',
    heroStat2Lbl: 'Handcrafted',
    heroStat3Val: '1-of-1',
    heroStat3Lbl: 'Bespoke Design',
    heroBadgeCollection: 'Hutzahav Couture',
    heroPhotoTitle: 'Distinctive Signature Style',
    heroPhotoSubtitle:
      'Meticulous artisanal craftsmanship, flowing silk, and natural linen tailored to your true individuality.',

    marqueeItems: [
      'BESPOKE HAUTE COUTURE TAILORING',
      'HAND-PAINTED SILK & PURE LINEN',
      'MERINO NUNO-FELTING ART JACKETS',
      'LUXURY GARMENT ALTERATIONS',
      'SHAVEI TZION 2 • ASHDOD',
      'NATIONWIDE ISRAEL DELIVERY',
    ],

    servicesTitle: 'Atelier Directions',
    servicesSubtitle:
      'Every creation is handcrafted with uncompromising attention to silhouette, fabric, and detail.',
    servicesCategoryBadge: 'ATELIER HAUTE COUTURE',
    servicesBtn: 'Inquire with Master',

    catalogTitle: 'Couture Lookbook',
    catalogSubtitle:
      'Hand-painted linen and silk dresses, nuno-felting art jackets, stoles, and bespoke tailoring. Studio fitting in Ashdod or nationwide delivery.',
    catalogSizeGuideBtn: 'Size Guide',
    catalogFabricGuideBtn: 'Fabrics & Care',
    catalogSearchPlaceholder: 'Search collection...',
    catalogInStock: 'In Atelier / Bespoke',
    catalogAddToBag: 'Add to Order',
    catalogInspect: 'Details',
    catalogEmpty: 'No pieces match your search.',
    catalogResetFilters: 'Show All Pieces',

    catAll: 'All Pieces',
    catDresses: 'Dresses & Art',
    catJackets: 'Jackets & Felting',
    catAccessories: 'Accessories',
    catTailoring: 'Bespoke & Alterations',

    aboutTitle: 'About the Master & Atelier',
    aboutSubtitle: 'Meet couturier Galina Khvostenko and discover the creative studio in Ashdod.',
    aboutMasterName: 'Galina Khvostenko',
    aboutMasterRole: 'Couture Designer, Textile Artist & Atelier Founder',

    testimonialsTitle: 'Client Stories',
    testimonialsSubtitle: 'Kind words from patrons who entrusted us with their most cherished garments.',

    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Everything you need to know about studio fittings in Ashdod and bespoke orders.',

    bookingTitle: 'Book a Fitting & Contact',
    bookingSubtitle: 'Visit our warm atelier in Ashdod or schedule a personal consultation.',
    bookingNamePlaceholder: 'Your Name',
    bookingPhonePlaceholder: 'Phone / WhatsApp',
    bookingServiceSelect: 'Select Atelier Service...',
    bookingNotesPlaceholder: 'Share your vision, preferred fitting time, or questions...',
    bookingSubmitBtn: 'Send via WhatsApp',
    bookingLocationHeading: 'Ashdod Atelier',
    bookingAddress: 'Shavei Tzion 2, Ashdod, Israel',
    bookingOpenGoogleMaps: 'Google Maps',
    bookingOpenWaze: 'Waze',
    bookingOpenEasy: 'Easy.co.il',

    cartTitle: 'Your Order Bag',
    cartEmptyTitle: 'Your order bag is empty',
    cartEmptySubtitle: 'Explore our lookbook and select your favorite dresses, jackets, or stoles.',
    cartCheckoutWhatsApp: 'Send Order on WhatsApp',
    cartCheckoutTelegram: 'Telegram',
    cartCheckoutEmail: 'Email',
    wishlistTitle: 'Saved Pieces',
    wishlistEmpty: 'No saved pieces yet',
    wishlistMoveAll: 'Add All to Order Bag',

    currencySymbol: '₪',
    readMore: 'Learn More',
    close: 'Close',
  },

  he: {
    topAddress: 'שבי ציון 2, אשדוד',
    topHours: 'מדידות וקבלת קהל: א׳–ו׳ בתיאום מראש',
    topDelivery: 'תפירה עילית אישית ומשלוחים לכל הארץ',
    topConcierge: '058-587-7708',
    navServices: 'שירותים',
    navCatalog: 'קולקציה',
    navAbout: 'על המעצבת',
    navFaq: 'שאלות נפוצות',
    navContact: 'יצירת קשר',
    navBookFitting: 'תיאום מדידה',
    navCart: 'תיק הזמנה',
    navWishlist: 'מועדפים',
    navSizeGuide: 'מדריך מידות',

    heroPill: 'HUTZAHAV • ATELIER HAUTE COUTURE • חוט זהב',
    heroTitleLine1: 'אומנות',
    heroTitleHighlight: 'התפירה העילית',
    heroTitleLine2: 'וציור מקורי על בד טבעי',
    heroSubtitle:
      'אטלייה הבוטיק של המעצבת גלינה חבוסטנקו באשדוד. תפירה אישית של שמלות ערב וכלה בהתאמה מדויקת למבנה הגוף, שמלות מ-100% פשתן ומשי בציור ידני, ז׳קטים בטכניקת נונו-לבד ותיקוני יוקרה.',
    heroBookBtn: 'תיאום מדידה באטלייה',
    heroExploreBtn: 'לצפייה בקולקציה',
    heroStat1Val: '15+',
    heroStat1Lbl: 'שנות מומחיות',
    heroStat2Val: '100%',
    heroStat2Lbl: 'עבודת יד',
    heroStat3Val: '1-of-1',
    heroStat3Lbl: 'עיצוב ייחודי',
    heroBadgeCollection: 'קולקציית חוט זהב',
    heroPhotoTitle: 'סגנון בלעדי שאין לאף אחת אחרת',
    heroPhotoSubtitle:
      'עבודת יד מוקפדת, משי זורם ופשתן טבעי המדגישים את הנשיות והיופי האישי שלך.',

    marqueeItems: [
      'תפירה עילית אישית לפי מידה',
      'ציור ידני מקורי על משי ופשתן טהור',
      'ז׳קטים אמנותיים בטכניקת נונו-לבד',
      'התאמת בגדי מותגים ותיקוני יוקרה',
      'שבי ציון 2 • אשדוד',
      'משלוחים לכל רחבי ישראל',
    ],

    servicesTitle: 'תחומי ההתמחות באטלייה',
    servicesSubtitle:
      'כל בגד נוצר בעבודת יד מוקפדת תוך הקפדה על גזרה מחמיאה, בדים טבעיים וגימור מושלם.',
    servicesCategoryBadge: 'ATELIER HAUTE COUTURE',
    servicesBtn: 'לתיאום והתייעצות',

    catalogTitle: 'קולקציית האטלייה',
    catalogSubtitle:
      'שמלות מעצבים בציור ידני, ז׳קטים בצמר מרינו ומשי, צעיפים ותפירה אישית. מדידה באשדוד או משלוח עד הבית.',
    catalogSizeGuideBtn: 'מדריך מידות',
    catalogFabricGuideBtn: 'הבדים והטיפול בהם',
    catalogSearchPlaceholder: 'חיפוש בקולקציה...',
    catalogInStock: 'באטלייה / בהזמנה אישית',
    catalogAddToBag: 'הוספה להזמנה',
    catalogInspect: 'פרטים',
    catalogEmpty: 'לא נמצאו פריטים תואמים.',
    catalogResetFilters: 'הצגת כל הפריטים',

    catAll: 'כל היצירות',
    catDresses: 'שמלות וציור ידני',
    catJackets: 'ז׳קטים ונונו-לבד',
    catAccessories: 'צעיפים ואביזרים',
    catTailoring: 'תפירה ותיקונים',

    aboutTitle: 'על המעצבת והאטלייה',
    aboutSubtitle: 'הכירו את גלינה חבוסטנקו ואת סטודיו האופנה ברחוב שבי ציון 2, אשדוד.',
    aboutMasterName: 'גלינה חבוסטנקו',
    aboutMasterRole: 'מעצבת אופנה, אמנית טקסטיל ומייסדת האטלייה',

    testimonialsTitle: 'לקוחות מספרות',
    testimonialsSubtitle: 'מילים חמות מנשים שבחרו באטלייה חוט זהב לאירועים החשובים בחייהן.',

    faqTitle: 'שאלות ותשובות',
    faqSubtitle: 'כל המידע על תיאום מדידה באשדוד, תפירה אישית והזמנות.',

    bookingTitle: 'תיאום מדידה ויצירת קשר',
    bookingSubtitle: 'נשמח לארח אותך באטלייה שלנו באשדוד או להעניק ייעוץ אישי בווטסאפ.',
    bookingNamePlaceholder: 'שם מלא',
    bookingPhonePlaceholder: 'טלפון / ווטסאפ',
    bookingServiceSelect: 'בחירת שירות...',
    bookingNotesPlaceholder: 'ספרי לנו על הבגד המבוקש או מועד נוח להגעה...',
    bookingSubmitBtn: 'שליחה בווטסאפ',
    bookingLocationHeading: 'מיקום האטלייה באשדוד',
    bookingAddress: 'רחוב שבי ציון 2, אשדוד (Shavei Tzion 2)',
    bookingOpenGoogleMaps: 'Google Maps',
    bookingOpenWaze: 'Waze',
    bookingOpenEasy: 'Easy.co.il',

    cartTitle: 'תיק ההזמנה שלך',
    cartEmptyTitle: 'תיק ההזמנה ריק',
    cartEmptySubtitle: 'בחרי שמלות, ז׳קטים או צעיפים מתוך הקולקציה לתיאום מדידה או הזמנה.',
    cartCheckoutWhatsApp: 'שליחת הזמנה בווטסאפ',
    cartCheckoutTelegram: 'טלגרם',
    cartCheckoutEmail: 'אימייל',
    wishlistTitle: 'פריטים שמורים',
    wishlistEmpty: 'אין פריטים שמורים כרגע',
    wishlistMoveAll: 'העברת הכל להזמנה',

    currencySymbol: '₪',
    readMore: 'למידע נוסף',
    close: 'סגירה',
  },
};
