import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsLangOpen(false);
        setIsMobileMenuOpen(false);
    };

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'tr', label: 'TR' },
        { code: 'fr', label: 'FR' },
        { code: 'de', label: 'DE' },
        { code: 'it', label: 'IT' },
        { code: 'es', label: 'ES' }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScnaSDw3yD5zOLrl9C5oK3kJnzKYFyJgaZ8ivq35PK97aeRJg/viewform?usp=publish-editor";

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center backdrop-blur-sm bg-cream/80">

                {/* DESKTOP: Sol — nav linkler | MOBİL: gizli */}
                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => scrollToSection('about-us')} className="text-sm font-medium text-charcoal tracking-wide hover:text-gold transition-colors uppercase">
                        {t('nav.about')}
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-charcoal tracking-wide hover:text-gold transition-colors uppercase">
                        {t('nav.contact')}
                    </button>
                </div>

                {/* MOBİL: Sol — hamburger ikonu */}
                <button
                    className="md:hidden p-1 text-midnight"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* DESKTOP: Orta — logo (absolute) | MOBİL: logo sol-orta */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:absolute md:left-1/2 md:-translate-x-1/2"
                >
                    <h1
                        className="font-serif text-3xl md:text-4xl text-midnight tracking-tight font-bold cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        Paspartu<span className="text-gold">.co</span>
                    </h1>
                </motion.div>

                {/* Sağ — dil + buton (hem desktop hem mobil) */}
                <div className="flex items-center gap-3 md:gap-4">
                    {/* Dil Seçici - sadece desktop */}
                    <div className="relative hidden md:block">
                        <button onClick={() => setIsLangOpen(!isLangOpen)} className="p-2 hover:text-gold transition-colors">
                            <Globe className="w-5 h-5 text-midnight" />
                        </button>
                        {isLangOpen && (
                            <div className="absolute right-0 top-full mt-2 w-32 bg-cream border border-midnight/10 shadow-lg rounded-md overflow-hidden z-50">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => changeLanguage(lang.code)}
                                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gold/10 transition-colors ${(i18n.language || 'en') === lang.code ? 'font-bold text-gold' : 'text-midnight'}`}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <a
                        href={FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 md:px-6 py-2 border border-midnight text-midnight text-xs md:text-sm uppercase tracking-widest hover:bg-midnight hover:text-cream transition-all rounded-full whitespace-nowrap"
                    >
                        {t('nav.login')}
                    </a>
                </div>
            </nav>

            {/* Mobil Dropdown Menü — kompakt */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="fixed top-[69px] left-0 right-0 z-40 bg-cream/96 backdrop-blur-sm border-b border-midnight/10 px-6 py-4 flex flex-col gap-3"
                    >
                        <button
                            onClick={() => scrollToSection('about-us')}
                            className="text-sm font-medium text-charcoal tracking-wide hover:text-gold transition-colors uppercase text-left"
                        >
                            {t('nav.about')}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-sm font-medium text-charcoal tracking-wide hover:text-gold transition-colors uppercase text-left"
                        >
                            {t('nav.contact')}
                        </button>

                        {/* Dil seçici - kısa kodlarla kompakt */}
                        <div className="flex items-center gap-2 pt-1 border-t border-midnight/10">
                            <Globe className="w-3.5 h-3.5 text-charcoal/40 shrink-0" />
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang.code)}
                                    className={`text-xs px-2 py-0.5 rounded transition-colors ${(i18n.language || 'en') === lang.code ? 'bg-midnight text-cream' : 'text-charcoal/60 hover:text-midnight'}`}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
