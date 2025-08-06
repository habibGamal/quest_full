import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import AnimatedBackground from "@/Components/AnimatedBackground";
import LanguageTest from "@/Components/LanguageTest";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { useTranslation } from 'react-i18next';
import {
  Palette,
  Target,
  TrendingUp,
  Users,
  Zap,
  Award,
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  Sparkles,
  Rocket,
  Globe
} from "lucide-react";

const Index = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: t('services.items.branding.title'),
      description: t('services.items.branding.description')
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: t('services.items.marketing.title'),
      description: t('services.items.marketing.description')
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: t('services.items.growth.title'),
      description: t('services.items.growth.description')
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t('services.items.social.title'),
      description: t('services.items.social.description')
    }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: t('whyChooseUs.items.creative.title'),
      description: t('whyChooseUs.items.creative.description')
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: t('whyChooseUs.items.dataDriven.title'),
      description: t('whyChooseUs.items.dataDriven.description')
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: t('whyChooseUs.items.results.title'),
      description: t('whyChooseUs.items.results.description')
    }
  ];

  const achievements = [
    { number: "200+", label: t('achievements.stats.clients') },
    { number: "500+", label: t('achievements.stats.campaigns') },
    { number: "300%", label: t('achievements.stats.roi') },
    { number: "50M+", label: t('achievements.stats.reach') }
  ];

  const featuredProjects = [
    {
      title: "TechFlow Rebrand",
      description: "Complete brand transformation resulting in 40% increase in recognition",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      category: t('portfolio.categories.branding')
    },
    {
      title: "EcoLiving Campaign",
      description: "Social media strategy that doubled engagement and generated quality leads",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      category: t('portfolio.categories.socialMedia')
    },
    {
      title: "FitZone Website",
      description: "Modern web design that increased online bookings by 300%",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      category: t('portfolio.categories.webDesign')
    }
  ];

  const testimonials = [
    {
      quote: "CreativeFlow transformed our brand completely. The results exceeded all expectations.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612d5fd?w=60&h=60&fit=crop&crop=face"
    },
    {
      quote: "Their strategic approach to social media doubled our engagement in just 3 months.",
      author: "Mike Rodriguez",
      role: "Founder, EcoLiving",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      quote: "Professional, creative, and results-driven. The best marketing partner we've had.",
      author: "Lisa Park",
      role: "Marketing Director, FitZone",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const clientLogos = [
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=120&h=60&fit=crop"
  ];

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navigation />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/hero.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>

        <AnimatedBackground />

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              {/* Badge with Animation */}
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse mb-8">
                <Badge className="relative overflow-hidden bg-primary/10 text-primary border-primary/20 px-6 py-2 text-sm font-semibold">
                  <Rocket className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0 animate-bounce" />
                  <span className="relative z-10">{t('hero.badge')}</span>
                  <div className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Badge>
              </div>

              {/* Main Heading with Shimmer Effect */}
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
                <span className="block text-shimmer">{t('hero.title.mystical')}</span>
                <span className="block">{t('hero.title.marketing')}</span>
                <span className="block text-gradient animate-gradient">{t('hero.title.beyond')}</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t('hero.subtitle')} <span className="text-primary font-semibold">{t('hero.highlight')}</span>
              </p>

              {/* CTA Buttons with Enhanced Animation */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button className="relative group overflow-hidden bg-gradient-to-r from-primary via-purple-600 to-primary bg-[length:200%] animate-gradient text-white text-lg px-10 py-5 rounded-2xl font-bold shadow-2xl hover:shadow-primary/25 transition-all duration-500 animate-glow">
                  <span className="relative z-10 flex items-center">
                    {t('hero.cta.primary')}
                    <ArrowRight className="ml-3 rtl:mr-3 rtl:ml-0 rtl:rotate-180 h-6 w-6 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                </Button>

                <Button variant="outline" className="group border-2 border-primary/30 text-primary hover:border-primary hover:bg-primary/5 text-lg px-10 py-5 rounded-2xl font-bold backdrop-blur-sm">
                  <div className="flex items-center">
                    <div className="relative mr-3 rtl:ml-3 rtl:mr-0">
                      <Play className="h-6 w-6 group-hover:scale-110 transition-transform" />
                      <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                    {t('hero.cta.secondary')}
                  </div>
                </Button>
              </div>

              {/* Floating Statistics */}
              <div className="grid grid-cols-3 gap-8 mt-16 text-center lg:text-left rtl:lg:text-right">
                <div className="group">
                  <div className="text-3xl font-bold text-gradient mb-1 group-hover:scale-110 transition-transform">200+</div>
                  <div className="text-sm text-muted-foreground">{t('hero.stats.clients')}</div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-gradient mb-1 group-hover:scale-110 transition-transform">300%</div>
                  <div className="text-sm text-muted-foreground">{t('hero.stats.roi')}</div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-gradient mb-1 group-hover:scale-110 transition-transform">50M+</div>
                  <div className="text-sm text-muted-foreground">{t('hero.stats.reach')}</div>
                </div>
              </div>
            </div>

            {/* Hero Image with Enhanced Effects */}
            <div className="relative animate-scale-in">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-accent rounded-3xl blur-3xl opacity-30 animate-pulse scale-105"></div>

              {/* Main Image Container */}
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=600&fit=crop"
                  alt="Creative team collaboration"
                  className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700 border border-white/10"
                />

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center animate-bounce shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>

                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center animate-pulse shadow-lg">
                  <Globe className="h-7 w-7 text-white" />
                </div>

                {/* Success Badge */}
                <div className="absolute top-6 left-6 rtl:right-6 rtl:left-auto bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-fade-in">
                  <CheckCircle className="w-4 h-4 inline mr-2 rtl:ml-2 rtl:mr-0" />
                  Proven Results
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-ping"></div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-muted-foreground mb-8 font-medium">
            Trusted by innovative brands worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {clientLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-12 w-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">{t('services.badge')}</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('services.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover text-center group">
                <CardHeader>
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button variant="ghost" className="mt-4 group-hover:text-primary">
                    {t('services.learnMore')} <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Badge className="mb-4">{t('whyChooseUs.badge')}</Badge>
              <h2 className="text-4xl font-bold mb-6">
                {t('whyChooseUs.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('whyChooseUs.subtitle')}
              </p>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop"
                alt="Strategy and analytics"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4">{t('achievements.badge')}</Badge>
          <h2 className="text-4xl font-bold mb-6">{t('achievements.title')}</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('achievements.subtitle')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">{t('portfolio.badge')}</Badge>
            <h2 className="text-4xl font-bold mb-6">{t('portfolio.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="card-hover overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 rtl:right-4 rtl:left-auto">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold text-primary">
                    {t('portfolio.viewCaseStudy')} <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="btn-outline-gradient">
              {t('portfolio.viewAllProjects')}
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">{t('testimonials.badge')}</Badge>
            <h2 className="text-4xl font-bold mb-6">{t('testimonials.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <CheckCircle className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5" />
              {t('cta.primary')}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              {t('cta.secondary')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
