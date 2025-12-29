import { 
  Plug, 
  Bot, 
  ShoppingCart, 
  Database, 
  Bell, 
  GitBranch 
} from 'lucide-react';

const services = [
  {
    icon: Plug,
    title: 'Интеграции сервисов',
    description: 'Связываю CRM, ERP, склад, 1С, Битрикс24, amoCRM и любые другие системы через API',
  },
  {
    icon: Bot,
    title: 'Telegram-боты',
    description: 'Боты для уведомлений, сбора заявок, внутренней коммуникации и работы с клиентами',
  },
  {
    icon: ShoppingCart,
    title: 'Автоматизация продаж',
    description: 'Обработка заказов, воронки, автоответы, сегментация клиентов и follow-up цепочки',
  },
  {
    icon: Database,
    title: 'Парсинг и ETL',
    description: 'Сбор данных с сайтов, обработка, трансформация и загрузка в ваши системы',
  },
  {
    icon: Bell,
    title: 'Уведомления и отчёты',
    description: 'Автоматические дайджесты, алерты об ошибках, регулярные отчёты в нужном формате',
  },
  {
    icon: GitBranch,
    title: 'CI/CD для интеграций',
    description: 'Версионирование, тестирование и безопасное развёртывание ваших автоматизаций',
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding relative bg-secondary/30">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Что я <span className="gradient-text">автоматизирую</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг для цифровой трансформации вашего бизнеса
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card-hover p-8 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
