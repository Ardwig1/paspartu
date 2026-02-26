import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Dynamically import all images starting with "gallery-final" from the assets folder
const imageModules = import.meta.glob('../assets/gallery-final*.{jpg,jpeg}', { eager: true, import: 'default' });
const images = Object.values(imageModules);

const Gallery = () => {
    const { t } = useTranslation();
    // Duplicate images enough times to ensure seamless looping without gaps
    // For a smooth loop, we need at least enough content to fill the screen + buffer
    // and then we duplicate that entire set for the 'second half' of the loop.
    // Since we have a few images, tripling the base set before doubling for the loop guarantees coverage.
    const marqueeImages = [...images, ...images, ...images];



    return (
        <section id="archive" className="py-24 overflow-hidden bg-cream">
            <div className="px-6 md:px-12 mb-12 flex justify-between items-end max-w-7xl mx-auto">
                <h2 className="font-serif text-4xl text-midnight">{t('gallery.title')}</h2>
                <a href="#" className="hidden md:block text-sm border-b border-midnight pb-1 hover:text-gold hover:border-gold transition-colors">{t('gallery.link')}</a>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                <div className="flex">
                    <motion.div
                        className="flex gap-8 px-4"
                        animate={{
                            x: "-50%",
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 120, // Increase duration for smoother/slower scroll with more items
                                ease: "linear",
                            },
                        }}
                    >
                        {/* We render the set twice. The animation goes from 0 to -50%.
                            At -50%, the second half matches the position of the first half at 0%, creating a seamless loop.
                        */}
                        {[...marqueeImages, ...marqueeImages].map((src, index) => (
                            <div
                                key={index}
                                className="w-[300px] md:w-[450px] aspect-[3/4] overflow-hidden shadow-md bg-gray-100 flex-shrink-0"
                            >
                                <img
                                    src={src}
                                    alt={`Gallery item ${index}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
