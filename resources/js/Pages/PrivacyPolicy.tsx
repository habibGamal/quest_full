import React from "react";
import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import AnimatedBackground from "@/Components/AnimatedBackground";
import WhatsAppFloat from "@/Components/WhatsAppFloat";
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen relative">
            <AnimatedBackground />
            <Navigation />

            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                        {t('privacyPolicy.hero.title')}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
                        {t('privacyPolicy.hero.subtitle')}
                    </p>
                    <p className="text-sm text-muted-foreground animate-fade-in">
                        {t('privacyPolicy.hero.lastUpdated')}: January 2025
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-16 px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg space-y-12">

                        {/* Introduction */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('privacyPolicy.introduction.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('privacyPolicy.introduction.content')}
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('privacyPolicy.dataCollection.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('privacyPolicy.dataCollection.intro')}
                            </p>
                            <div className="space-y-3">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{t('privacyPolicy.dataCollection.personal.title')}</h3>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                                        <li>{t('privacyPolicy.dataCollection.personal.items.name')}</li>
                                        <li>{t('privacyPolicy.dataCollection.personal.items.email')}</li>
                                        <li>{t('privacyPolicy.dataCollection.personal.items.phone')}</li>
                                        <li>{t('privacyPolicy.dataCollection.personal.items.company')}</li>
                                        <li>{t('privacyPolicy.dataCollection.personal.items.project')}</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{t('privacyPolicy.dataCollection.technical.title')}</h3>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                                        <li>{t('privacyPolicy.dataCollection.technical.items.ip')}</li>
                                        <li>{t('privacyPolicy.dataCollection.technical.items.browser')}</li>
                                        <li>{t('privacyPolicy.dataCollection.technical.items.device')}</li>
                                        <li>{t('privacyPolicy.dataCollection.technical.items.usage')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* How We Use Your Information */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('privacyPolicy.dataUsage.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('privacyPolicy.dataUsage.intro')}
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                <li>{t('privacyPolicy.dataUsage.items.respond')}</li>
                                <li>{t('privacyPolicy.dataUsage.items.services')}</li>
                                <li>{t('privacyPolicy.dataUsage.items.improve')}</li>
                                <li>{t('privacyPolicy.dataUsage.items.communicate')}</li>
                                <li>{t('privacyPolicy.dataUsage.items.legal')}</li>
                            </ul>
                        </div>

                        {/* Data Sharing */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('privacyPolicy.dataSharing.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('privacyPolicy.dataSharing.content')}
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                <li>{t('privacyPolicy.dataSharing.items.consent')}</li>
                                <li>{t('privacyPolicy.dataSharing.items.legal')}</li>
                                <li>{t('privacyPolicy.dataSharing.items.business')}</li>
                            </ul>
                        </div>

                        {/* Data Security */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('privacyPolicy.dataSecurity.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('privacyPolicy.dataSecurity.content')}
                            </p>
                        </div>

                        {/* Your Rights */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('privacyPolicy.userRights.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('privacyPolicy.userRights.intro')}
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                <li>{t('privacyPolicy.userRights.items.access')}</li>
                                <li>{t('privacyPolicy.userRights.items.correct')}</li>
                                <li>{t('privacyPolicy.userRights.items.delete')}</li>
                                <li>{t('privacyPolicy.userRights.items.restrict')}</li>
                                <li>{t('privacyPolicy.userRights.items.portability')}</li>
                                <li>{t('privacyPolicy.userRights.items.object')}</li>
                            </ul>
                        </div>

                        {/* Cookies */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('privacyPolicy.cookies.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('privacyPolicy.cookies.content')}
                            </p>
                        </div>

                        {/* Changes to Privacy Policy */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('privacyPolicy.changes.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('privacyPolicy.changes.content')}
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('privacyPolicy.contact.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('privacyPolicy.contact.content')}
                            </p>
                            <div className="bg-secondary rounded-lg p-6 space-y-2">
                                <p className="font-semibold">Quest Digital Marketing Agency</p>
                                <p className="text-muted-foreground">Email: Info@questagency.com</p>
                                <p className="text-muted-foreground">Phone: +20 109 111 5510</p>
                                <p className="text-muted-foreground">Address: Naqla Mall, Plot 9, Block 25033, Entertainment District, Obour City, Cairo, Egypt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppFloat />
        </div>
    );
}
