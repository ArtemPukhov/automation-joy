import { Send } from 'lucide-react';

export const FloatingTelegramButton = () => {
  return (
    <a
      href="https://t.me/TaskLineChat_bot"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в Telegram"
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Send className="h-4 w-4" />
      <span className="hidden sm:inline">Написать в Telegram</span>
    </a>
  );
};
