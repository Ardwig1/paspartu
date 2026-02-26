import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const Membership = () => {
    const { t } = useTranslation();

    const tiers = [
        {
            name: t('membership.tier1_name'),
            price: t('membership.tier1_price'),
            description: t('membership.tier1_desc'),
            features: [t('membership.tier1_feat1'), t('membership.tier1_feat2'), t('membership.tier1_feat3')]
        },
        {
            name: t('membership.tier2_name'),
            price: t('membership.tier2_price'),
            description: t('membership.tier2_desc'),
            features: [t('membership.tier2_feat1'), t('membership.tier2_feat2'), t('membership.tier2_feat3'), t('membership.tier2_feat4')],
            highlight: true
        },
        {
            name: t('membership.tier3_name'),
            price: t('membership.tier3_price'),
            description: t('membership.tier3_desc'),
            features: [t('membership.tier3_feat1'), t('membership.tier3_feat2'), t('membership.tier3_feat3'), t('membership.tier3_feat4'), t('membership.tier3_feat5'), t('membership.tier3_feat6')],
        }
    ];

    return (
        <section id="membership" className="py-32 px-6 bg-cream">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="font-serif text-4xl text-midnight mb-4">{t('membership.title')}</h2>
                    <p className="text-charcoal/60">{t('membership.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`p-10 border ${tier.highlight ? 'border-midnight bg-midnight text-cream' : 'border-black/5 bg-cream/30 text-charcoal'} flex flex-col relative`}
                        >
                            {tier.highlight && (
                                <span className="absolute top-0 right-0 bg-gold text-midnight text-xs font-bold px-3 py-1 uppercase tracking-widest">
                                    {t('membership.tier2_badge')}
                                </span>
                            )}
                            <h3 className="font-serif text-2xl mb-2">{tier.name}</h3>
                            <div className="text-3xl font-bold mb-6">{tier.price}</div>
                            <p className="opacity-80 mb-8 min-h-[3rem]">{tier.description}</p>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <Check className={`w-4 h-4 mt-1 ${tier.highlight ? 'text-gold' : 'text-midnight'}`} />
                                        <span className="opacity-90">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 text-sm uppercase tracking-widest transition-all ${tier.highlight ? 'bg-cream text-midnight hover:bg-gold' : 'bg-midnight text-cream hover:opacity-90'}`}>
                                {t('membership.apply')}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Membership;
