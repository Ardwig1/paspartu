import { useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-cream min-h-screen text-charcoal font-sans">
            {/* Header */}
            <div className="bg-midnight py-16 px-6 text-center">
                <Link to="/" className="font-serif text-2xl mb-8 block">
                    <span className="text-gold">Paspartu</span><span className="text-cream">.co</span>
                </Link>
                <h1 className="font-serif text-4xl text-cream">Privacy Policy</h1>
                <p className="text-white/50 text-sm mt-3">Gizlilik Politikası</p>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-6 py-20">
                <p className="text-sm text-charcoal/50 mb-12">Son güncelleme: Mart 2026</p>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">1. Veri Sorumlusu</h2>
                    <p className="leading-relaxed text-charcoal/80">
                        Bu Gizlilik Politikası, <strong>Paspartu.co</strong> tarafından yönetilen paspartu.co web sitesine uygulanmaktadır.
                        Veri sorumlusu olarak kişisel verilerinizi aşağıda açıklanan amaçlar doğrultusunda işlemekteyiz.
                        İletişim: <a href="mailto:paspartu.co@outlook.com" className="text-gold hover:underline">paspartu.co@outlook.com</a>
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">2. Topladığımız Veriler</h2>
                    <p className="leading-relaxed text-charcoal/80 mb-4">Ön kayıt formu ve iletişim kanalları aracılığıyla aşağıdaki kişisel verileri toplayabiliriz:</p>
                    <ul className="list-disc list-inside space-y-2 text-charcoal/80">
                        <li>Ad ve soyadı</li>
                        <li>E-posta adresi</li>
                        <li>Abonelik tercihleri</li>
                        <li>Teslimat adresi (abonelik satın alımlarında)</li>
                        <li>Ödeme bilgileri (yalnızca güvenli ödeme altyapısı üzerinden)</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">3. Verilerin Kullanım Amacı</h2>
                    <p className="leading-relaxed text-charcoal/80 mb-4">Kişisel verileriniz şu amaçlarla kullanılmaktadır:</p>
                    <ul className="list-disc list-inside space-y-2 text-charcoal/80">
                        <li>Abonelik siparişlerinin yerine getirilmesi ve kargo takibi</li>
                        <li>Üyelik bilgilerinin ve fatura kayıtlarının tutulması</li>
                        <li>Müşteri hizmetleri ve destek sağlanması</li>
                        <li>Hizmetlerimizle ilgili bilgilendirme e-postaları gönderilmesi (onay verilmesi halinde)</li>
                        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">4. Verilerin Paylaşımı</h2>
                    <p className="leading-relaxed text-charcoal/80">
                        Kişisel verileriniz hiçbir koşulda üçüncü taraflara ticari amaçla satılmaz veya kiralanmaz.
                        Verileriniz yalnızca kargo firmaları, ödeme altyapısı sağlayıcıları ve yasal zorunluluklar kapsamında yetkili makamlarla, yalnızca hizmetin sunulması için gerekli olduğu ölçüde paylaşılabilir.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">5. Veri Saklama Süresi</h2>
                    <p className="leading-relaxed text-charcoal/80">
                        Kişisel verileriniz, aboneliğinizin sona ermesinden itibaren yasal saklama zorunlulukları çerçevesinde (genellikle 10 yıl) saklanır; ardından güvenli biçimde silinir veya anonimleştirilir.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">6. Haklarınız (KVKK)</h2>
                    <p className="leading-relaxed text-charcoal/80 mb-4">6698 sayılı KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
                    <ul className="list-disc list-inside space-y-2 text-charcoal/80">
                        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                        <li>Verilerinize erişim ve düzeltme talep etme</li>
                        <li>Verilerinizin silinmesini talep etme</li>
                        <li>İşlemeye itiraz etme</li>
                        <li>Veri taşınabilirliği talep etme</li>
                    </ul>
                    <p className="mt-4 text-charcoal/80">
                        Talepleriniz için: <a href="mailto:paspartu.co@outlook.com" className="text-gold hover:underline">paspartu.co@outlook.com</a>
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">7. Çerezler</h2>
                    <p className="leading-relaxed text-charcoal/80">
                        Web sitemiz, temel işlevsellik için zorunlu çerezler kullanmaktadır. Analitik veya pazarlama amaçlı çerezler için açık onayınız alınmaktadır.
                    </p>
                </section>

                <div className="border-t border-black/10 pt-8 mt-12">
                    <Link to="/" className="text-sm text-charcoal/50 hover:text-midnight transition-colors">← Ana Sayfaya Dön</Link>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
