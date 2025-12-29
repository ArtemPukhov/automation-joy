import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
    agreed: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Укажите ваше имя';
    }
    
    if (!formData.contact.trim()) {
      newErrors.contact = 'Укажите способ связи';
    } else if (
      !formData.contact.includes('@') && 
      !formData.contact.match(/^[\d\s\+\-\(\)]+$/) &&
      !formData.contact.startsWith('@')
    ) {
      newErrors.contact = 'Укажите email, телефон или Telegram';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Опишите вашу задачу';
    }
    
    if (!formData.agreed) {
      newErrors.agreed = 'Необходимо согласие';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: 'Заявка отправлена!',
      description: 'Свяжусь с вами в течение 24 часов',
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding relative bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass-card p-12">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Спасибо за заявку!</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Я свяжусь с вами в течение 24 часов, чтобы обсудить вашу задачу.
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', contact: '', message: '', agreed: false });
                }}
              >
                Отправить ещё одну заявку
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding relative bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left side - Text */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Готовы <span className="gradient-text">автоматизировать?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Расскажите о своей задаче — обсудим детали и найдём оптимальное решение. 
                Первая консультация бесплатно.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/80">Отвечаю в течение 24 часов</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/80">Бесплатная оценка проекта</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/80">Честно скажу, если задача не моя</span>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email, телефон или Telegram
                  </label>
                  <Input
                    placeholder="Как с вами связаться?"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className={errors.contact ? 'border-destructive' : ''}
                  />
                  {errors.contact && (
                    <p className="text-sm text-destructive mt-1">{errors.contact}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Кратко о задаче
                  </label>
                  <Textarea
                    placeholder="Что хотите автоматизировать? Какие сервисы используете?"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={errors.message ? 'border-destructive' : ''}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy"
                    checked={formData.agreed}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, agreed: checked as boolean })
                    }
                    className={errors.agreed ? 'border-destructive' : ''}
                  />
                  <label 
                    htmlFor="privacy" 
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    Согласен на обработку персональных данных в соответствии с{' '}
                    <a href="#" className="text-primary hover:underline">
                      политикой конфиденциальности
                    </a>
                  </label>
                </div>
                {errors.agreed && (
                  <p className="text-sm text-destructive -mt-4">{errors.agreed}</p>
                )}

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Отправляю...
                    </>
                  ) : (
                    <>
                      Отправить заявку
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
