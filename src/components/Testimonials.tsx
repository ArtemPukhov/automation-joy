import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: 'За 2 недели автоматизировали то, что планировали делать полгода. Теперь менеджеры занимаются продажами, а не копированием данных между системами.',
    author: 'Руководитель отдела продаж',
    company: 'E-commerce, 50+ сотрудников',
  },
  {
    text: 'Бот для поддержки окупился за первый месяц. Клиенты довольны скоростью ответов, а мы сократили штат поддержки и не потеряли в качестве.',
    author: 'Директор по операциям',
    company: 'SaaS-сервис',
  },
  {
    text: 'Подкупила честность: сразу сказал, что некоторые наши хотелки не стоят своих денег, и предложил более простое решение. Работает уже год без сбоев.',
    author: 'Владелец бизнеса',
    company: 'Оптовая торговля',
  },
  {
    text: 'Интеграция склада с сайтом — это магия. Раньше каждое утро начиналось с разбора «почему продали то, чего нет». Теперь этой проблемы просто не существует.',
    author: 'Руководитель склада',
    company: 'Интернет-магазин',
  },
  {
    text: 'Ценю, что всегда на связи и решает вопросы быстро. Даже когда мы сами накосячили с данными — помог разобраться и восстановить.',
    author: 'IT-директор',
    company: 'Производственная компания',
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding relative bg-secondary/30">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Что говорят <span className="gradient-text">клиенты</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Отзывы тех, кто уже автоматизировал свои процессы
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card p-8 hover:border-primary/30 transition-all duration-300 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
