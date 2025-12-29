import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Старт',
    price: 'от 30 000 ₽',
    description: 'Для небольших задач и пилотных проектов',
    features: [
      'До 3 интеграций',
      'Базовый Telegram-бот',
      'Документация',
      '2 недели поддержки',
      'Исходный код вам',
    ],
    highlighted: false,
  },
  {
    name: 'Бизнес',
    price: 'от 80 000 ₽',
    description: 'Комплексная автоматизация процессов',
    features: [
      'До 10 интеграций',
      'Сложные сценарии',
      'Telegram-бот с панелью',
      'Обучение команды',
      '1 месяц поддержки',
      'Приоритетная связь',
    ],
    highlighted: true,
  },
  {
    name: 'Партнёрство',
    price: 'от 150 000 ₽',
    description: 'Долгосрочное развитие и масштабирование',
    features: [
      'Неограниченные интеграции',
      'Архитектурный аудит',
      'CI/CD пайплайны',
      'SLA 99.9%',
      'Выделенная поддержка',
      'Ежемесячные ревью',
    ],
    highlighted: false,
  },
];

export const Pricing = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="section-padding relative">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Тарифы и <span className="gradient-text">стоимость</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Гибкие варианты под разный масштаб задач
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass-card p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.highlighted 
                  ? 'border-primary/50 shadow-lg shadow-primary/10' 
                  : 'hover:border-primary/30'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Популярный
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="text-3xl font-bold gradient-text">{plan.price}</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlighted ? 'hero' : 'outline'} 
                className="w-full"
                onClick={scrollToContact}
              >
                Выбрать
              </Button>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground bg-secondary/50 inline-block px-6 py-3 rounded-full">
            💡 Итоговая стоимость зависит от сложности и объёма задачи. 
            Обсудим детали на бесплатной консультации.
          </p>
        </div>
      </div>
    </section>
  );
};
