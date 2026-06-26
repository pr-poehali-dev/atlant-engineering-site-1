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

const reviews = [
  {
    name: 'Андрей Михайлович К.',
    role: 'Директор девелоперской компании',
    text: 'Обратились в «Атлант Инжиниринг» для технического надзора над строительством офисного здания в Минске. Команда выявила нарушения на этапе фундамента, которые могли обойтись нам в миллионы рублей переделок. Профессиональный подход, оперативная отчётность. Лучший подрядчик по техническому надзору, с которым я работал за 15 лет в строительстве.',
    stars: 5,
  },
  {
    name: 'Елена Витальевна С.',
    role: 'Финансовый директор строительного холдинга',
    text: 'Сотрудничаем с «Атлант Инжиниринг» по управлению строительством жилого комплекса III класса сложности. Сроки соблюдены, бюджет под контролем — отклонение менее 2%. Это редкость на рынке. Однозначно рекомендую как лучшую компанию по управлению строительством в Беларуси.',
    stars: 5,
  },
  {
    name: 'Игорь Петрович Д.',
    role: 'Технический директор промышленного предприятия',
    text: 'Привлекали «Атлант Инжиниринг» для экспертизы и сметного контроля при реконструкции производственного корпуса. Специалисты нашли завышение смет на 18% и предложили решения без потери качества. Компания заслуженно считается одной из лучших в сфере технадзора и строительного контроля в Республике Беларусь.',
    stars: 5,
  },
  {
    name: 'Сергей Алексеевич В.',
    role: 'Генеральный директор управляющей компании',
    text: 'Работаем с «Атлант Инжиниринг» уже на третьем объекте. Каждый раз — прозрачная отчётность, чёткая координация подрядчиков и своевременный ввод в эксплуатацию. Профессионалы своего дела. Если вам нужна лучшая компания по техническому надзору в Минске — это «Атлант Инжиниринг».',
    stars: 5,
  },
];

export default function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5">
            <span className="grid place-items-center w-9 h-9 bg-primary text-primary-foreground rounded-lg glow">
              <Icon name="Mountain" size={20} />
            </span>
            <span className="font-display font-semibold text-lg tracking-wide leading-none">
              АТЛАНТ<span className="text-primary"> ИНЖИНИРИНГ</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#certificates" className="hover:text-primary transition-colors">Сертификаты</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <a href={PHONE_HREF} className="hidden sm:flex items-center gap-2 font-medium text-sm hover:text-primary transition-colors">
            <Icon name="Phone" size={16} />
            {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Строительство" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="blob w-[600px] h-[600px] -top-40 -right-40 bg-primary/25 animate-glow-pulse" />
        <div className="blob w-[500px] h-[500px] bottom-0 -left-40 bg-accent/15 animate-float" />
        <div className="absolute inset-0 grid-texture" />

        <div className="container relative z-10 pt-28 pb-16">
          <div className="max-w-3xl">
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 mb-7 glass rounded-full text-xs font-medium tracking-widest uppercase text-primary">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-glow-pulse" />
              Управление строительством в Беларуси
            </div>
            <h1 className="animate-fade-up font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight" style={{ animationDelay: '0.1s' }}>
              <span className="text-gradient">Надёжный контроль</span>
              <br />
              на каждом этапе стройки
            </h1>
            <p className="animate-fade-up mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Комплексное управление строительством и независимый технический надзор. Аттестат III класса сложности, более 10 лет опыта и 30+ реализованных проектов.
            </p>
            <div className="animate-fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold tracking-wide h-13 px-8 glow hover-scale">
                <a href="#contacts">Получить консультацию</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-13 px-8 border-border bg-card/40 backdrop-blur hover:bg-card hover:text-primary">
                <a href="#services">Наши услуги</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-float">
          <Icon name="ChevronsDown" size={26} />
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-20 z-20">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden glass">
            {stats.map((s, i) => (
              <div key={s.label} className="py-10 px-4 text-center bg-card/60 hover:bg-card transition-colors animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="font-display font-bold text-4xl lg:text-5xl text-gradient">{s.value}</div>
                <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 relative">
        <div className="blob w-[450px] h-[450px] top-20 -right-32 bg-primary/10" />
        <div className="container relative grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="font-display text-primary text-sm tracking-widest uppercase">О компании</span>
            <h2 className="mt-3 font-display font-bold text-4xl lg:text-5xl leading-tight">
              Инженерный партнёр для <span className="text-gradient">ответственных объектов</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              «Атлант Инжиниринг» — белорусская компания, специализирующаяся на комплексном управлении строительством и техническом надзоре. Более 10 лет мы защищаем интересы заказчиков, обеспечивая качество, соблюдение сроков и контроль бюджета.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Наличие аттестата III класса сложности и опыт реализации более 30 проектов позволяют нам сопровождать объекты любого масштаба — от жилых комплексов до промышленных и коммерческих зданий.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {advantages.map((a, i) => (
              <div key={a.title} className="group glass p-6 rounded-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="grid place-items-center w-12 h-12 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name={a.icon} size={22} />
                </div>
                <h3 className="mt-4 font-display font-semibold text-lg">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 relative bg-secondary/40">
        <div className="container">
          <div className="max-w-2xl">
            <span className="font-display text-primary text-sm tracking-widest uppercase">Услуги</span>
            <h2 className="mt-3 font-display font-bold text-4xl lg:text-5xl leading-tight">
              Полный цикл <span className="text-gradient">инженерного сопровождения</span>
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="group relative glass p-8 rounded-2xl overflow-hidden hover:border-primary/50 transition-all">
                <span className="absolute -top-2 right-6 font-display font-bold text-7xl text-foreground/5 group-hover:text-primary/20 transition-colors">
                  0{i + 1}
                </span>
                <div className="grid place-items-center w-14 h-14 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-xl glow">
                  <Icon name={s.icon} size={26} />
                </div>
                <h3 className="mt-6 font-display font-semibold text-xl">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-28 relative">
        <div className="blob w-[400px] h-[400px] top-40 left-1/2 -translate-x-1/2 bg-accent/10" />
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-display text-primary text-sm tracking-widest uppercase">Документы</span>
            <h2 className="mt-3 font-display font-bold text-4xl lg:text-5xl leading-tight">
              Сертификаты, лицензии и <span className="text-gradient">награды</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Деятельность компании подтверждена всеми необходимыми разрешительными документами.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {certificates.map((c, i) => (
              <div key={c.title} className="group glass p-8 rounded-2xl text-center hover:-translate-y-1.5 transition-all animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="mx-auto grid place-items-center w-16 h-16 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name={c.icon} size={30} />
                </div>
                <h3 className="mt-5 font-display font-semibold text-xl">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-28 relative bg-secondary/40">
        <div className="blob w-[500px] h-[500px] top-0 -left-32 bg-primary/10" />
        <div className="container relative">
          <div className="max-w-2xl">
            <span className="font-display text-primary text-sm tracking-widest uppercase">Отзывы клиентов</span>
            <h2 className="mt-3 font-display font-bold text-4xl lg:text-5xl leading-tight">
              Нам доверяют <span className="text-gradient">серьёзные объекты</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Реальные отзывы заказчиков об управлении строительством и техническом надзоре в Беларуси.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div key={r.name} className="group glass p-8 rounded-2xl hover:border-primary/40 hover:-translate-y-1 transition-all animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: r.stars }).map((_, s) => (
                    <Icon key={s} name="Star" size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">«{r.text}»</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                  <div className="grid place-items-center w-10 h-10 rounded-full bg-primary/15 text-primary font-display font-bold text-lg">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-28 relative overflow-hidden">
        <div className="blob w-[600px] h-[600px] -bottom-40 -right-40 bg-primary/20" />
        <div className="absolute inset-0 grid-texture" />
        <div className="container relative grid lg:grid-cols-2 gap-14">
          <div>
            <span className="font-display text-primary text-sm tracking-widest uppercase">Контакты</span>
            <h2 className="mt-3 font-display font-bold text-4xl lg:text-5xl leading-tight">
              Обсудим <span className="text-gradient">ваш проект</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
              Оставьте заявку — мы свяжемся с вами, проконсультируем и предложим оптимальное решение для вашего объекта.
            </p>
            <div className="mt-10 space-y-5">
              <a href={PHONE_HREF} className="flex items-center gap-4 group">
                <span className="grid place-items-center w-12 h-12 bg-primary text-primary-foreground rounded-xl glow">
                  <Icon name="Phone" size={20} />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Телефон</div>
                  <div className="font-display font-semibold text-lg group-hover:text-primary transition-colors">{PHONE}</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <span className="grid place-items-center w-12 h-12 glass text-primary rounded-xl">
                  <Icon name="MapPin" size={20} />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Адрес офиса</div>
                  <div className="font-medium">г. Минск, ул. Комсомольская, 3</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl glow">
            {sent ? (
              <div className="h-full grid place-items-center text-center py-10">
                <div>
                  <div className="mx-auto grid place-items-center w-16 h-16 bg-primary/15 text-primary rounded-full">
                    <Icon name="Check" size={30} />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-xl">Заявка отправлена</h3>
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
                <h3 className="font-display font-semibold text-xl">Оставить заявку</h3>
                <Input required placeholder="Ваше имя" className="rounded-xl h-12 bg-background/50" />
                <Input required type="tel" placeholder="Телефон" className="rounded-xl h-12 bg-background/50" />
                <Textarea placeholder="Кратко о вашем проекте" className="rounded-xl min-h-28 bg-background/50" />
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold tracking-wide h-12 glow">
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
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-7 h-7 bg-primary text-primary-foreground rounded-lg">
              <Icon name="Mountain" size={16} />
            </span>
            <span className="font-display font-semibold text-foreground tracking-wide">АТЛАНТ ИНЖИНИРИНГ</span>
          </div>
          <span>© {new Date().getFullYear()} Все права защищены</span>
        </div>
      </footer>
    </div>
  );
}