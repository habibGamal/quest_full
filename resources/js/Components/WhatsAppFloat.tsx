import React from 'react';
import { MessageCircle } from 'lucide-react';
import { usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useTranslation } from 'react-i18next';

const WhatsAppFloat = () => {
  const { settings } = usePage<PageProps>().props;
  const { t } = useTranslation();

  const phoneNumber = (settings.whatsapp_number as string) || "+201091115510";
  const message = t('whatsapp.defaultMessage', {
    defaultValue: "Hello! I'm interested in your digital marketing services."
  });

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300  hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />

        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {t('whatsapp.tooltip', { defaultValue: 'Chat with us on WhatsApp' })}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppFloat;
