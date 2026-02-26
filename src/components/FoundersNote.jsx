import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const FoundersNote = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 px-6 bg-cream text-midnight border-t border-midnight/5">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-3xl md:text-4xl mb-8 text-midnight italic"
                >
                    {t('founder.title')}
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 text-lg leading-relaxed opacity-90"
                >
                    <p>{t('founder.p1')}</p>
                    <p>{t('founder.p2')}</p>
                    <p className="font-medium mt-8">
                        {t('founder.p3')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FoundersNote;
