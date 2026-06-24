import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/0c4a4ea0-8d03-4b3d-a96c-f44a855ceeda/files/9f467d89-f09c-4d75-81b8-608f4e981b0f.jpg';

const PHONE = '+375 29 356-45-16';
const PHONE_HREF = 'tel:+375293564516';

const stats = [
  { value: '10+', label: 'лет на рынке' },
  { value: '30+', label: 'реализованных проектов' },
  { value: 'III', label: 'класс сложности' },
  { value: '100%', label: 'сданных объектов в срок' },
];

const services = [
  {
    icon: 'Building2',
    title: 'Управление строительством',
    text: 'Комплексное сопровождение проекта от концепции до ввода в эксплуатацию: планирование, бюджет, координация подрядчиков и контроль сроков.',
  },
  {
    icon: 'ClipboardCheck',
    title: 'Технический надзор',
    text: 'Независимый контроль качества, объёмов и стоимости строительно-монтажных работ на каждом этапе в соответствии с нормами и проектом.',
  },
  {
    icon: 'FileSearch',
    title: 'Экспертиза и аудит',
    text: 'Проверка проектной документации, оценка соответствия выполненных работ и технический аудит объектов любой сложности.',
  },
  {
    icon: 'Gauge',
    title: 'Сметный контроль',
    text: 'Проверка смет, контроль расходования средств и оптимизация затрат без потери качества и надёжности конструкций.',
  },
];

const advantages = [
  { icon: 'ShieldCheck', title: 'Аттестат III класса', text: 'Право выполнять функции технадзора на объектах соответствующей сложности.' },
  { icon: 'Award', title: 'Опыт более 10 лет', text: 'Команда инженеров с проверенной репутацией на рынке Беларуси.' },
  { icon: 'Users', title: '30+ объектов', text: 'Жилые, коммерческие и промышленные объекты, сданные в срок.' },
  { icon: 'Handshake', title: 'Прозрачность', text: 'Понятная отчётность и контроль каждого рубля на стройке.' },
];

const certificates = [
  { icon: 'BadgeCheck', title: 'Аттестат соответствия', text: 'III класс сложности на оказание услуг технического надзора.' },
  { icon: 'ScrollText', title: 'Лицензии', text: 'Действующие разрешения на инженерную деятельность в строительстве.' },
  { icon: 'Trophy', title: 'Награды и отзывы', text: 'Благодарности заказчиков за качество и соблюдение сроков.' },
];

export default function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-primary/90 border-b border-white/10">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 text-primary-foreground">
            <span className="grid place-items-center w-9 h-9 bg-accent text-accent-foreground rounded-sm">
              <Icon name="Mountain" size={20} />
            </span>
            <span className="font-display font-semibold text-lg tracking-wide leading-none">
              АТЛАНТ<span className="text-accent"> ИНЖИНИРИНГ</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/80">
            <a href="#about" className="hover:text-accent transition-colors">О компании</a>
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#certificates" className="hover:text-accent transition-colors">Сертификаты</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </nav>
          <a href={PHONE_HREF} className="hidden sm:flex items-center gap-2 text-primary-foreground font-medium text-sm hover:text-accent transition-colors">
            <Icon name="Phone" size={16} />
            {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Строительство" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        </div>
        <div className="container relative z-10 pt-28 pb-16">
          <div className="max-w-2xl">
            <div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-accent/40 text-accent text-xs font-medium tracking-widest uppercase rounded-sm">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Управление строительством в Беларуси
            </div>
            <h1 className="animate-fade-up font-display font-bold text-primary-foreground text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight" style={{ animationDelay: '0.1s' }}>
              Надёжный контроль на каждом этапе строительства
            </h1>
            <p className="animate-fade-up mt-6 text-lg text-primary-foreground/75 max-w-xl leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Комплексное управление строительством и независимый технический надзор. Аттестат III класса сложности, более 10 лет опыта и 30+ реализованных проектов.
            </p>
            <div className="animate-fade-up mt-9 flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm font-semibold tracking-wide h-12 px-7">
                <a href="#contacts">Получить консультацию</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-sm h-12 px-7 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="#services">Наши услуги</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary border-t border-white/10">
        <div className="container grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="py-9 px-4 text-center">
              <div className="font-display font-bold text-4xl lg:text-5xl text-accent">{s.value}</div>
              <div className="mt-2 text-sm text-primary-foreground/70 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 grid-texture opacity-40" />
        <div className="container relative grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="font-display text-accent text-sm tracking-widest uppercase">О компании</span>
            <h2 className="mt-3 font-display font-bold text-3xl lg:text-4xl text-primary leading-tight">
              Инженерный партнёр, которому доверяют ответственные объекты
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              «Атлант Инжиниринг» — белорусская компания, специализирующаяся на комплексном управлении строительством и техническом надзоре. Более 10 лет мы защищаем интересы заказчиков, обеспечивая качество, соблюдение сроков и контроль бюджета.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Наличие аттестата III класса сложности и опыт реализации более 30 проектов позволяют нам сопровождать объекты любого масштаба — от жилых комплексов до промышленных и коммерческих зданий.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {advantages.map((a) => (
              <div key={a.title} className="bg-card border border-border p-6 rounded-sm hover:border-accent transition-colors">
                <div className="grid place-items-center w-11 h-11 bg-primary text-accent rounded-sm">
                  <Icon name={a.icon} size={22} />
                </div>
                <h3 className="mt-4 font-display font-semibold text-lg text-primary">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-secondary">
        <div className="container">
          <div className="max-w-2xl">
            <span className="font-display text-accent text-sm tracking-widest uppercase">Услуги</span>
            <h2 className="mt-3 font-display font-bold text-3xl lg:text-4xl text-primary leading-tight">
              Полный цикл инженерного сопровождения
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="group relative bg-card border border-border p-8 rounded-sm overflow-hidden hover:shadow-xl transition-all">
                <span className="absolute top-6 right-7 font-display font-bold text-5xl text-border/60 group-hover:text-accent/30 transition-colors">
                  0{i + 1}
                </span>
                <div className="grid place-items-center w-12 h-12 bg-primary text-accent rounded-sm">
                  <Icon name={s.icon} size={24} />
                </div>
                <h3 className="mt-5 font-display font-semibold text-xl text-primary">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-24">
        <div className="container">
          <div className="max-w-2xl">
            <span className="font-display text-accent text-sm tracking-widest uppercase">Документы</span>
            <h2 className="mt-3 font-display font-bold text-3xl lg:text-4xl text-primary leading-tight">
              Сертификаты, лицензии и награды
            </h2>
            <p className="mt-4 text-muted-foreground">
              Деятельность компании подтверждена всеми необходимыми разрешительными документами.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {certificates.map((c) => (
              <div key={c.title} className="bg-primary text-primary-foreground p-8 rounded-sm border-l-4 border-accent">
                <Icon name={c.icon} size={32} className="text-accent" />
                <h3 className="mt-5 font-display font-semibold text-xl">{c.title}</h3>
                <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-texture opacity-10" />
        <div className="container relative grid lg:grid-cols-2 gap-14">
          <div className="text-primary-foreground">
            <span className="font-display text-accent text-sm tracking-widest uppercase">Контакты</span>
            <h2 className="mt-3 font-display font-bold text-3xl lg:text-4xl leading-tight">
              Обсудим ваш проект
            </h2>
            <p className="mt-5 text-primary-foreground/70 max-w-md leading-relaxed">
              Оставьте заявку — мы свяжемся с вами, проконсультируем и предложим оптимальное решение для вашего объекта.
            </p>
            <div className="mt-9 space-y-5">
              <a href={PHONE_HREF} className="flex items-center gap-4 group">
                <span className="grid place-items-center w-11 h-11 bg-accent text-accent-foreground rounded-sm">
                  <Icon name="Phone" size={20} />
                </span>
                <div>
                  <div className="text-xs text-primary-foreground/60 uppercase tracking-wide">Телефон</div>
                  <div className="font-display font-semibold text-lg group-hover:text-accent transition-colors">{PHONE}</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <span className="grid place-items-center w-11 h-11 bg-white/10 text-accent rounded-sm">
                  <Icon name="MapPin" size={20} />
                </span>
                <div>
                  <div className="text-xs text-primary-foreground/60 uppercase tracking-wide">Регион работы</div>
                  <div className="font-medium">Республика Беларусь</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-sm">
            {sent ? (
              <div className="h-full grid place-items-center text-center py-10">
                <div>
                  <div className="mx-auto grid place-items-center w-14 h-14 bg-accent/15 text-accent rounded-full">
                    <Icon name="Check" size={28} />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-xl text-primary">Заявка отправлена</h3>
                  <p className="mt-2 text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <h3 className="font-display font-semibold text-xl text-primary">Оставить заявку</h3>
                <Input required placeholder="Ваше имя" className="rounded-sm h-12" />
                <Input required type="tel" placeholder="Телефон" className="rounded-sm h-12" />
                <Textarea placeholder="Кратко о вашем проекте" className="rounded-sm min-h-28" />
                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm font-semibold tracking-wide h-12">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/10 py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-primary-foreground/60 text-sm">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-7 h-7 bg-accent text-accent-foreground rounded-sm">
              <Icon name="Mountain" size={16} />
            </span>
            <span className="font-display font-semibold text-primary-foreground tracking-wide">АТЛАНТ ИНЖИНИРИНГ</span>
          </div>
          <span>© {new Date().getFullYear()} Все права защищены</span>
        </div>
      </footer>
    </div>
  );
}
