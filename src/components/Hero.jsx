import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative pt-20 overflow-hidden">

            {/* Background elements (Abstract shapes) */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cream via-cream to-transparent z-10" />

            {/* Initial Staggered Text */}
            <div className="z-20 text-center max-w-4xl px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, type: "spring" }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-midnight leading-tight mb-4"
                >
                    {t('hero.title1')} <br />
                    <span className="italic font-light">{t('hero.title2_pre')}</span> {t('hero.title2_post')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="font-sans text-charcoal/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
                >
                    {t('hero.subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <button
                        onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-midnight text-cream px-10 py-4 font-serif italic text-xl rounded-full hover:bg-midnight-light transition-all transform hover:scale-105 shadow-2xl"
                    >
                        {t('hero.cta')}
                    </button>
                </motion.div>
            </div>

            {/* Decorative Line */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: 160 }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="w-px bg-midnight/20 absolute bottom-0 z-0"
            />
        </section>
    );
};

export default Hero;
