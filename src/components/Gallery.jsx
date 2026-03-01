import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Dynamically import all images starting with "gallery-final" from the assets folder
const imageModules = import.meta.glob('../assets/gallery-final*.{jpg,jpeg}', { eager: true, import: 'default' });
const images = Object.values(imageModules);

const Gallery = () => {
    const { t } = useTranslation();
    const marqueeImages = [...images, ...images, ...images];

    return (
        <section id="archive" className="py-24 bg-cream">
            <div className="px-6 md:px-12 mb-6 max-w-7xl mx-auto">
                <h2 className="font-serif text-4xl text-midnight">{t('gallery.title')}</h2>
            </div>

            {/* Marquee Container — overflow-x-hidden + py-8 so frames aren't clipped top/bottom */}
            <div className="relative w-full overflow-x-hidden py-8">
                <div className="flex">
                    <motion.div
                        className="flex gap-8 px-4"
                        animate={{ x: "-50%" }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 120,
                                ease: "linear",
                            },
                        }}
                    >
                        {[...marqueeImages, ...marqueeImages].map((src, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[300px] md:w-[450px]"
                                style={{
                                    padding: '14px',
                                    background: '#f5f0e8',
                                    boxShadow: '0 0 0 2px #c8b99a, 0 6px 28px rgba(0,0,0,0.15)',
                                }}
                            >
                                <div style={{ padding: '6px', border: '1px solid #c8b99a' }}>
                                    <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                                        <img
                                            src={src}
                                            alt={`Gallery item ${index}`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Caption below marquee */}
            <div className="px-6 md:px-12 mt-6 max-w-7xl mx-auto text-right">
                <p className="text-sm text-charcoal/50 italic">Source: Art Institute of Chicago</p>
            </div>
        </section>
    );
};

export default Gallery;
