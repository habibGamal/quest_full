import React from 'react'
import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import AnimatedBackground from "@/Components/AnimatedBackground";
import WhatsAppFloat from "@/Components/WhatsAppFloat";
import { useTranslation } from 'react-i18next';

export default function TermsOfService() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen relative">
            <AnimatedBackground />
            <Navigation />

            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                        {t('termsOfService.hero.title')}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
                        {t('termsOfService.hero.subtitle')}
                    </p>
                    <p className="text-sm text-muted-foreground animate-fade-in">
                        {t('termsOfService.hero.lastUpdated')}: January 2025
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-16 px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg space-y-12">

                        {/* Introduction */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('termsOfService.introduction.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('termsOfService.introduction.content')}
                            </p>
                        </div>

                        {/* Acceptance of Terms */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('termsOfService.acceptance.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('termsOfService.acceptance.content')}
                            </p>
                        </div>

                        {/* Services Description */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('termsOfService.services.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('termsOfService.services.intro')}
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                <li>{t('termsOfService.services.items.socialMedia')}</li>
                                <li>{t('termsOfService.services.items.webDevelopment')}</li>
                                <li>{t('termsOfService.services.items.mediaBuying')}</li>
                                <li>{t('termsOfService.services.items.branding')}</li>
                                <li>{t('termsOfService.services.items.contentCreation')}</li>
                                <li>{t('termsOfService.services.items.seo')}</li>
                                <li>{t('termsOfService.services.items.consultation')}</li>
                            </ul>
                        </div>

                        {/* User Responsibilities */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('termsOfService.userResponsibilities.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('termsOfService.userResponsibilities.intro')}
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                <li>{t('termsOfService.userResponsibilities.items.accurate')}</li>
                                <li>{t('termsOfService.userResponsibilities.items.lawful')}</li>
                                <li>{t('termsOfService.userResponsibilities.items.timely')}</li>
                                <li>{t('termsOfService.userResponsibilities.items.materials')}</li>
                                <li>{t('termsOfService.userResponsibilities.items.communication')}</li>
                            </ul>
                        </div>

                        {/* Payment Terms */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('termsOfService.payment.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('termsOfService.payment.content')}
                            </p>
                            <div className="space-y-3">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{t('termsOfService.payment.invoicing.title')}</h3>
                                    <p className="text-muted-foreground">{t('termsOfService.payment.invoicing.content')}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{t('termsOfService.payment.late.title')}</h3>
                                    <p className="text-muted-foreground">{t('termsOfService.payment.late.content')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Intellectual Property */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('termsOfService.intellectualProperty.title')}</h2>
                            <div className="space-y-3">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{t('termsOfService.intellectualProperty.ownership.title')}</h3>
                                    <p className="text-muted-foreground">{t('termsOfService.intellectualProperty.ownership.content')}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{t('termsOfService.intellectualProperty.client.title')}</h3>
                                    <p className="text-muted-foreground">{t('termsOfService.intellectualProperty.client.content')}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{t('termsOfService.intellectualProperty.thirdParty.title')}</h3>
                                    <p className="text-muted-foreground">{t('termsOfService.intellectualProperty.thirdParty.content')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Confidentiality */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('termsOfService.confidentiality.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('termsOfService.confidentiality.content')}
                            </p>
                        </div>

                        {/* Limitation of Liability */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('termsOfService.liability.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('termsOfService.liability.content')}
                            </p>
                        </div>

                        {/* Termination */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('termsOfService.termination.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('termsOfService.termination.content')}
                            </p>
                        </div>

                        {/* Governing Law */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('termsOfService.governingLaw.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('termsOfService.governingLaw.content')}
                            </p>
                        </div>

                        {/* Changes to Terms */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('termsOfService.changes.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('termsOfService.changes.content')}
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">{t('termsOfService.contact.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('termsOfService.contact.content')}
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
