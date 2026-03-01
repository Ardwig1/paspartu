import { Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer id="contact" className="bg-midnight text-cream py-20 px-6 md:px-12 border-t border-white/10 font-serif">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Brand - Top Center */}
                <div className="mb-16 text-center">
                    <h2 className="font-serif text-3xl"><span className="text-gold">Paspartu</span><span className="text-cream">.co</span></h2>
                </div>

                {/* 3-Column Layout */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                    {/* Left - Legal */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xs uppercase tracking-widest text-gold mb-6">{t('footer.legal')}</h3>
                        <ul className="space-y-4 text-sm text-white/80">
                            <li><Link to="/privacy-policy" className="hover:text-white transition-colors">{t('footer.legal_privacy')}</Link></li>
                            <li><Link to="/terms-of-service" className="hover:text-white transition-colors">{t('footer.legal_terms')}</Link></li>
                            <li><Link to="/shipping-returns" className="hover:text-white transition-colors">{t('footer.legal_shipping')}</Link></li>
                        </ul>
                    </div>

                    {/* Center - Contact */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-xs uppercase tracking-widest text-gold mb-6">{t('footer.contact')}</h3>
                        <div className="text-white/80 text-sm space-y-4">
                            <p>
                                <a href="mailto:paspartu.co@outlook.com" className="hover:text-gold transition-colors block">
                                    paspartu.co@outlook.com
                                </a>
                            </p>
                            <p>
                                <a href="tel:+905387446573" className="hover:text-gold transition-colors block">
                                    +90 538 744 65 73
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Right - Social */}
                    <div className="flex flex-col items-center md:items-end">
                        <h3 className="text-xs uppercase tracking-widest text-gold mb-6">{t('footer.social')}</h3>
                        <div className="flex gap-6">
                            <a
                                href="https://www.instagram.com/paspartuco/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-gold transition-colors"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/paspartu-co"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-gold transition-colors"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="mt-20 text-white/20 text-xs text-center">
                    &copy; {new Date().getFullYear()} {t('footer.copyright')}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
