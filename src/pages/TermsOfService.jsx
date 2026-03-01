import { useEffect } from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-cream min-h-screen text-charcoal font-sans">
            {/* Header */}
            <div className="bg-midnight py-16 px-6 text-center">
                <Link to="/" className="font-serif text-2xl mb-8 block">
                    <span className="text-gold">Paspartu</span><span className="text-cream">.co</span>
                </Link>
                <h1 className="font-serif text-4xl text-cream">Terms of Service</h1>
                <p className="text-white/50 text-sm mt-3">Hizmet Şartları</p>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-6 py-20">
                <p className="text-sm text-charcoal/50 mb-12">Son güncelleme: Mart 2026</p>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">1. Taraflar ve Kapsam</h2>
                    <p className="leading-relaxed text-charcoal/80">
                        Bu Hizmet Şartları, <strong>Paspartu.co</strong> ile paspartu.co web sitesini kullanan veya abonelik hizmetlerinden yararlanan kullanıcılar ("Üye") arasındaki ilişkiyi düzenlemektedir.
                        Web sitemizi kullanarak bu şartları kabul etmiş sayılırsınız.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">2. Hizmetlerimiz</h2>
                    <p className="leading-relaxed text-charcoal/80 mb-4">
                        Paspartu.co; sanat, felsefe ve kültür odaklı aylık abonelik kutuları, dijital içerikler ve entelektüel meclis etkinlikleri sunmaktadır. Sunulan abonelik kademeleri şunlardır:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-charcoal/80">
                        <li><strong>Observer (249,99 TL/ay):</strong> Dijital içerik erişimi, meclis katılımı ve kürasyon hakları</li>
                        <li><strong>Curator (449,99 TL/ay):</strong> Observer haklarına ek olarak aylık fiziki çerçeveli sanat eseri teslimatı</li>
                        <li><strong>Master (699,99 TL/ay):</strong> Tüm haklara ek olarak meclis moderatörlüğü ve aylık tema belirleme hakkı</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">3. Abonelik ve Ödeme</h2>
                    <p className="leading-relaxed text-charcoal/80">
                        Abonelikler aylık olarak yenilenir. Ödeme, her dönem başında belirtilen tutardan tahsil edilir. Aboneliğinizi dilediğiniz zaman bir sonraki fatura döneminden önce iptal edebilirsiniz.
                        Yıllık abonelik seçeneği sunulduğunda ilgili koşullar ayrıca bildirilir.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">4. Ön Kayıt Süreci</h2>
                    <p className="leading-relaxed text-charcoal/80">
                        Hizmetlerimiz şu anda ön kayıt aşamasındadır. Ön kayıt yaptırmak herhangi bir ücret veya yükümlülük doğurmaz.
                        Hizmet başladığında ön kayıt sahipleri öncelikli olarak bilgilendirilecektir.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">5. Kullanıcı Yükümlülükleri</h2>
                    <p className="leading-relaxed text-charcoal/80 mb-4">Üye olarak şunları kabul etmiş sayılırsınız:</p>
                    <ul className="list-disc list-inside space-y-2 text-charcoal/80">
                        <li>Hesap bilgilerinizi doğru ve güncel tutmak</li>
                        <li>Hizmetleri yalnızca kişisel kullanım için kullanmak</li>
                        <li>Platformun veya içeriklerin ticari amaçla kopyalanmasından kaçınmak</li>
                        <li>Diğer üyelere saygılı davranmak</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">6. Fikri Mülkiyet</h2>
                    <p className="leading-relaxed text-charcoal/80">
                        Paspartu.co bünyesindeki tüm içerikler (görseller, metinler, tasarımlar, sanat eserleri) Paspartu.co'ya aittir ve telif hukuku kapsamında korunmaktadır.
                        Üyelerin izinsiz çoğaltması, dağıtması veya ticari amaçla kullanması yasaktır.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">7. Sorumluluğun Sınırlandırılması</h2>
                    <p className="leading-relaxed text-charcoal/80">
                        Paspartu.co, hizmet kesintilerinden veya kullanıcı hatalarından kaynaklanan dolaylı zararlardan sorumlu tutulamaz.
                        Ürün teslimat gecikmeleri nedeniyle kargo firmalarının sorumluluğuna başvurulabilir.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">8. İletişim</h2>
                    <p className="leading-relaxed text-charcoal/80">
                        Hizmet şartlarına ilişkin sorularınız için:{" "}
                        <a href="mailto:paspartu.co@outlook.com" className="text-gold hover:underline">paspartu.co@outlook.com</a>
                    </p>
                </section>

                <div className="border-t border-black/10 pt-8 mt-12">
                    <Link to="/" className="text-sm text-charcoal/50 hover:text-midnight transition-colors">← Ana Sayfaya Dön</Link>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
