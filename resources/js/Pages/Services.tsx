import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import AnimatedBackground from "@/Components/AnimatedBackground";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { useTranslation } from 'react-i18next';
import { Palette, Share2, Target, Code, PenTool, Search } from "lucide-react";

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  category?: string;
  features: string[];
}

interface ServicesProps {
  services?: Service[];
}

const iconMap = {
  'palette': Palette,
  'share2': Share2,
  'target': Target,
  'code': Code,
  'pen-tool': PenTool,
  'search': Search,
};

const Services = ({ services: databaseServices = [] }: ServicesProps) => {
  const { t } = useTranslation();

  // Map database services to include icon components
  const services = databaseServices.map(service => {
    const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Palette;
    return {
      id: service.id,
      iconComponent: <IconComponent className="h-12 w-12 text-primary" />,
      title: service.title,
      description: service.description,
      features: service.features,
    };
  });

  // Fallback to translation-based services if no database data
  const fallbackServices = [
    {
      id: 1,
      iconComponent: <Palette className="h-12 w-12 text-primary" />,
      title: t('servicesPage.services.branding.title'),
      description: t('servicesPage.services.branding.description'),
      features: t('servicesPage.services.branding.features', { returnObjects: true }) as string[],
    },
    {
      id: 2,
      iconComponent: <Share2 className="h-12 w-12 text-primary" />,
      title: t('servicesPage.services.social.title'),
      description: t('servicesPage.services.social.description'),
      features: t('servicesPage.services.social.features', { returnObjects: true }) as string[],
    },
    {
      id: 3,
      iconComponent: <Target className="h-12 w-12 text-primary" />,
      title: t('servicesPage.services.advertising.title'),
      description: t('servicesPage.services.advertising.description'),
      features: t('servicesPage.services.advertising.features', { returnObjects: true }) as string[],
    },
    {
      id: 4,
      iconComponent: <Code className="h-12 w-12 text-primary" />,
      title: t('servicesPage.services.webDev.title'),
      description: t('servicesPage.services.webDev.description'),
      features: t('servicesPage.services.webDev.features', { returnObjects: true }) as string[],
    },
    {
      id: 5,
      iconComponent: <PenTool className="h-12 w-12 text-primary" />,
      title: t('servicesPage.services.content.title'),
      description: t('servicesPage.services.content.description'),
      features: t('servicesPage.services.content.features', { returnObjects: true }) as string[],
    },
    {
      id: 6,
      iconComponent: <Search className="h-12 w-12 text-primary" />,
      title: t('servicesPage.services.seo.title'),
      description: t('servicesPage.services.seo.description'),
      features: t('servicesPage.services.seo.features', { returnObjects: true }) as string[],
    },
  ];

  const displayServices = services.length > 0 ? services : fallbackServices;

  const processSteps = [
    {
      step: "01",
      title: t('servicesPage.process.steps.discovery.title'),
      description: t('servicesPage.process.steps.discovery.description'),
    },
    {
      step: "02",
      title: t('servicesPage.process.steps.strategy.title'),
      description: t('servicesPage.process.steps.strategy.description'),
    },
    {
      step: "03",
      title: t('servicesPage.process.steps.execution.title'),
      description: t('servicesPage.process.steps.execution.description'),
    },
    {
      step: "04",
      title: t('servicesPage.process.steps.optimization.title'),
      description: t('servicesPage.process.steps.optimization.description'),
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
            {t('servicesPage.hero.title')} <span className="text-gradient">{t('servicesPage.hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            {t('servicesPage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayServices.map((service, index) => (
              <Card key={service.id} className="card-hover h-full">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">{service.iconComponent}</div>
                  <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center rtl:space-x-reverse space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-6">
                    {t('services.learnMore')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('servicesPage.process.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('servicesPage.process.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover text-center p-8">
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-2">300%</div>
                <div className="text-lg font-semibold mb-2">{t('achievements.stats.roi')}</div>
                <div className="text-muted-foreground">{t('achievements.descriptions.roiDesc')}</div>
              </CardContent>
            </Card>
            <Card className="card-hover text-center p-8">
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-2">2M+</div>
                <div className="text-lg font-semibold mb-2">{t('achievements.stats.impressions')}</div>
                <div className="text-muted-foreground">{t('achievements.descriptions.impressionsDesc')}</div>
              </CardContent>
            </Card>
            <Card className="card-hover text-center p-8">
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-2">150%</div>
                <div className="text-lg font-semibold mb-2">{t('achievements.stats.trafficGrowth')}</div>
                <div className="text-muted-foreground">{t('achievements.descriptions.trafficDesc')}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient text-lg px-8 py-4">
              {t('cta.primary')}
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4">
              {t('portfolio.viewAllProjects')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
