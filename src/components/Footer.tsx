import { Mail, Send } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div>
            <a href="#" className="flex items-center gap-2 text-xl font-bold mb-4">
              <span className="gradient-text">Auto</span>
              <span className="text-foreground">Flow</span>
            </a>
            <p className="text-muted-foreground text-sm">
              Автоматизация бизнес-процессов, Telegram-боты и интеграции под ваши задачи.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href="mailto:artemm2006@list.ru"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@example.com
              </a>
              <a
                href="https://t.me/artempuh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Send className="w-4 h-4" />
                @yourhandle
              </a>
            </div>
          </div>

          {/* Response time */}
          <div>
            <h4 className="font-semibold mb-4">Время ответа</h4>
            <p className="text-muted-foreground text-sm">
              Обычно отвечаю в течение 2–4 часов в рабочие дни. По срочным вопросам — пишите в Telegram.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AutoFlow. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

