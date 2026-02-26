import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isLangOpen, setIsLangOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsLangOpen(false);
    };

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'tr', label: 'Türkçe' },
        { code: 'fr', label: 'Français' },
        { code: 'de', label: 'Deutsch' },
        { code: 'it', label: 'Italiano' },
        { code: 'es', label: 'Español' }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center backdrop-blur-sm bg-cream/80">
            {/* Left - Navigation Links */}
            <div className="flex items-center gap-8">
                <button
                    onClick={() => scrollToSection('about-us')}
                    className="text-sm font-medium text-charcoal tracking-wide hover:text-gold transition-colors uppercase"
                >
                    {t('nav.about')}
                </button>
                <button
                    onClick={() => scrollToSection('contact')}
                    className="text-sm font-medium text-charcoal tracking-wide hover:text-gold transition-colors uppercase"
                >
                    {t('nav.contact')}
                </button>
            </div>

            {/* Center - Logo */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute left-1/2 transform -translate-x-1/2"
            >
                <h1 className="font-serif text-3xl md:text-4xl text-midnight tracking-tight font-bold cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Paspartu<span className="text-gold">.co</span>
                </h1>
            </motion.div>

            {/* Right - Lang & Login */}
            <div className="flex items-center gap-4">
                {/* Language Selector */}
                <div className="relative">
                    <button
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        className="p-2 hover:text-gold transition-colors"
                    >
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
                    href="https://docs.google.com/forms/d/e/1FAIpQLScnaSDw3yD5zOLrl9C5oK3kJnzKYFyJgaZ8ivq35PK97aeRJg/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-midnight text-midnight text-sm uppercase tracking-widest hover:bg-midnight hover:text-cream transition-all rounded-full"
                >
                    {t('nav.login')}
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
