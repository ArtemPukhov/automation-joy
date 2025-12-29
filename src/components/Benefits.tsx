import { Clock, AlertTriangle, Unplug, Eye, Zap, Shield, BarChart3 } from 'lucide-react';

const painPoints = [
  {
    icon: Clock,
    title: 'Ручные операции',
    description: 'Часы уходят на копирование данных между системами и таблицами',
    type: 'pain'
  },
  {
    icon: AlertTriangle,
    title: 'Ошибки людей',
    description: 'Опечатки, пропущенные заявки, дублирование данных',
    type: 'pain'
  },
  {
    icon: Unplug,
    title: 'Разрозненные сервисы',
    description: 'CRM, склад, мессенджеры, почта — ничего не связано',
    type: 'pain'
  },
  {
    icon: Eye,
    title: 'Нет прозрачности',
    description: 'Непонятно, на каком этапе заказ и кто за что отвечает',
    type: 'pain'
  },
];

const benefits = [
  {
    icon: Zap,
    title: 'Скорость',
    description: 'Процессы выполняются за секунды вместо часов',
  },
  {
    icon: Shield,
    title: 'Качество',
    description: 'Нулевой процент ошибок в автоматизированных задачах',
  },
  {
    icon: BarChart3,
    title: 'Контроль',
    description: 'Полная видимость всех процессов в реальном времени',
  },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="section-padding relative">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            От <span className="text-destructive/80">хаоса</span> к{' '}
            <span className="gradient-text">системе</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Знакомые проблемы? Автоматизация решает их раз и навсегда
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {painPoints.map((item, index) => (
            <div
              key={item.title}
              className="glass-card-hover p-6 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <item.icon className="w-6 h-6 text-destructive/80" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Divider with arrow */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="mx-8 w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Benefits */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Результат автоматизации
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div
              key={item.title}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
