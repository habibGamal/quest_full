import { Link } from "@inertiajs/react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { usePage } from '@inertiajs/react';
import { PageProps } from '@/types';

const Footer = () => {
  const { t } = useTranslation();
  const { settings } = usePage<PageProps>().props;

  // Parse social media links from settings
  const socialMediaLinks = settings.social_media_links
    ? (typeof settings.social_media_links === 'string'
      ? JSON.parse(settings.social_media_links as string)
      : settings.social_media_links)
    : [];

  // Helper function to get social media icon
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'facebook':
        return <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />;
      case 'twitter':
        return <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />;
      case 'instagram':
        return <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">{t('footer.company')}</h3>
            <p className="text-muted-foreground">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {Array.isArray(socialMediaLinks) && socialMediaLinks.map((social: any, index: number) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.platform}`}
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.sections.services')}</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Social Media Management</li>
              <li className="text-muted-foreground">Social Media Designs</li>
              <li className="text-muted-foreground">Media Buying</li>
              <li className="text-muted-foreground">Websites Development</li>
              <li className="text-muted-foreground">Media Production</li>
              <li className="text-muted-foreground">SEO</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  {(settings.official_email as string) || t('footer.email')}
                </span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  {(settings.whatsapp_number as string) || '+20 109 111 5510'}
                </span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">{t('footer.address')}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="text-muted-foreground text-sm">{t('footer.hours')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 {t('footer.company')}. {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
