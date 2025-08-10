import { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/Components/ui/button";
import LanguageSwitcher from "@/Components/LanguageSwitcher";
import { PageProps } from "@/types";

const Navigation = () => {
    const { settings } = usePage<PageProps>().props;
    console.log("Navigation settings:", settings);
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { url } = usePage();
    const { t } = useTranslation();

    const navItems = [
        { name: t("nav.home"), path: "/" },
        { name: t("nav.about"), path: "/about" },
        { name: t("nav.services"), path: "/services" },
        { name: t("nav.portfolio"), path: "/portfolio" },
        { name: t("nav.contact"), path: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
                <div className="flex justify-between h-20">
                    {/* Logo with Creative Animation */}
                    <div className="flex items-center group">
                        <Link href="/" className="flex items-center space-x-3">
                            <img
                                src={
                                    (settings.logo_image as string) ||
                                    "/logo.png"
                                }
                                alt="Logo"
                                className="h-12 rounded-lg transition-transform duration-500 group-hover:rotate-12"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation with Glass Effect */}
                    <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                                    url === item.path
                                        ? "text-primary"
                                        : "text-foreground hover:text-primary"
                                }`}
                            >
                                <span className="relative z-10">
                                    {item.name}
                                </span>
                                {url === item.path && (
                                    <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm rounded-lg border border-primary/20"></div>
                                )}
                                <div className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                            </Link>
                        ))}

                        {/* Language Switcher */}
                        <div className="ml-4 rtl:mr-4 rtl:ml-0">
                            <LanguageSwitcher />
                        </div>

                        {/* Animated CTA Button */}
                        <div className="ml-6 rtl:mr-6 rtl:ml-0">
                            <Link href="/contact">
                                <Button className="relative overflow-hidden group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500 px-6 py-2.5">
                                    <span className="relative z-10 font-semibold">
                                        {t("nav.getStarted")}
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button with Animation */}
                    <div className="md:hidden flex items-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative overflow-hidden group"
                        >
                            <div
                                className={`transform transition-transform duration-300 ${
                                    isOpen ? "rotate-180" : ""
                                }`}
                            >
                                {isOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </div>
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation with Slide Animation */}
                <div
                    className={`md:hidden transition-all duration-500 ease-in-out ${
                        isOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                >
                    <div className="px-4 pt-4 pb-6 space-y-3 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl mt-4">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`block px-4 py-3 mx-2 text-base font-medium transition-all duration-300 rounded-xl transform ${
                                    url === item.path
                                        ? "text-primary bg-primary/10 translate-x-2 rtl:-translate-x-2"
                                        : "text-foreground hover:text-primary hover:bg-primary/5 hover:translate-x-2 rtl:hover:-translate-x-2"
                                }`}
                                style={{ transitionDelay: `${index * 50}ms` }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Language Switcher in Mobile */}
                        <div className="px-2 py-2">
                            <div className="w-full">
                                <LanguageSwitcher />
                            </div>
                        </div>

                        {/* Get Started Button in Mobile */}
                        <div className="px-2 py-2">
                            <Link href="/contact">
                                <Button className="btn-gradient w-full transform hover:scale-105 transition-transform duration-300">
                                    {t("nav.getStarted")}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
