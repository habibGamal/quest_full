import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import AnimatedBackground from "@/Components/AnimatedBackground";
import WhatsAppFloat from "@/Components/WhatsAppFloat";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Mail, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/ui/accordion";
import { useTranslation } from 'react-i18next';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
import { PageProps } from '@/types';

const Contact = ({ flash }: { flash?: { success?: string; error?: string } }) => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState('');
  const { settings } = usePage<PageProps>().props;

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('contact.store'), {
      onSuccess: () => {
        reset();
        setSelectedService('');
      },
    });
  };
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: t('contactPage.info.email.title'),
      details: (settings.official_email as string) || t('contactPage.info.email.value'),
      description: t('contactPage.info.email.description'),
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: t('contactPage.info.phone.title'),
      details: (settings.whatsapp_number as string) || t('contactPage.info.phone.value'),
      description: t('contactPage.info.phone.description'),
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: t('contactPage.info.address.title'),
      details: t('contactPage.info.address.value'),
      description: t('contactPage.info.address.description'),
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: t('contactPage.info.hours.title'),
      details: t('contactPage.info.hours.details'),
      description: t('contactPage.info.hours.description'),
    },
  ];

  const faqs = [
    {
      question: t('contactPage.faq.question1'),
      answer: t('contactPage.faq.answer1'),
    },
    {
      question: t('contactPage.faq.question2'),
      answer: t('contactPage.faq.answer2'),
    },
    {
      question: t('contactPage.faq.question3'),
      answer: t('contactPage.faq.answer3'),
    },
    {
      question: t('contactPage.faq.question4'),
      answer: t('contactPage.faq.answer4'),
    },
    {
      question: t('contactPage.faq.question5'),
      answer: t('contactPage.faq.answer5'),
    },
    {
      question: t('contactPage.faq.question6'),
      answer: t('contactPage.faq.answer6'),
    },
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t('contactPage.hero.title')} <span className="text-gradient">{t('contactPage.hero.highlight')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            {t('contactPage.hero.description')}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-start">
            {/* Contact Form */}
            <Card className="p-8 animate-slide-up">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-3xl mb-4">{t('contactPage.form.title')}</CardTitle>
                <p className="text-muted-foreground">
                  {t('contactPage.form.subtitle')}
                </p>
              </CardHeader>
              <CardContent className="px-0">
                {flash?.success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">{flash.success}</p>
                  </div>
                )}
                {flash?.error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">{flash.error}</p>
                  </div>
                )}
                <form onSubmit={submit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contactPage.form.name')}</Label>
                    <Input
                      id="name"
                      placeholder={t('contactPage.form.namePlaceholder')}
                      value={data.name}
                      onChange={e => setData('name', e.target.value)}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('contactPage.form.phone')}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={t('contactPage.form.phonePlaceholder')}
                      value={data.phone}
                      onChange={e => setData('phone', e.target.value)}
                      className={errors.phone ? 'border-red-500' : ''}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{t('contactPage.form.company')}</Label>
                    <Input
                      id="company"
                      placeholder={t('contactPage.form.companyPlaceholder')}
                      value={data.company}
                      onChange={e => setData('company', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">{t('contactPage.form.service')}</Label>
                    <Select value={selectedService} onValueChange={(value) => { setSelectedService(value); setData('service', value); }}>
                      <SelectTrigger className={errors.service ? 'border-red-500' : ''}>
                        <SelectValue placeholder={t('contactPage.form.servicePlaceholder')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="socialManagement">{t('contactPage.form.services.socialManagement')}</SelectItem>
                        <SelectItem value="socialDesign">{t('contactPage.form.services.socialDesign')}</SelectItem>
                        <SelectItem value="mediaBuying">{t('contactPage.form.services.mediaBuying')}</SelectItem>
                        <SelectItem value="webDev">{t('contactPage.form.services.webDev')}</SelectItem>
                        <SelectItem value="mediaProduction">{t('contactPage.form.services.mediaProduction')}</SelectItem>
                        <SelectItem value="publicRelations">{t('contactPage.form.services.publicRelations')}</SelectItem>
                        <SelectItem value="contentCreation">{t('contactPage.form.services.contentCreation')}</SelectItem>
                        <SelectItem value="seo">{t('contactPage.form.services.seo')}</SelectItem>
                        <SelectItem value="other">{t('contactPage.form.services.other')}</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contactPage.form.message')}</Label>
                    <Textarea
                      id="message"
                      placeholder={t('contactPage.form.messagePlaceholder')}
                      className={`min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                      value={data.message}
                      onChange={e => setData('message', e.target.value)}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                  </div>
                  <Button type="submit" disabled={processing} className="btn-gradient w-full text-lg py-3">
                    {processing ? 'Sending...' : t('contactPage.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('contactPage.info.title')}</h2>
                <p className="text-muted-foreground mb-8">
                  {t('contactPage.info.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 card-hover">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-primary font-medium mb-1">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map */}
              <Card className="overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=30.237539291381836,31.45273780822754&z=17&hl=en&output=embed"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Quest Digital Marketing Location"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('contactPage.faq.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('contactPage.faq.subtitle')}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6">
                <AccordionTrigger className="py-6 hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('contactPage.cta.title')}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('contactPage.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient text-lg px-8 py-4">
              {t('contactPage.cta.primaryButton')}
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4">
              {t('contactPage.cta.secondaryButton')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;
