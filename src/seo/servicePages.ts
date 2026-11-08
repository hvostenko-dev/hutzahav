// Content for the local-SEO service landing pages (one page per service per language).
import type { Language } from '../i18n/translations';
import type { PageId } from './routes';

export type ServicePageId = Exclude<PageId, 'home'>;

export interface ServiceContent {
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  offerTitle: string;
  offers: string[];
  stepsTitle: string;
  steps: { title: string; text: string }[];
  galleryTitle: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  schemaServiceName: string;
}

const A = '/images/portfolio/atelier/';

export const SERVICE_IMAGES: Record<ServicePageId, string[]> = {
  alterations: [
    A + '8f183f_642a3166de1749be9e9a9cb8e471642a.jpg',
    A + '8f183f_967f764fb7ab4b07bfa6fbc2a2d19f67.jpg',
    A + '8f183f_eb9affc403124efea078d2f2f97213ff.jpg',
    A + '8f183f_2ca784aa44084651a79967a2bba60b8a.jpg',
  ],
  evening: [
    A + '8f183f_69efee7f26b2414eaa7d22ae5eef6cf3.jpg',
    A + '8f183f_e5ca42fd8e624ff0964ea76ce8bfedcc.jpg',
    A + '8f183f_7a9306154f4b4e77a28481bdc58d81c4.jpg',
    A + '8f183f_2ca784aa44084651a79967a2bba60b8a.jpg',
  ],
  bridal: [
    A + '8f183f_fb038d49d6254d49ac84362629af81f7.jpg',
    A + '8f183f_d2de953de21545eba90b2625f9b9221f.jpg',
    A + '8f183f_214cf4c6649b4474bef0c12d369a4c19.jpg',
    A + '8f183f_642a3166de1749be9e9a9cb8e471642a.jpg',
  ],
};

export const UI_LABELS: Record<
  Language,
  {
    home: string;
    whatsapp: string;
    call: string;
    route: string;
    addressTitle: string;
    hours: string[];
    otherServices: string;
    backHome: string;
    serviceNames: Record<ServicePageId, string>;
  }
> = {
  he: {
    home: 'דף הבית',
    whatsapp: 'תיאום בווטסאפ',
    call: 'התקשרו אלינו',
    route: 'ניווט לאטלייה',
    addressTitle: 'האטלייה באשדוד',
    hours: ['א׳–ה׳: 09:00–19:00', 'ו׳: 09:00–14:00', 'בתיאום מראש'],
    otherServices: 'שירותים נוספים באטלייה',
    backHome: 'לכל השירותים והקולקציה',
    serviceNames: {
      alterations: 'תיקוני בגדים והתאמה',
      evening: 'תפירת שמלות ערב',
      bridal: 'שמלות כלה בתפירה אישית',
    },
  },
  ru: {
    home: 'Главная',
    whatsapp: 'Записаться в WhatsApp',
    call: 'Позвонить',
    route: 'Маршрут до ателье',
    addressTitle: 'Ателье в Ашдоде',
    hours: ['Вс–Чт: 09:00–19:00', 'Пт: 09:00–14:00', 'По предварительной записи'],
    otherServices: 'Другие услуги ателье',
    backHome: 'Все услуги и коллекция',
    serviceNames: {
      alterations: 'Подгонка и ремонт одежды',
      evening: 'Пошив вечерних платьев',
      bridal: 'Свадебные платья на заказ',
    },
  },
  en: {
    home: 'Home',
    whatsapp: 'Book on WhatsApp',
    call: 'Call us',
    route: 'Directions to the atelier',
    addressTitle: 'Our atelier in Ashdod',
    hours: ['Sun–Thu: 09:00–19:00', 'Fri: 09:00–14:00', 'By appointment'],
    otherServices: 'More atelier services',
    backHome: 'All services & collection',
    serviceNames: {
      alterations: 'Clothing alterations & repairs',
      evening: 'Bespoke evening dresses',
      bridal: 'Custom bridal dresses',
    },
  },
};

export const SERVICE_CONTENT: Record<ServicePageId, Record<Language, ServiceContent>> = {
  alterations: {
    he: {
      breadcrumb: 'תיקוני בגדים באשדוד',
      eyebrow: 'מתפרה באשדוד • שבי ציון 2',
      h1: 'תיקוני בגדים והתאמה מדויקת באשדוד',
      intro: [
        'בגד שיושב נכון משנה את כל המראה. באטלייה חוט זהב באשדוד גלינה חבוסטנקו, מעצבת ותופרת עם ניסיון של למעלה מ-15 שנה, מבצעת תיקונים והתאמות לבגדים יומיומיים, לשמלות ערב ולבגדי מותגים.',
        'כל עבודה מתחילה במדידה אישית באטלייה: מסמנים יחד את השינויים, ואת הבגד מקבלים בחזרה מוכן ומגוהץ.',
      ],
      offerTitle: 'מה אפשר לתקן ולהתאים',
      offers: [
        'קיצור מכנסיים, חצאיות ושמלות – גם עם שמירה על המכפלה המקורית',
        'הצרה והרחבה של שמלות, חולצות ומכנסיים לפי הגוף',
        'התאמת שמלות ערב, שמלות כלה ושמלות לאירועים',
        'התאמת חליפות וז׳קטים של מותגים, קיצור שרוולים',
        'החלפת רוכסנים, כפתורים ובטנות',
        'תיקון קרעים, תפרים פתוחים ובגדי סריג עדינים',
        'חידוש וטיפול בפריטי עור ומשי',
      ],
      stepsTitle: 'איך זה עובד',
      steps: [
        { title: 'פנייה', text: 'שולחים הודעה בווטסאפ או מתקשרים, ומתאמים זמן נוח להגיע.' },
        { title: 'מדידה באטלייה', text: 'מודדים את הבגד, מסמנים סיכות ומסכמים מה עושים ומתי יהיה מוכן.' },
        { title: 'עבודה', text: 'הבגד מתוקן בעבודת יד מקצועית, בתשומת לב לבד ולגימור.' },
        { title: 'איסוף', text: 'מודדים שוב, ואם צריך – עושים תיקון אחרון במקום.' },
      ],
      galleryTitle: 'מהאטלייה',
      faqTitle: 'שאלות נפוצות על תיקוני בגדים',
      faqs: [
        {
          q: 'איפה נמצאת המתפרה?',
          a: 'האטלייה נמצא ברחוב שבי ציון 2 באשדוד. מקבלים לקוחות בתיאום מראש, ימים א׳–ה׳ 09:00–19:00 ויום ו׳ 09:00–14:00.',
        },
        {
          q: 'כמה זמן לוקח תיקון?',
          a: 'זה תלוי בסוג העבודה ובעומס. את מועד המסירה המדויק קובעים כבר במדידה הראשונה.',
        },
        {
          q: 'כמה עולה קיצור מכנסיים או הצרה של שמלה?',
          a: 'המחיר נקבע לפי הבד, סוג התפר ומורכבות העבודה. שלחו תמונה של הבגד בווטסאפ ונחזור אליכם עם הערכה.',
        },
        {
          q: 'אתם עובדים גם עם שמלות ערב ובגדי מותגים?',
          a: 'כן, זו אחת ההתמחויות של האטלייה: התאמת שמלות ערב וכלה, חליפות וז׳קטים של מותגים, תוך שמירה על הגזרה והגימור המקוריים.',
        },
      ],
      ctaTitle: 'צריכים לתקן או להתאים בגד?',
      ctaText: 'שלחו תמונה של הבגד בווטסאפ ונתאם מדידה באטלייה באשדוד.',
      schemaServiceName: 'תיקוני בגדים והתאמה',
    },
    ru: {
      breadcrumb: 'Подгонка и ремонт одежды',
      eyebrow: 'Ателье в Ашдоде • ул. Шавей Цион 2',
      h1: 'Подгонка и ремонт одежды в Ашдоде',
      intro: [
        'Правильно сидящая вещь меняет весь образ. В ателье «Хут Захав» в Ашдоде дизайнер и портная Галина Хвостенко (опыт более 15 лет) выполняет подгонку и ремонт повседневной одежды, вечерних платьев и брендовых вещей.',
        'Каждая работа начинается с личной примерки в ателье: вместе намечаем изменения, а вещь вы получаете готовой и отутюженной.',
      ],
      offerTitle: 'Что мы делаем',
      offers: [
        'Укоротить брюки, юбки и платья – в том числе с сохранением фабричного края',
        'Ушить или расширить платье, блузку, брюки по фигуре',
        'Подгонка вечерних, свадебных и праздничных платьев',
        'Посадка брендовых костюмов и пиджаков, укорачивание рукавов',
        'Замена молнии, пуговиц и подкладки',
        'Ремонт разрывов, распоровшихся швов и деликатного трикотажа',
        'Обновление изделий из кожи и шёлка',
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { title: 'Заявка', text: 'Пишете в WhatsApp или звоните – договариваемся об удобном времени.' },
        { title: 'Примерка в ателье', text: 'Примеряем вещь, закалываем булавками, согласуем работу и срок.' },
        { title: 'Работа', text: 'Аккуратная ручная и машинная работа с вниманием к ткани и отделке.' },
        { title: 'Выдача', text: 'Повторная примерка и, если нужно, финальная доводка на месте.' },
      ],
      galleryTitle: 'Из ателье',
      faqTitle: 'Частые вопросы о подгонке и ремонте',
      faqs: [
        {
          q: 'Где находится ателье?',
          a: 'Ателье находится в Ашдоде на улице Шавей Цион 2. Приём по предварительной записи: Вс–Чт 09:00–19:00, Пт 09:00–14:00.',
        },
        {
          q: 'Сколько времени занимает ремонт?',
          a: 'Зависит от вида работы и загрузки. Точный срок называем сразу на первой примерке.',
        },
        {
          q: 'Сколько стоит укоротить брюки или ушить платье?',
          a: 'Цена зависит от ткани, вида шва и сложности. Пришлите фото вещи в WhatsApp – подскажем ориентировочную стоимость.',
        },
        {
          q: 'Вы работаете с вечерними платьями и брендовой одеждой?',
          a: 'Да, это одна из специализаций ателье: подгонка вечерних и свадебных платьев, брендовых костюмов и пиджаков с сохранением оригинального кроя и отделки.',
        },
      ],
      ctaTitle: 'Нужно подогнать или отремонтировать вещь?',
      ctaText: 'Пришлите фото в WhatsApp – и запишем вас на примерку в ателье в Ашдоде.',
      schemaServiceName: 'Подгонка и ремонт одежды',
    },
    en: {
      breadcrumb: 'Clothing alterations',
      eyebrow: 'Tailor in Ashdod • Shavei Tzion 2',
      h1: 'Clothing Alterations & Repairs in Ashdod',
      intro: [
        'A garment that fits right changes the whole look. At Hutzahav atelier in Ashdod, designer and seamstress Galina Khvostenko (15+ years of experience) alters and repairs everyday clothing, evening dresses and designer pieces.',
        'Every job starts with a personal fitting at the atelier: we mark the changes together, and you get the garment back finished and pressed.',
      ],
      offerTitle: 'What we do',
      offers: [
        'Hemming trousers, skirts and dresses – including original-hem preservation',
        'Taking in or letting out dresses, blouses and trousers',
        'Fitting evening, bridal and occasion dresses',
        'Fitting designer suits and jackets, shortening sleeves',
        'Replacing zippers, buttons and linings',
        'Repairing tears, open seams and delicate knitwear',
        'Refreshing leather and silk pieces',
      ],
      stepsTitle: 'How it works',
      steps: [
        { title: 'Get in touch', text: 'Message us on WhatsApp or call to book a convenient time.' },
        { title: 'Fitting', text: 'We pin the garment on you and agree on the work and the timeline.' },
        { title: 'The work', text: 'Careful handwork with attention to fabric and finishing.' },
        { title: 'Pick-up', text: 'A final try-on and, if needed, last touches on the spot.' },
      ],
      galleryTitle: 'From the atelier',
      faqTitle: 'Alterations FAQ',
      faqs: [
        {
          q: 'Where is the atelier?',
          a: 'We are at Shavei Tzion 2, Ashdod. By appointment: Sun–Thu 09:00–19:00, Fri 09:00–14:00.',
        },
        {
          q: 'How long does an alteration take?',
          a: 'It depends on the job and current workload. We give you an exact date at the first fitting.',
        },
        {
          q: 'How much does hemming or taking in a dress cost?',
          a: 'The price depends on the fabric, seam type and complexity. Send a photo on WhatsApp and we will give you an estimate.',
        },
        {
          q: 'Do you alter evening dresses and designer clothing?',
          a: 'Yes, it is one of our specialties: evening and bridal dresses, designer suits and jackets, keeping the original cut and finish.',
        },
      ],
      ctaTitle: 'Need something altered or repaired?',
      ctaText: 'Send a photo on WhatsApp and book a fitting at our Ashdod atelier.',
      schemaServiceName: 'Clothing alterations and repairs',
    },
  },

  evening: {
    he: {
      breadcrumb: 'תפירת שמלות ערב באשדוד',
      eyebrow: 'תפירה אישית • אשדוד',
      h1: 'תפירת שמלות ערב לפי מידה באשדוד',
      intro: [
        'שמלת ערב שנתפרה במיוחד בשבילך – לפי המידות שלך, בבד ובגזרה שבחרת. המעצבת גלינה חבוסטנקו מלווה אותך מהסקיצה הראשונה ועד המדידה האחרונה באטלייה חוט זהב באשדוד.',
        'אנחנו עובדים עם בדים עדינים – משי טבעי, שיפון, תחרה צרפתית, טפטה וקטיפה – ובונים מחוכים וגזרות מורכבות שמחמיאות לגוף.',
      ],
      offerTitle: 'מה כולל השירות',
      offers: [
        'פגישת ייעוץ: סגנון, גזרה, צבע ובד',
        'לקיחת מידות מפורטת (25 מידות גוף)',
        'עבודה עם משי, שיפון, תחרה, טפטה וקטיפה',
        'מחוכים ובניית גזרה מדויקת',
        'אפשרות לציור ידני מקורי על הבד',
        'מדידות ביניים עד להתאמה מושלמת',
        'שמלות לאירועים, לחתונה (לאורחות ולאמהות), לבת מצווה ולערבי חגיגה',
      ],
      stepsTitle: 'התהליך',
      steps: [
        { title: 'ייעוץ', text: 'נפגשים באטלייה, מדברים על האירוע, הסגנון והתקציב.' },
        { title: 'סקיצה ובד', text: 'בוחרים יחד גזרה ובד, ולוקחים את כל המידות.' },
        { title: 'מדידות', text: 'מדידת ביניים אחת או יותר, כדי שהשמלה תשב בדיוק.' },
        { title: 'מסירה', text: 'השמלה מוכנה לאירוע – מגוהצת וארוזה.' },
      ],
      galleryTitle: 'עבודות מהאטלייה',
      faqTitle: 'שאלות נפוצות על תפירת שמלת ערב',
      faqs: [
        {
          q: 'כמה זמן לוקח לתפור שמלת ערב?',
          a: 'בדרך כלל בין 5 ל-14 ימי עבודה, בהתאם למורכבות. מומלץ לפנות מספר שבועות לפני האירוע כדי שיהיה זמן למדידות.',
        },
        {
          q: 'אפשר להביא תמונה של שמלה שאהבתי?',
          a: 'בהחלט. מביאים תמונה או רעיון, ויחד מתאימים את הגזרה למבנה הגוף ולאירוע.',
        },
        {
          q: 'אפשר להביא בד משלי?',
          a: 'כן, אפשר. במפגש הייעוץ נבדוק שהבד מתאים לגזרה ונחשב כמה בד נדרש.',
        },
        {
          q: 'כמה עולה שמלת ערב בתפירה אישית?',
          a: 'המחיר תלוי בבד, בגזרה ובכמות עבודת היד. בפגישת הייעוץ תקבלי הצעת מחיר מסודרת.',
        },
      ],
      ctaTitle: 'יש לך אירוע בקרוב?',
      ctaText: 'כתבי לנו בווטסאפ ונקבע פגישת ייעוץ ומדידות באטלייה באשדוד.',
      schemaServiceName: 'תפירת שמלות ערב לפי מידה',
    },
    ru: {
      breadcrumb: 'Пошив вечерних платьев',
      eyebrow: 'Индивидуальный пошив • Ашдод',
      h1: 'Пошив вечерних платьев на заказ в Ашдоде',
      intro: [
        'Вечернее платье, сшитое специально для вас – по вашим меркам, из выбранной ткани и в нужном фасоне. Дизайнер Галина Хвостенко ведёт вас от первого эскиза до последней примерки в ателье «Хут Захав» в Ашдоде.',
        'Работаем с деликатными тканями – натуральный шёлк, шифон, французское кружево, тафта, бархат – и строим корсеты и сложные силуэты, которые подчёркивают фигуру.',
      ],
      offerTitle: 'Что входит в услугу',
      offers: [
        'Консультация: стиль, фасон, цвет и ткань',
        'Подробное снятие мерок (25 анатомических мерок)',
        'Шёлк, шифон, кружево, тафта и бархат',
        'Корсеты и точное конструирование выкройки',
        'Возможность авторской ручной росписи ткани',
        'Промежуточные примерки до идеальной посадки',
        'Платья на торжество, свадьбу (для гостей и мам), бат-мицву и праздники',
      ],
      stepsTitle: 'Как проходит пошив',
      steps: [
        { title: 'Консультация', text: 'Встречаемся в ателье, обсуждаем событие, стиль и бюджет.' },
        { title: 'Эскиз и ткань', text: 'Вместе выбираем фасон и ткань, снимаем все мерки.' },
        { title: 'Примерки', text: 'Одна или несколько промежуточных примерок для точной посадки.' },
        { title: 'Готово', text: 'Платье готово к событию – отутюжено и упаковано.' },
      ],
      galleryTitle: 'Работы ателье',
      faqTitle: 'Частые вопросы о пошиве вечернего платья',
      faqs: [
        {
          q: 'Сколько времени занимает пошив вечернего платья?',
          a: 'Обычно от 5 до 14 рабочих дней, в зависимости от сложности. Лучше обратиться за несколько недель до события, чтобы спокойно провести примерки.',
        },
        {
          q: 'Можно принести фото платья, которое понравилось?',
          a: 'Конечно. Приносите фото или идею – вместе адаптируем фасон под вашу фигуру и событие.',
        },
        {
          q: 'Можно ли шить из своей ткани?',
          a: 'Да. На консультации проверим, подходит ли ткань для фасона, и рассчитаем нужное количество.',
        },
        {
          q: 'Сколько стоит пошив вечернего платья?',
          a: 'Стоимость зависит от ткани, фасона и объёма ручной работы. Точную цену называем на консультации.',
        },
      ],
      ctaTitle: 'Скоро торжество?',
      ctaText: 'Напишите нам в WhatsApp – назначим консультацию и снятие мерок в ателье в Ашдоде.',
      schemaServiceName: 'Пошив вечерних платьев на заказ',
    },
    en: {
      breadcrumb: 'Bespoke evening dresses',
      eyebrow: 'Made to measure • Ashdod',
      h1: 'Bespoke Evening Dresses Made to Measure in Ashdod',
      intro: [
        'An evening dress made just for you – to your measurements, in the fabric and cut you choose. Designer Galina Khvostenko guides you from the first sketch to the final fitting at Hutzahav atelier in Ashdod.',
        'We work with delicate fabrics – pure silk, chiffon, French lace, taffeta and velvet – and build corsetry and complex silhouettes that flatter the figure.',
      ],
      offerTitle: 'What is included',
      offers: [
        'Consultation: style, cut, colour and fabric',
        'Detailed measurements (25 body measurements)',
        'Silk, chiffon, lace, taffeta and velvet',
        'Corsetry and precise pattern making',
        'Optional original hand painting on the fabric',
        'Interim fittings until the fit is perfect',
        'Dresses for weddings (guests and mothers), bat mitzvahs and celebrations',
      ],
      stepsTitle: 'The process',
      steps: [
        { title: 'Consultation', text: 'We meet at the atelier to talk about the event, style and budget.' },
        { title: 'Sketch & fabric', text: 'We choose the cut and fabric together and take your measurements.' },
        { title: 'Fittings', text: 'One or more interim fittings for a precise fit.' },
        { title: 'Ready', text: 'Your dress is ready for the event – pressed and packed.' },
      ],
      galleryTitle: 'From the atelier',
      faqTitle: 'Evening dress FAQ',
      faqs: [
        {
          q: 'How long does it take to make an evening dress?',
          a: 'Usually 5 to 14 business days depending on complexity. We recommend getting in touch a few weeks before the event to leave time for fittings.',
        },
        {
          q: 'Can I bring a photo of a dress I like?',
          a: 'Of course. Bring a photo or an idea and we will adapt the design to your figure and occasion.',
        },
        {
          q: 'Can I bring my own fabric?',
          a: 'Yes. At the consultation we check that the fabric suits the design and calculate how much is needed.',
        },
        {
          q: 'How much does a bespoke evening dress cost?',
          a: 'The price depends on fabric, design and the amount of handwork. You get an exact quote at the consultation.',
        },
      ],
      ctaTitle: 'Have an event coming up?',
      ctaText: 'Message us on WhatsApp to book a consultation and measurements at our Ashdod atelier.',
      schemaServiceName: 'Bespoke evening dresses',
    },
  },

  bridal: {
    he: {
      breadcrumb: 'שמלות כלה באשדוד',
      eyebrow: 'שמלות כלה • אשדוד',
      h1: 'שמלות כלה בתפירה אישית והתאמת שמלת כלה באשדוד',
      intro: [
        'שמלת הכלה שלך צריכה לשבת עלייך בדיוק. באטלייה חוט זהב באשדוד גלינה חבוסטנקו תופרת שמלות כלה לפי מידה, וגם מתאימה שמלות כלה שנקנו או הושכרו.',
        'עבודה עם משי, תחרה, שיפון וטול, מחוכים ושובלים – עם מדידות אישיות באווירה רגועה ונעימה.',
      ],
      offerTitle: 'מה אנחנו עושים',
      offers: [
        'תפירת שמלת כלה לפי מידה מהסקיצה ועד המסירה',
        'התאמת שמלת כלה קנויה או שכורה: הצרה, קיצור, חיזוק מחוך',
        'שמלות לאמהות החתן והכלה ולמלוות',
        'שמלות חגיגיות לילדות לחתונה ולאירועים',
        'שינוי שמלת כלה אחרי החתונה לשמלת ערב',
        'עבודה עם תחרה, משי, שיפון וטול',
      ],
      stepsTitle: 'הדרך לשמלה',
      steps: [
        { title: 'פגישת היכרות', text: 'מדברים על החלום, על החתונה ועל לוח הזמנים.' },
        { title: 'עיצוב ומידות', text: 'בוחרים גזרה ובדים ולוקחים מידות מפורטות.' },
        { title: 'מדידות', text: 'כמה מדידות בדרך, כדי שהשמלה תשב מושלם.' },
        { title: 'לפני החתונה', text: 'מדידה אחרונה וגיהוץ – והשמלה מוכנה ליום הגדול.' },
      ],
      galleryTitle: 'מהאטלייה',
      faqTitle: 'שאלות נפוצות על שמלות כלה',
      faqs: [
        {
          q: 'כמה זמן לפני החתונה כדאי לפנות?',
          a: 'לתפירת שמלה חדשה כדאי לפנות כמה חודשים מראש. להתאמה של שמלה קיימת – כמה שבועות לפני החתונה.',
        },
        {
          q: 'אתם מתאימים שמלת כלה שקניתי במקום אחר?',
          a: 'כן. מתאימים שמלות כלה קנויות ושכורות: הצרה, קיצור, התאמת מחוך ושובל.',
        },
        {
          q: 'כמה עולה שמלת כלה בתפירה אישית?',
          a: 'המחיר תלוי בבדים, בגזרה ובכמות עבודת היד. בפגישת ההיכרות תקבלי הצעת מחיר.',
        },
        {
          q: 'איפה האטלייה?',
          a: 'רחוב שבי ציון 2, אשדוד. מקבלים בתיאום מראש.',
        },
      ],
      ctaTitle: 'מתחתנת בקרוב? מזל טוב!',
      ctaText: 'כתבי לנו בווטסאפ ונקבע פגישת היכרות באטלייה באשדוד.',
      schemaServiceName: 'שמלות כלה בתפירה אישית',
    },
    ru: {
      breadcrumb: 'Свадебные платья на заказ',
      eyebrow: 'Свадебные платья • Ашдод',
      h1: 'Свадебные платья на заказ и подгонка в Ашдоде',
      intro: [
        'Свадебное платье должно сидеть идеально. В ателье «Хут Захав» в Ашдоде Галина Хвостенко шьёт свадебные платья по индивидуальным меркам, а также подгоняет купленные или взятые напрокат платья.',
        'Шёлк, кружево, шифон и фатин, корсеты и шлейфы – с личными примерками в спокойной и уютной атмосфере.',
      ],
      offerTitle: 'Что мы делаем',
      offers: [
        'Пошив свадебного платья по меркам – от эскиза до выдачи',
        'Подгонка купленного или прокатного платья: ушить, укоротить, укрепить корсет',
        'Платья для мам жениха и невесты и подружек',
        'Нарядные платья для девочек на свадьбу и праздники',
        'Переделка свадебного платья в вечернее после свадьбы',
        'Работа с кружевом, шёлком, шифоном и фатином',
      ],
      stepsTitle: 'Путь к платью',
      steps: [
        { title: 'Знакомство', text: 'Обсуждаем мечту, саму свадьбу и сроки.' },
        { title: 'Дизайн и мерки', text: 'Выбираем фасон и ткани, снимаем подробные мерки.' },
        { title: 'Примерки', text: 'Несколько примерок по ходу работы для идеальной посадки.' },
        { title: 'Перед свадьбой', text: 'Финальная примерка и отпаривание – платье готово к главному дню.' },
      ],
      galleryTitle: 'Из ателье',
      faqTitle: 'Частые вопросы о свадебных платьях',
      faqs: [
        {
          q: 'За сколько до свадьбы нужно обратиться?',
          a: 'Для пошива нового платья – лучше за несколько месяцев. Для подгонки готового – за несколько недель до свадьбы.',
        },
        {
          q: 'Подгоняете ли вы платье, купленное в другом месте?',
          a: 'Да. Подгоняем купленные и прокатные свадебные платья: ушить, укоротить, подогнать корсет и шлейф.',
        },
        {
          q: 'Сколько стоит свадебное платье на заказ?',
          a: 'Стоимость зависит от тканей, фасона и объёма ручной работы. Цену называем на первой встрече.',
        },
        {
          q: 'Где находится ателье?',
          a: 'Ашдод, ул. Шавей Цион 2. Приём по предварительной записи.',
        },
      ],
      ctaTitle: 'Скоро свадьба? Поздравляем!',
      ctaText: 'Напишите нам в WhatsApp – договоримся о встрече в ателье в Ашдоде.',
      schemaServiceName: 'Свадебные платья на заказ',
    },
    en: {
      breadcrumb: 'Custom bridal dresses',
      eyebrow: 'Bridal • Ashdod',
      h1: 'Custom Wedding Dresses & Bridal Alterations in Ashdod',
      intro: [
        'Your wedding dress should fit you perfectly. At Hutzahav atelier in Ashdod, Galina Khvostenko makes wedding dresses to your measurements and also alters bought or rented gowns.',
        'Silk, lace, chiffon and tulle, corsetry and trains – with personal fittings in a calm, welcoming atmosphere.',
      ],
      offerTitle: 'What we do',
      offers: [
        'Made-to-measure wedding dresses – from sketch to delivery',
        'Alterations of bought or rented gowns: taking in, hemming, corset reinforcement',
        'Dresses for mothers of the bride and groom and bridesmaids',
        'Festive dresses for girls for weddings and events',
        'Restyling a wedding dress into an evening dress after the wedding',
        'Lace, silk, chiffon and tulle work',
      ],
      stepsTitle: 'The journey to your dress',
      steps: [
        { title: 'First meeting', text: 'We talk about your vision, the wedding and the timeline.' },
        { title: 'Design & measurements', text: 'We choose the cut and fabrics and take detailed measurements.' },
        { title: 'Fittings', text: 'Several fittings along the way for a perfect fit.' },
        { title: 'Before the wedding', text: 'A final fitting and steaming – ready for the big day.' },
      ],
      galleryTitle: 'From the atelier',
      faqTitle: 'Bridal FAQ',
      faqs: [
        {
          q: 'How long before the wedding should I get in touch?',
          a: 'For a new dress, a few months ahead. For altering a ready-made gown, a few weeks before the wedding.',
        },
        {
          q: 'Do you alter dresses bought elsewhere?',
          a: 'Yes. We alter bought and rented wedding gowns: taking in, hemming, adjusting the corset and train.',
        },
        {
          q: 'How much does a custom wedding dress cost?',
          a: 'It depends on fabrics, design and the amount of handwork. You get a quote at the first meeting.',
        },
        {
          q: 'Where is the atelier?',
          a: 'Shavei Tzion 2, Ashdod. By appointment.',
        },
      ],
      ctaTitle: 'Getting married soon? Congratulations!',
      ctaText: 'Message us on WhatsApp to book a first meeting at our Ashdod atelier.',
      schemaServiceName: 'Custom wedding dresses',
    },
  },
};
