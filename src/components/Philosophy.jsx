import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Philosophy = () => {
    const { t } = useTranslation();

    return (
        <section className="py-32 px-6 md:px-12 bg-cream text-charcoal">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">

                <div className="md:w-1/3">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-4xl md:text-5xl text-midnight mb-6"
                    >
                        {t('philosophy.title_pre')} <br /> <span className="italic text-gold">{t('philosophy.title_highlight')}</span>
                    </motion.h2>
                    <div className="w-12 h-1 bg-midnight/10 mb-8" />
                </div>

                <div className="md:w-2/3 space-y-8 text-lg md:text-xl leading-relaxed text-charcoal/80">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {t('philosophy.p1')}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {t('philosophy.p2')}
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
