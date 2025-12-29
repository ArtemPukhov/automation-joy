import { MessageSquare, Lightbulb, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Бриф и анализ',
    description: 'Обсуждаем вашу задачу, изучаю процессы, выявляю узкие места и точки автоматизации',
    duration: '1-2 дня',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Прототип',
    description: 'Проектирую решение, согласовываем архитектуру, делаю первую рабочую версию',
    duration: '3-7 дней',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Внедрение',
    description: 'Разворачиваю решение, тестирую на реальных данных, обучаю команду',
    duration: '5-14 дней',
  },
  {
    icon: HeartHandshake,
    number: '04',
    title: 'Сопровождение',
    description: 'Мониторинг работы, оперативное исправление, доработки по обратной связи',
    duration: 'Постоянно',
  },
];

export const Process = () => {
  return (
    <section id="process" className="section-padding relative bg-secondary/30">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Как <span className="gradient-text">работаем</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Прозрачный процесс от идеи до работающего решения
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
              >
                <div className="glass-card p-8 h-full hover:border-primary/30 transition-all duration-300 group">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mt-2 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  
                  {/* Duration */}
                  <div className="inline-flex items-center px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground">
                    ⏱ {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
