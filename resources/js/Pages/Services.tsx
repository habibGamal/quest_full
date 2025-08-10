import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import AnimatedBackground from "@/Components/AnimatedBackground";
import WhatsAppFloat from "@/Components/WhatsAppFloat";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { useTranslation } from 'react-i18next';
import { Palette, Share2, Target, Code, PenTool, Search, Camera, Users, FileText } from "lucide-react";
import { Link } from '@inertiajs/react';

interface Feature {
  feature: string;
}

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  category?: string;
  features: Feature[];
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

  // Helper function to convert string array to Feature array
  const convertToFeatures = (features: string[] | Feature[]): Feature[] => {
    if (features.length === 0) return [];
    if (typeof features[0] === 'string') {
      return (features as string[]).map(feature => ({ feature }));
    }
    return features as Feature[];
  };

  // Map database services to include icon components
  const services = databaseServices.map((service) => {
    const IconComponent = iconMap[service.icon as keyof typeof iconMap];
    return {
      ...service,
      iconComponent: IconComponent ? <IconComponent className="h-12 w-12 text-primary" /> : null,
      features: convertToFeatures(service.features),
    };
  });  // Fallback to translation-based services if no database data
  const fallbackServices = [
    {
      id: 1,
      iconComponent: <Share2 className="h-12 w-12 text-primary" />,
      title: t('servicesPage.services.socialManagement.title'),
      description: t('servicesPage.services.socialManagement.description'),
      features: convertToFeatures(t('servicesPage.services.socialManagement.features', { returnObjects: true }) as string[]),
    },
    {
      id: 2,
      iconComponent: <Palette className="h-12 w-12 text-primary" />,
      title: t('servicesPage.services.socialDesign.title'),
      description: t('servicesPage.services.socialDesign.description'),
      features: convertToFeatures(t('servicesPage.services.socialDesign.features', { returnObjects: true }) as string[]),
    },
    {
      id: 3,
      iconComponent: <Target className="h-12 w-12 text-primary" />,
      title: t('servicesPage.services.mediaBuying.title'),
      description: t('servicesPage.services.mediaBuying.description'),
      features: convertToFeatures(t('servicesPage.services.mediaBuying.features', { returnObjects: true }) as string[]),
    },
    {
      id: 4,
      iconComponent: <Code className="h-12 w-12 text-primary" />,
      title: t('servicesPage.services.webDev.title'),
      description: t('servicesPage.services.webDev.description'),
      features: convertToFeatures(t('servicesPage.services.webDev.features', { returnObjects: true }) as string[]),
    },
    {
      id: 5,
      iconComponent: <Camera className="h-12 w-12 text-primary" />,
      title: t('servicesPage.services.mediaProduction.title'),
      description: t('servicesPage.services.mediaProduction.description'),
      features: convertToFeatures(t('servicesPage.services.mediaProduction.features', { returnObjects: true }) as string[]),
    },
    {
      id: 6,
      iconComponent: <FileText className="h-12 w-12 text-primary" />,
      title: t('servicesPage.services.publicRelations.title'),
      description: t('servicesPage.services.publicRelations.description'),
      features: convertToFeatures(t('servicesPage.services.publicRelations.features', { returnObjects: true }) as string[]),
    },
    {
      id: 7,
      iconComponent: <PenTool className="h-12 w-12 text-primary" />,
      title: t('servicesPage.services.contentCreation.title'),
      description: t('servicesPage.services.contentCreation.description'),
      features: convertToFeatures(t('servicesPage.services.contentCreation.features', { returnObjects: true }) as string[]),
    },
    {
      id: 8,
      iconComponent: <Search className="h-12 w-12 text-primary" />,
      title: t('servicesPage.services.seo.title'),
      description: t('servicesPage.services.seo.description'),
      features: convertToFeatures(t('servicesPage.services.seo.features', { returnObjects: true }) as string[]),
    },
    {
      id: 9,
      iconComponent: <Users className="h-12 w-12 text-primary" />,
      title: t('servicesPage.services.accountManagement.title'),
      description: t('servicesPage.services.accountManagement.description'),
      features: convertToFeatures(t('servicesPage.services.accountManagement.features', { returnObjects: true }) as string[]),
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
      title: t('servicesPage.process.steps.planning.title'),
      description: t('servicesPage.process.steps.planning.description'),
    },
    {
      step: "03",
      title: t('servicesPage.process.steps.execution.title'),
      description: t('servicesPage.process.steps.execution.description'),
    },
    {
      step: "04",
      title: t('servicesPage.process.steps.launch.title'),
      description: t('servicesPage.process.steps.launch.description'),
    },
    {
      step: "05",
      title: t('servicesPage.process.steps.reporting.title'),
      description: t('servicesPage.process.steps.reporting.description'),
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
                        <span className="text-sm">{typeof feature === 'string' ? feature : feature.feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full mt-6">
                      {t('services.learnMore')}
                    </Button>
                  </Link>
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

          {/* Desktop/Tablet: Horizontal Flow */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-30"></div>

              <div className="grid grid-cols-5 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    {/* Step Circle */}
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                      {step.step}
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-full blur-lg opacity-50 scale-150"></div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-background rounded-xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 group">
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical Flow */}
          <div className="lg:hidden space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start space-x-4">
                  {/* Step Circle */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Connection Line (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="ml-6 mt-4 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent opacity-30"></div>
                )}
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
            <Link href="/contact">
              <Button className="btn-gradient text-lg px-8 py-4">
                {t('cta.primary')}
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" className="text-lg px-8 py-4">
                {t('portfolio.viewAllProjects')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Services;
