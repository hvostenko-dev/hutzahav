import React from 'react';
import { Check, ChevronDown, Clock, MapPin, Navigation, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { STUDIO_INFO } from '../data/portfolioData';
import {
  SERVICE_CONTENT,
  SERVICE_IMAGES,
  ServicePageId,
  UI_LABELS,
} from '../seo/servicePages';
import { WhatsApp } from './Icons';

const SERVICE_IDS: ServicePageId[] = ['alterations', 'evening', 'bridal'];

export const ServiceLanding: React.FC<{ id: ServicePageId }> = ({ id }) => {
  const { lang, homePath, pathFor } = useLanguage();
  const c = SERVICE_CONTENT[id][lang];
  const ui = UI_LABELS[lang];
  const images = SERVICE_IMAGES[id];
  const waText = encodeURIComponent(
    lang === 'he'
      ? `שלום גלינה! אשמח לתאם: ${ui.serviceNames[id]}`
      : lang === 'en'
      ? `Hello Galina! I'd like to book: ${ui.serviceNames[id]}`
      : `Здравствуйте, Галина! Хочу записаться: ${ui.serviceNames[id]}`
  );
  const waUrl = `${STUDIO_INFO.whatsappUrl}?text=${waText}`;
  const address = lang === 'he' ? STUDIO_INFO.addressHe : lang === 'en' ? STUDIO_INFO.addressEn : STUDIO_INFO.addressRu;

  const CtaButtons = () => (
    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.14em] shadow-xl transition-transform hover:scale-105 active:scale-95"
      >
        <WhatsApp size={16} />
        <span>{ui.whatsapp}</span>
      </a>
      <a
        href={`tel:+${STUDIO_INFO.phoneRaw}`}
        className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-gold-400/50 text-gold-200 font-cinzel font-bold text-xs uppercase tracking-[0.14em] hover:bg-gold-400/10 transition-colors"
      >
        <Phone size={15} />
        <span dir="ltr">{STUDIO_INFO.phone}</span>
      </a>
    </div>
  );

  return (
    <article className="w-full">
      {/* Hero */}
      <section className="relative py-10 sm:py-16 border-b border-gold-400/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <nav aria-label="Breadcrumb" className="text-xs text-slate-400">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <a href={homePath} className="hover:text-gold-300 transition-colors">
                    {ui.home}
                  </a>
                </li>
                <li aria-hidden="true" className="text-gold-400/60">/</li>
                <li aria-current="page" className="text-slate-300">
                  {c.breadcrumb}
                </li>
              </ol>
            </nav>

            <p className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-900/90 border border-gold-400/35 text-gold-300 text-[11px] font-cinzel tracking-[0.14em] uppercase">
              <MapPin size={12} className="text-gold-400 shrink-0" />
              {c.eyebrow}
            </p>

            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              {c.h1}
            </h1>

            {c.intro.map((p) => (
              <p key={p.slice(0, 24)} className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                {p}
              </p>
            ))}

            <CtaButtons />
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-gold-400/25 shadow-2xl">
              <img
                src={images[0]}
                alt={c.h1}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="py-14 sm:py-20 bg-noir-900 border-b border-gold-400/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-white mb-8">{c.offerTitle}</h2>
          <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {c.offers.map((o) => (
              <li
                key={o}
                className="flex items-start gap-3 p-4 rounded-2xl bg-noir-950/60 border border-white/5 text-sm text-slate-200 leading-relaxed"
              >
                <Check size={18} className="text-gold-400 shrink-0 mt-0.5" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 sm:py-20 border-b border-gold-400/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-white mb-8">{c.stepsTitle}</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.steps.map((s, i) => (
              <li key={s.title} className="p-5 rounded-2xl bg-noir-900/60 border border-gold-400/15">
                <div className="font-cinzel text-gold-400 text-sm mb-2">0{i + 1}</div>
                <h3 className="font-cormorant text-xl font-bold text-white mb-1.5">{s.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-14 sm:py-20 bg-noir-900 border-b border-gold-400/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-white mb-8">{c.galleryTitle}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {images.slice(1).concat(images[0]).map((src, i) => (
              <div key={src} className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={src}
                  alt={`${c.breadcrumb} – ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 border-b border-gold-400/15">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-white mb-8">{c.faqTitle}</h2>
          <div className="space-y-3">
            {c.faqs.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group rounded-2xl bg-noir-900/60 border border-white/10 open:border-gold-400/30 p-5"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-white text-sm sm:text-base">
                  <h3>{f.q}</h3>
                  <ChevronDown size={18} className="text-gold-400 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + address */}
      <section className="py-14 sm:py-20 bg-noir-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-white">{c.ctaTitle}</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{c.ctaText}</p>
            <CtaButtons />
          </div>

          <div className="p-6 rounded-[1.5rem] bg-noir-950/70 border border-gold-400/25 space-y-4">
            <h2 className="font-cormorant text-2xl font-bold text-white">{ui.addressTitle}</h2>
            <p className="flex items-start gap-3 text-sm text-slate-200">
              <MapPin size={18} className="text-gold-400 shrink-0 mt-0.5" />
              <span>
                HUTZAHAV • חוט זהב
                <br />
                {address}
              </span>
            </p>
            <div className="flex items-start gap-3 text-sm text-slate-300">
              <Clock size={18} className="text-gold-400 shrink-0 mt-0.5" />
              <ul>
                {ui.hours.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-noir-900 border border-white/10 text-xs text-slate-200 hover:border-gold-400/40"
              >
                <Navigation size={13} className="text-gold-400" /> Google Maps
              </a>
              <a
                href={STUDIO_INFO.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-noir-900 border border-white/10 text-xs text-slate-200 hover:border-gold-400/40"
              >
                <Navigation size={13} className="text-gold-400" /> Waze
              </a>
            </div>
          </div>
        </div>

        {/* Internal links to other services */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10">
          <h2 className="font-cinzel text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">{ui.otherServices}</h2>
          <ul className="flex flex-wrap gap-2.5">
            {SERVICE_IDS.filter((s) => s !== id).map((s) => (
              <li key={s}>
                <a
                  href={pathFor(s)}
                  className="inline-block px-4 py-2 rounded-full border border-gold-400/30 text-sm text-gold-200 hover:bg-gold-400/10"
                >
                  {ui.serviceNames[s]}
                </a>
              </li>
            ))}
            <li>
              <a href={homePath} className="inline-block px-4 py-2 rounded-full text-sm text-slate-300 hover:text-gold-300">
                {ui.backHome} →
              </a>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
};
