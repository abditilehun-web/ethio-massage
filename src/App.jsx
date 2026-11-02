import React, { useState, useEffect } from 'react';
import {
  Activity,
  ArrowRight,
  Building2,
  CalendarDays,
  Car,
  ChevronLeft,
  ChevronRight,
  Clock,
  CreditCard,
  Flower2,
  HandHeart,
  House,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  TreePine,
  UserRound,
  X,
} from 'lucide-react';

const LOGO = '/logo-ethiomassage-C1hKcGIX.png';
const INDOOR_ROOM = '/indoor-room-Y59Jy4KB.jpg';
const OUTDOOR_GAZEBO = '/outdoor-gazebo-DyyTxuM4.jpg';
const THERAPIST_SARA = '/therapist-sara-D0UNBuba.jpg';
const THERAPIST_HELEN = '/therapist-helen-mqrLhe0B.jpg';
const THERAPIST_LIYA = '/therapist-liya-6uea7-IR.jpg';

const PHONE_NUMBER = '+251936639092';
const TEL_LINK = 'tel:+251936639092';
const WHATSAPP_LINK = 'https://wa.me/251936639092';
const TELEGRAM_LINK = 'https://t.me/+251936639092';

// 5 Services (Sports Massage completely removed per instructions)
const services = [
  { icon: HandHeart, name: 'Swedish Massage' },
  { icon: Activity, name: 'Deep Tissue Massage' },
  { icon: Flower2, name: 'Relaxation Massage' },
  { icon: House, name: 'Home Service' },
  { icon: Building2, name: 'Hotel Service' },
];

// Why Choose Ethiomassage (Exact 6 original items with zero extra subtext)
const whyChooseItems = [
  { icon: UserRound, label: 'Professional Therapists' },
  { icon: Car, label: 'We Come To You' },
  { icon: Clock, label: '24/7 Booking' },
  { icon: ShieldCheck, label: 'Safe & Private' },
  { icon: CreditCard, label: 'Easy Payment' },
  { icon: MapPin, label: 'Addis Ababa Coverage' },
];

// 3 Therapists (Sara M., Helen T., Liya A. with ONLY name, photo, and 5.0 rating)
const therapists = [
  { name: 'Sara M.', img: THERAPIST_SARA },
  { name: 'Helen T.', img: THERAPIST_HELEN },
  { name: 'Liya A.', img: THERAPIST_LIYA },
];

// Exact 6 original reviews with exact flags, ratings, and copy
const reviews = [
  {
    name: 'Elena Rostova',
    country: 'Germany',
    flag: '🇩🇪',
    rating: '5.0',
    review:
      'Absolutely world-class service! The therapist arrived right on time at my hotel in Addis Ababa. Truly one of the best deep tissue massages I have ever had. Highly professional and deeply relaxing.',
  },
  {
    name: 'Thomas Dubois',
    country: 'France',
    flag: '🇫🇷',
    rating: '4.9',
    review:
      'Incredibly convenient and professional. Booking a premium massage straight to my room after a long business flight was a lifesaver. The attention to detail and technique was phenomenal.',
  },
  {
    name: 'Sofia Bianchi',
    country: 'Italy',
    flag: '🇮🇹',
    rating: '5.0',
    review:
      'An exceptional luxury spa experience right in the comfort of my space. The team brings an atmosphere of pure tranquility. The aromatherapy and Swedish massage techniques were absolutely perfect.',
  },
  {
    name: 'David Johansson',
    country: 'Sweden',
    flag: '🇸🇪',
    rating: '4.9',
    review:
      'Flawless service from start to finish! The therapist was highly skilled and completely respectful of my privacy. It felt like a 5-star resort spa experience brought directly to me.',
  },
  {
    name: 'Emma Carrington',
    country: 'United Kingdom',
    flag: '🇬🇧',
    rating: '5.0',
    review:
      "The quality of care and professionalism is unmatched. It's incredibly rare to find such high-end mobile spa talent. They truly understand hospitality and premium therapeutic techniques.",
  },
  {
    name: 'Dawit Kebede',
    country: 'Ethiopia',
    flag: '🇪🇹',
    rating: '5.0',
    review:
      'በጣም አስደናቂ እና ፕሮፌሽናል አገልግሎት ነው! ወደ ቤት መጥተው የሚሰጡት ሰርቪስ እጅግ ምቹ ከመሆኑም በላይ የተጠቀሙባቸው ማሳጆች በጣም አርኪ ነበሩ። ለምትፈልጉት ሰው ሁሉ በፍጹም እመክራለሁ።',
  },
];

// Clean environment-only images for Hero (All massage session photos removed per Rule 1)
const heroSlides = [
  { src: INDOOR_ROOM, alt: 'Indoor relaxation room setup' },
  { src: OUTDOOR_GAZEBO, alt: 'Outdoor garden gazebo sanctuary' },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % heroSlides.length), 3000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent((index + heroSlides.length) % heroSlides.length);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroSlides.map((slide, idx) => (
        <img
          key={idx}
          src={slide.src}
          alt={slide.alt}
          width={1408}
          height={800}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <button
        onClick={() => goTo(current - 1)}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-background/70 backdrop-blur grid place-items-center text-foreground hover:bg-background transition cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-background/70 backdrop-blur grid place-items-center text-foreground hover:bg-background transition cursor-pointer"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              idx === current ? 'w-6 bg-accent' : 'w-1.5 bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
        {children}
      </h2>
      <Sparkles className="h-4 w-4 text-accent scale-x-[-1]" aria-hidden="true" />
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <article className="relative h-full bg-background rounded-3xl shadow-card border border-border/50 p-5 md:p-6 flex flex-col">
      <Sparkles className="absolute top-4 right-4 h-5 w-5 text-accent/40" aria-hidden="true" />
      <div className="flex items-center gap-1 mb-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
        <span className="ml-1.5 text-xs font-medium text-muted-foreground">{t.rating}</span>
      </div>
      <p className="text-sm md:text-[15px] leading-relaxed text-foreground/85 flex-1">
        "{t.review}"
      </p>
      <div className="mt-4 pt-4 border-t border-border/60 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-cream grid place-items-center text-primary font-semibold font-display">
          {t.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-sm text-foreground truncate">{t.name}</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="text-base leading-none">{t.flag}</span> {t.country}
          </p>
        </div>
      </div>
    </article>
  );
}

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Mobile Slider */}
      <div className="md:hidden overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {reviews.map((r) => (
            <div key={r.name} className="min-w-full px-1">
              <TestimonialCard t={r} />
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-1.5">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === current ? 'w-6 bg-accent' : 'w-1.5 bg-primary/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((r) => (
          <TestimonialCard key={r.name} t={r} />
        ))}
      </div>
    </div>
  );
}

function BookingModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center p-4 bg-black/60 backdrop-blur-sm animate-fade-up"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm bg-background rounded-3xl shadow-soft p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 h-9 w-9 rounded-full grid place-items-center hover:bg-muted transition cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-cream grid place-items-center mb-3">
            <CalendarDays className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-display text-xl font-semibold">Book Your Massage</h3>
          <p className="text-sm text-muted-foreground mt-1">Choose how you'd like to contact us</p>
        </div>

        <div className="mt-5 space-y-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 w-full rounded-2xl bg-whatsapp text-white px-4 py-3 font-medium shadow-soft hover:brightness-105 transition"
          >
            <span className="h-10 w-10 rounded-full bg-white/15 grid place-items-center">
              <MessageCircle className="h-5 w-5" />
            </span>
            <span className="flex-1 text-left">
              <span className="block">WhatsApp</span>
              <span className="block text-xs opacity-90">{PHONE_NUMBER}</span>
            </span>
            <ArrowRight className="h-5 w-5" />
          </a>

          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 w-full rounded-2xl bg-[#229ED9] text-white px-4 py-3 font-medium shadow-soft hover:brightness-105 transition"
          >
            <span className="h-10 w-10 rounded-full bg-white/15 grid place-items-center">
              <Send className="h-5 w-5" />
            </span>
            <span className="flex-1 text-left">
              <span className="block">Telegram</span>
              <span className="block text-xs opacity-90">{PHONE_NUMBER}</span>
            </span>
            <ArrowRight className="h-5 w-5" />
          </a>

          <a
            href={TEL_LINK}
            className="flex items-center gap-3 w-full rounded-2xl bg-primary text-primary-foreground px-4 py-3 font-medium shadow-soft hover:brightness-110 transition"
          >
            <span className="h-10 w-10 rounded-full bg-white/15 grid place-items-center">
              <Phone className="h-5 w-5" />
            </span>
            <span className="flex-1 text-left">
              <span className="block">Call Directly</span>
              <span className="block text-xs opacity-90">{PHONE_NUMBER}</span>
            </span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openBooking = () => setModalOpen(true);
  const closeBooking = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-[oklch(0.985_0.005_90)] pb-28">
      {/* 1. Header: Logo on left, Call Us button on right, NO center navbar links */}
      <header className="sticky top-0 z-40 pt-3 px-3">
        <div className="mx-auto max-w-5xl bg-background rounded-3xl shadow-card px-4 py-3 flex items-center justify-between">
          <img
            src={LOGO}
            alt="Ethiomassage — Relax. Renew. Rejuvenate."
            width={1536}
            height={512}
            className="h-12 md:h-14 w-auto object-contain"
          />
          <a
            href={TEL_LINK}
            aria-label="Call us"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-soft hover:scale-105 transition"
          >
            <Phone className="h-4 w-4" />
            <span>Call Us</span>
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative px-3 mt-4">
        <div className="mx-auto max-w-5xl bg-background rounded-3xl overflow-hidden shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-6 md:p-10 flex flex-col justify-center animate-fade-up">
              <h1 className="font-display leading-[1.05]">
                <span className="block text-4xl md:text-5xl font-bold text-foreground">
                  Professional
                </span>
                <span className="block text-4xl md:text-5xl font-bold text-accent mt-1">
                  Massage Therapy
                </span>
                <span className="block font-script text-3xl md:text-4xl text-primary mt-2 relative w-fit">
                  Where You Are
                  <span className="absolute -bottom-1 left-0 h-[3px] w-24 bg-accent rounded-full"></span>
                </span>
              </h1>
              <p className="mt-6 text-foreground/80 text-base md:text-lg leading-snug">
                Indoor &amp; Outdoor<br />Massage Services
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={openBooking}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-2 py-2 font-medium shadow-soft hover:bg-primary/90 transition cursor-pointer"
                >
                  Book Now
                  <span className="h-7 w-7 rounded-full bg-background text-primary grid place-items-center group-hover:translate-x-0.5 transition">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
                <a
                  href={TEL_LINK}
                  className="inline-flex items-center gap-2 rounded-full bg-background border-2 border-accent text-accent px-5 py-2 font-medium hover:bg-accent/5 transition"
                >
                  Call Us <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Hero Image Slider: Only clean environment photos, all massage photos removed */}
            <div className="relative h-72 md:h-auto md:min-h-[420px]">
              <HeroSlider />
              <div className="md:hidden absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
            </div>
          </div>

          {/* SVG Wave */}
          <svg viewBox="0 0 600 60" className="block w-full" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,30 C150,70 300,0 600,40 L600,60 L0,60 Z" fill="oklch(0.42 0.07 175)"></path>
            <path d="M0,45 C200,15 400,55 600,30 L600,60 L0,60 Z" fill="oklch(0.72 0.12 80)" opacity="0.85"></path>
          </svg>
        </div>
      </section>

      {/* 3. Our Services (Sports Massage completely removed per Rule 2) */}
      <section className="px-3 mt-6">
        <div className="mx-auto max-w-5xl bg-background rounded-3xl shadow-card p-5 md:p-8">
          <SectionTitle>Our Services</SectionTitle>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map(({ icon: Icon, name }) => (
              <button
                key={name}
                onClick={openBooking}
                className="basis-[calc(33.333%-0.5rem)] md:basis-[calc(20%-0.6rem)] bg-background border border-border/60 rounded-2xl shadow-card p-3 flex flex-col items-center text-center hover:-translate-y-0.5 hover:shadow-soft transition cursor-pointer"
              >
                <Icon className="h-7 w-7 text-primary" strokeWidth={1.8} />
                <p className="mt-2 text-[11px] md:text-sm font-medium text-foreground leading-tight">
                  {name}
                </p>
              </button>
            ))}
          </div>
          <div className="mt-5 text-center">
            <button
              onClick={openBooking}
              className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all cursor-pointer"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Indoor & Outdoor Section: Exact original text and environment photos */}
      <section className="px-3 mt-5">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: 'Indoor Massage',
              sub: 'We come to your Home or Hotel',
              img: INDOOR_ROOM,
              Icon: House,
            },
            {
              title: 'Outdoor Massage',
              sub: 'Garden, Event or Open Space',
              img: OUTDOOR_GAZEBO,
              Icon: TreePine,
            },
          ].map(({ title, sub, img, Icon }) => (
            <article
              key={title}
              className="relative rounded-3xl overflow-hidden shadow-card h-72 group"
            >
              <img
                src={img}
                alt={title}
                width={1024}
                height={1024}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20"></div>
              <div className="absolute top-4 left-4 h-12 w-12 rounded-full bg-background grid place-items-center shadow-card">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="font-display text-2xl font-semibold">{title}</h3>
                <p className="text-sm mt-1 opacity-90">{sub}</p>
                <button
                  onClick={openBooking}
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground pl-4 pr-1.5 py-1.5 font-medium text-sm hover:brightness-105 transition cursor-pointer"
                >
                  Book Now
                  <span className="h-6 w-6 rounded-full bg-background/95 text-accent grid place-items-center">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Why Choose Ethiomassage? (Exact 6 original items with zero extra subtext) */}
      <section className="px-3 mt-7">
        <div className="mx-auto max-w-5xl">
          <SectionTitle>Why Choose Ethiomassage?</SectionTitle>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {whyChooseItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-cream grid place-items-center shadow-card">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
                </div>
                <p className="mt-2 text-[11px] md:text-sm font-medium text-foreground leading-tight max-w-[6rem]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Therapists: Exact name, photo, and 5.0 rating only */}
      <section className="px-3 mt-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Our Therapists
            </h2>
            <button
              onClick={openBooking}
              className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all cursor-pointer"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {therapists.map(({ name, img }) => (
              <article
                key={name}
                className="bg-background rounded-2xl overflow-hidden shadow-card hover:-translate-y-0.5 transition"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={img}
                    alt={`${name} — professional spa therapist`}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-2.5 text-center">
                  <p className="font-semibold text-sm text-foreground">{name}</p>
                  <div className="mt-1 flex items-center justify-center gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                    ))}
                    <span className="ml-1 text-[11px] text-muted-foreground">5.0</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. What Our Clients Say (Exact 6 original reviews) */}
      <section className="px-3 mt-8">
        <div className="mx-auto max-w-5xl">
          <SectionTitle>What Our Clients Say</SectionTitle>
          <TestimonialsSection />
        </div>
      </section>

      {/* 7. Floating Action Buttons: Sticky Telegram and WhatsApp fixed at bottom */}
      <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-2 items-end">
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label="Book via Telegram"
          className="inline-flex items-center gap-2 rounded-full bg-[#229ED9] text-white pl-2 pr-4 py-2 shadow-soft hover:scale-105 transition"
        >
          <span className="h-9 w-9 rounded-full bg-white/15 grid place-items-center">
            <Send className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold leading-tight">Telegram</span>
        </a>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label="Book via WhatsApp"
          className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-white pl-2 pr-4 py-2 shadow-soft hover:scale-105 transition"
        >
          <span className="h-9 w-9 rounded-full bg-white/15 grid place-items-center">
            <MessageCircle className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold leading-tight">WhatsApp</span>
        </a>
      </div>

      {/* Bottom Floating Navigation Bar */}
      <nav className="fixed bottom-3 left-3 right-3 z-40">
        <div className="mx-auto max-w-md bg-background rounded-full shadow-soft border border-border/60 px-3 py-2 grid grid-cols-4">
          {[
            {
              Icon: House,
              label: 'Home',
              active: true,
              onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
            },
            { Icon: HandHeart, label: 'Services', onClick: openBooking },
            { Icon: CalendarDays, label: 'Booking', onClick: openBooking },
            { Icon: Phone, label: 'Contact', onClick: openBooking },
          ].map(({ Icon, label, active, onClick }) => (
            <button
              key={label}
              onClick={onClick}
              className={`flex flex-col items-center gap-0.5 py-1 cursor-pointer ${
                active ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? 'fill-primary/10' : ''}`} />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Booking Modal (Original Clean Version) */}
      <BookingModal open={modalOpen} onClose={closeBooking} />
    </div>
  );
}
