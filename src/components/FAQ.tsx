import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Насколько безопасно передавать вам доступы к системам?',
    answer: 'Безопасность — приоритет. Работаю через защищённые каналы, использую минимально необходимые права доступа. По запросу подписываю NDA. После завершения проекта удаляю все данные и доступы с вашего подтверждения.',
  },
  {
    question: 'Какие доступы вам понадобятся?',
    answer: 'Зависит от задачи: обычно это API-ключи интегрируемых сервисов, доступ к n8n/Make.com (если используем ваш инстанс), иногда — ограниченный доступ к базе данных только для чтения на этапе анализа.',
  },
  {
    question: 'Есть ли гарантия бесперебойной работы (SLA)?',
    answer: 'В тарифе «Партнёрство» — да, SLA 99.9% с финансовой ответственностью. В других тарифах гарантирую оперативную реакцию на инциденты в рамках периода поддержки.',
  },
  {
    question: 'Что входит в поддержку после внедрения?',
    answer: 'Мониторинг работы автоматизаций, исправление ошибок, мелкие доработки (до 2-3 часов), ответы на вопросы команды. Крупные доработки — отдельно по согласованию.',
  },
  {
    question: 'Как формируется стоимость проекта?',
    answer: 'Оцениваю после анализа задачи: количество интеграций, сложность логики, объём данных, требования к надёжности. Называю вилку после первого созвона и точную цену после брифа.',
  },
  {
    question: 'Что если у сервиса нет API?',
    answer: 'Варианты: парсинг веб-интерфейса (если это разрешено условиями сервиса), интеграция через email/webhooks, использование готовых коннекторов n8n/Make, или RPA-автоматизация как крайний случай.',
  },
  {
    question: 'Где физически размещается n8n / Make?',
    answer: 'По умолчанию использую облачные версии (Make.com, n8n.cloud). По вашему желанию могу развернуть n8n на вашем сервере (on-premise) или в выбранном вами облаке с полным контролем данных.',
  },
  {
    question: 'Как оформляем сотрудничество документально?',
    answer: 'Работаю как ИП, заключаем договор на оказание услуг с подробным ТЗ. Принимаю оплату по счёту, предоставляю закрывающие документы. При необходимости — NDA.',
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="section-padding relative">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Частые <span className="gradient-text">вопросы</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ответы на то, о чём чаще всего спрашивают
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-border/50 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
