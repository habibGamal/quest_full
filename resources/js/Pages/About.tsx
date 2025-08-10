import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import AnimatedBackground from "@/Components/AnimatedBackground";
import WhatsAppFloat from "@/Components/WhatsAppFloat";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { useTranslation } from 'react-i18next';
import { Users, Target, Lightbulb, Award, Zap } from "lucide-react";
import { Link } from '@inertiajs/react';

const About = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: t('about.team.members.magy.name'),
      role: t('about.team.members.magy.title'),
      image: "https://images.unsplash.com/photo-1616434116710-c45ce99c1a77?w=400&auto=format&fit=crop&crop=face",
    },
    {
      name: t('about.team.members.abubakr.name'),
      role: t('about.team.members.abubakr.title'),
      image: "https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?w=400&auto=format&fit=crop&crop=face",
    },
    {
      name: t('about.team.members.ammar.name'),
      role: t('about.team.members.ammar.title'),
      image: "https://images.unsplash.com/photo-1597961220560-2c8bf7298017?w=400&auto=format&fit=crop&crop=face",
    },
    {
      name: t('about.team.members.jasmine.name'),
      role: t('about.team.members.jasmine.title'),
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=400&auto=format&fit=crop&crop=face",
    },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: t('about.values.items.strategic.title'),
      description: t('about.values.items.strategic.description'),
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: t('about.values.items.creative.title'),
      description: t('about.values.items.creative.description'),
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t('about.values.items.collaborative.title'),
      description: t('about.values.items.collaborative.description'),
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: t('about.values.items.agility.title'),
      description: t('about.values.items.agility.description'),
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: t('about.values.items.excellence.title'),
      description: t('about.values.items.excellence.description'),
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
            {t('about.hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">{t('about.story.title')}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('about.story.description')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">30+</div>
                  <div className="text-muted-foreground">{t('hero.stats.clients')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10M+</div>
                  <div className="text-muted-foreground">{t('hero.stats.reach')}</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">{t('about.mission.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('about.mission.description')}
              </p>
            </div>
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">{t('about.vision.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('about.values.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-hover text-center p-6 group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('about.team.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
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
          <Link href="/contact">
            <Button className="btn-gradient text-lg px-8 py-4">
              {t('cta.primary')}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default About;
