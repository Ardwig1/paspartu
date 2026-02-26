import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <section id="about-us" className="py-24 px-6 bg-cream text-midnight">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl mb-12 text-midnight"
                >
                    {t('about.title')}
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg leading-relaxed opacity-80 space-y-6 text-left md:text-center"
                >
                    <p>{t('about.p1')}</p>
                    <p>{t('about.p2')}</p>
                    <p>{t('about.p3')}</p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
