import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import AnimatedBackground from "@/Components/AnimatedBackground";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Mail, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/ui/accordion";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: t('contactPage.info.email.title'),
      details: "hello@questagency.com",
      description: t('contactPage.info.email.description'),
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: t('contactPage.info.phone.title'),
      details: "+1 (555) 123-4567",
      description: t('contactPage.info.phone.description'),
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: t('contactPage.info.address.title'),
      details: "123 Creative Street, New York, NY 10001",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 animate-slide-up">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-3xl mb-4">{t('contactPage.form.title')}</CardTitle>
                <p className="text-muted-foreground">
                  {t('contactPage.form.subtitle')}
                </p>
              </CardHeader>
              <CardContent className="px-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t('contactPage.form.firstName')}</Label>
                      <Input id="firstName" placeholder={t('contactPage.form.firstNamePlaceholder')} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t('contactPage.form.lastName')}</Label>
                      <Input id="lastName" placeholder={t('contactPage.form.lastNamePlaceholder')} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contactPage.form.email')}</Label>
                    <Input id="email" type="email" placeholder={t('contactPage.form.emailPlaceholder')} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{t('contactPage.form.company')}</Label>
                    <Input id="company" placeholder={t('contactPage.form.companyPlaceholder')} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">{t('contactPage.form.service')}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t('contactPage.form.servicePlaceholder')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="branding">{t('contactPage.form.services.branding')}</SelectItem>
                        <SelectItem value="social">{t('contactPage.form.services.social')}</SelectItem>
                        <SelectItem value="advertising">{t('contactPage.form.services.advertising')}</SelectItem>
                        <SelectItem value="web">{t('contactPage.form.services.web')}</SelectItem>
                        <SelectItem value="content">{t('contactPage.form.services.content')}</SelectItem>
                        <SelectItem value="seo">{t('contactPage.form.services.seo')}</SelectItem>
                        <SelectItem value="other">{t('contactPage.form.services.other')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">{t('contactPage.form.budget')}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t('contactPage.form.budgetPlaceholder')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k-10k">{t('contactPage.form.budgetOptions.range1')}</SelectItem>
                        <SelectItem value="10k-25k">{t('contactPage.form.budgetOptions.range2')}</SelectItem>
                        <SelectItem value="25k-50k">{t('contactPage.form.budgetOptions.range3')}</SelectItem>
                        <SelectItem value="50k+">{t('contactPage.form.budgetOptions.range4')}</SelectItem>
                        <SelectItem value="discuss">{t('contactPage.form.budgetOptions.discuss')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contactPage.form.message')}</Label>
                    <Textarea
                      id="message"
                      placeholder={t('contactPage.form.messagePlaceholder')}
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="btn-gradient w-full text-lg py-3">
                    {t('contactPage.form.submit')}
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

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-purple-600/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">{t('contactPage.info.map')}</p>
                    <p className="text-sm text-muted-foreground">123 Creative Street, New York, NY</p>
                  </div>
                </div>
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
    </div>
  );
};

export default Contact;
