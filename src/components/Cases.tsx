import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const cases = [
  {
    id: 1,
    title: 'Автоматизация обработки заказов',
    category: 'E-commerce',
    task: 'Менеджеры тратили 3+ часа в день на ручной перенос заказов из маркетплейсов в 1С и CRM',
    solution: 'Настроил интеграцию через n8n: заказы автоматически попадают в 1С, создаётся карточка клиента в CRM, отправляется SMS-подтверждение',
    result: 'Экономия 60+ часов в месяц, ноль ошибок при переносе данных, NPS вырос на 15%',
    details: 'Использовал webhooks для получения заказов в реальном времени. Добавил валидацию данных и автоматическую обработку ошибок с уведомлением в Telegram. Интеграция работает 24/7 без участия человека.'
  },
  {
    id: 2,
    title: 'Telegram-бот для службы поддержки',
    category: 'Поддержка',
    task: 'Клиенты ждали ответа по 4-6 часов, менеджеры не успевали обрабатывать поток обращений',
    solution: 'Разработал бота с маршрутизацией по темам, FAQ-базой и эскалацией на живого оператора',
    result: 'Среднее время ответа сократилось до 5 минут, 70% вопросов решаются ботом автоматически',
    details: 'Бот интегрирован с базой знаний компании и CRM. Автоматически определяет тему обращения, подбирает релевантные статьи, при необходимости создаёт тикет и назначает ответственного менеджера.'
  },
  {
    id: 3,
    title: 'Синхронизация склада и сайта',
    category: 'Склад',
    task: 'Остатки на сайте расходились с реальными, клиенты заказывали товар, которого нет',
    solution: 'Двусторонняя синхронизация между 1С и сайтом каждые 5 минут с логированием всех изменений',
    result: 'Актуальность остатков 99.9%, отмены по причине «нет на складе» снизились на 95%',
    details: 'Реализовал буферную таблицу для сглаживания пиковых нагрузок. Добавил мониторинг расхождений и автоматические алерты при критических изменениях остатков.'
  },
  {
    id: 4,
    title: 'Автоматизация документооборота',
    category: 'Документы',
    task: 'Подготовка договоров и счетов занимала до 2 дней, часто с ошибками в реквизитах',
    solution: 'Шаблонизация документов + автозаполнение из CRM + отправка на подпись через API',
    result: 'Документы готовы за 2 минуты, ошибки исключены, подписание ускорилось в 10 раз',
    details: 'Интегрировал сервис электронной подписи. Документы автоматически сохраняются в облаке с правильной структурой папок и нумерацией.'
  },
  {
    id: 5,
    title: 'Парсинг цен конкурентов',
    category: 'Аналитика',
    task: 'Мониторинг цен 5000+ SKU у 10 конкурентов занимал целую неделю',
    solution: 'Автоматический парсер с ночным сбором данных и утренним отчётом с аномалиями',
    result: 'Данные обновляются ежедневно, реакция на изменения цен сократилась с недели до часов',
    details: 'Парсер умеет обходить защиту от ботов, работает через прокси. Отчёт приходит в Telegram с выделением значимых изменений и рекомендациями по ценообразованию.'
  },
  {
    id: 6,
    title: 'HR-автоматизация онбординга',
    category: 'HR',
    task: 'Новому сотруднику требовалось 3-5 дней на получение всех доступов и материалов',
    solution: 'Workflow: создание учёток, рассылка welcome-пакета, чек-лист задач, напоминания',
    result: 'Онбординг занимает 4 часа, HR экономит 8+ часов на каждом новом сотруднике',
    details: 'При добавлении сотрудника в HR-систему автоматически создаются учётные записи во всех сервисах, назначается наставник, отправляется персонализированное приветствие.'
  },
];

export const Cases = () => {
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null);

  return (
    <section id="cases" className="section-padding relative">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Реализованные <span className="gradient-text">кейсы</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные примеры автоматизаций с измеримым результатом
          </p>
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="glass-card-hover p-6 cursor-pointer group"
              onClick={() => setSelectedCase(caseItem)}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {caseItem.category}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
                {caseItem.title}
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Задача: </span>
                  <span className="text-foreground/80 line-clamp-2">{caseItem.task}</span>
                </div>
                <div>
                  <span className="text-primary font-medium">Результат: </span>
                  <span className="text-foreground/80 line-clamp-2">{caseItem.result}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border/50 flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                Подробнее
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCase && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedCase(null)}
        >
          <div 
            className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {selectedCase.category}
                </span>
                <h3 className="text-2xl font-bold mt-3">{selectedCase.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedCase(null)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Задача
                </h4>
                <p className="text-foreground/90">{selectedCase.task}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Решение
                </h4>
                <p className="text-foreground/90">{selectedCase.solution}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Детали реализации
                </h4>
                <p className="text-foreground/90">{selectedCase.details}</p>
              </div>
              
              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                  Результат
                </h4>
                <p className="text-foreground font-medium">{selectedCase.result}</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                variant="hero" 
                className="w-full"
                onClick={() => {
                  setSelectedCase(null);
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Хочу такую же автоматизацию
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
