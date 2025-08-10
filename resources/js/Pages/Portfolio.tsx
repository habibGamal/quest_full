import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import AnimatedBackground from "@/Components/AnimatedBackground";
import WhatsAppFloat from "@/Components/WhatsAppFloat";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { useTranslation } from 'react-i18next';
import { ExternalLink, User } from "lucide-react";
import { Link } from '@inertiajs/react';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  results: string;
  is_featured: boolean;
}

interface PortfolioProps {
  portfolioItems?: PortfolioItem[];
  featuredItems?: PortfolioItem[];
}

const Portfolio = ({ portfolioItems: databaseItems = [], featuredItems = [] }: PortfolioProps) => {
  const { t } = useTranslation();

  // Fallback portfolio items if no database data
  const fallbackItems = [
    {
      id: 1,
      title: "TechFlow Rebrand",
      category: t('portfolioPage.filters.branding'),
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      description: "Complete brand transformation for a leading tech startup",
      tags: ["Brand Identity", "Logo Design", "Guidelines"],
      results: "40% increase in brand recognition",
      is_featured: true,
    },
    {
      id: 2,
      title: "EcoLiving Campaign",
      category: t('portfolioPage.filters.socialMedia'),
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
      description: "Sustainable lifestyle brand social media strategy",
      tags: ["Social Strategy", "Content Creation", "Influencer Marketing"],
      results: "200% follower growth in 6 months",
      is_featured: false,
    },
    {
      id: 3,
      title: "FitZone Website",
      category: t('portfolioPage.filters.webDesign'),
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "Modern fitness website with booking system",
      tags: ["UI/UX Design", "Development", "E-commerce"],
      results: "300% increase in online bookings",
      is_featured: true,
    },
    {
      id: 4,
      title: "FoodieHub Marketing",
      category: t('portfolioPage.filters.advertising'),
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      description: "Multi-platform advertising campaign for food delivery app",
      tags: ["Google Ads", "Facebook Ads", "Campaign Management"],
      results: "450% ROI on ad spend",
      is_featured: false,
    },
    {
      id: 5,
      title: "HealthTech Content",
      category: t('portfolioPage.filters.content'),
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      description: "Educational content strategy for healthcare technology",
      tags: ["Content Strategy", "SEO", "Video Production"],
      results: "180% increase in organic traffic",
      is_featured: false,
    },
    {
      id: 6,
      title: "Fashion Forward SEO",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      description: "Comprehensive SEO overhaul for fashion e-commerce",
      tags: ["Technical SEO", "Content Optimization", "Link Building"],
      results: "250% improvement in search rankings",
      is_featured: true,
    },
  ];

  const portfolioItems = databaseItems.length > 0 ? databaseItems : fallbackItems;

  const categories = [
    t('portfolioPage.filters.all'),
    t('portfolioPage.filters.branding'),
    t('portfolioPage.filters.socialMedia'),
    t('portfolioPage.filters.webDesign'),
    t('portfolioPage.filters.advertising'),
    t('portfolioPage.filters.content'),
    t('portfolioPage.filters.graphics')
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t('portfolioPage.hero.title')} <span className="text-gradient">{t('portfolioPage.hero.highlight')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            {t('portfolioPage.hero.description')}
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === t('portfolioPage.filters.all') ? "default" : "outline"}
                className="px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="card-hover overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium text-primary">{item.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('portfolioPage.featured.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('portfolioPage.featured.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="TechFlow case study"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="animate-fade-in">
              <Badge className="mb-4">{t('portfolioPage.featured.badge')}</Badge>
              <h3 className="text-3xl font-bold mb-4">{t('portfolioPage.featured.caseTitle')}</h3>
              <p className="text-lg text-muted-foreground mb-6">
                {t('portfolioPage.featured.caseDescription')}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-2xl font-bold text-primary">40%</div>
                  <div className="text-muted-foreground">{t('portfolioPage.featured.metric1')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">60%</div>
                  <div className="text-muted-foreground">{t('portfolioPage.featured.metric2')}</div>
                </div>
              </div>
              <Link href="/contact">
                <Button className="btn-gradient">
                  {t('contactPage.cta.primaryButton')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('portfolioPage.testimonials.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('portfolioPage.testimonials.testimonial1.quote')}
                </p>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{t('portfolioPage.testimonials.testimonial1.name')}</div>
                    <div className="text-sm text-muted-foreground">{t('portfolioPage.testimonials.testimonial1.title')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('portfolioPage.testimonials.testimonial2.quote')}
                </p>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{t('portfolioPage.testimonials.testimonial2.name')}</div>
                    <div className="text-sm text-muted-foreground">{t('portfolioPage.testimonials.testimonial2.title')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('portfolioPage.testimonials.testimonial3.quote')}
                </p>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{t('portfolioPage.testimonials.testimonial3.name')}</div>
                    <div className="text-sm text-muted-foreground">{t('portfolioPage.testimonials.testimonial3.title')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('portfolioPage.cta.title')}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('portfolioPage.cta.description')}
          </p>
          <Link href="/contact">
            <Button className="btn-gradient text-lg px-8 py-4">
              {t('portfolioPage.cta.button')}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Portfolio;
