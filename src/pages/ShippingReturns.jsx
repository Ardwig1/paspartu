import { useEffect } from "react";
import { Link } from "react-router-dom";

const ShippingReturns = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-cream min-h-screen text-charcoal font-sans">
            {/* Header */}
            <div className="bg-midnight py-16 px-6 text-center">
                <Link to="/" className="font-serif text-2xl mb-8 block">
                    <span className="text-gold">Paspartu</span><span className="text-cream">.co</span>
                </Link>
                <h1 className="font-serif text-4xl text-cream">Shipping & Returns</h1>
                <p className="text-white/50 text-sm mt-3">Kargo ve İade Politikası</p>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-6 py-20">
                <p className="text-sm text-charcoal/50 mb-12">Son güncelleme: Mart 2026</p>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">1. Teslimat Bölgesi</h2>
                    <p className="leading-relaxed text-charcoal/80">
                        Paspartu.co şu anda yalnızca <strong>Türkiye genelinde</strong> teslimat yapmaktadır.
                        Yurt dışı teslimatı için gelişmelerimizi takip etmenizi öneririz.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">2. Kargo Süresi</h2>
                    <p className="leading-relaxed text-charcoal/80">
                        Siparişler, ödeme onayının ardından <strong>1-2 iş günü</strong> içinde hazırlanır ve kargoya verilir.
                        Kargo teslim süresi siparişin kargoya verilmesinden itibaren ortalama <strong>3-5 iş günüdür.</strong>
                        Resmi tatil ve yoğun dönemlerde bu süre uzayabilir.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">3. Kargo Ücreti</h2>
                    <p className="leading-relaxed text-charcoal/80">
                        Kargo ücreti, abonelik paketine ve teslimat adresine göre değişiklik gösterebilir.
                        Güncel kargo ücretleri sipariş tamamlama ekranında görüntülenir.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">4. İade Politikası</h2>
                    <p className="leading-relaxed text-charcoal/80 mb-4">
                        Teslim tarihinden itibaren <strong>14 gün içinde</strong> iade talebinde bulunabilirsiniz. İade için aşağıdaki koşulların sağlanması gerekmektedir:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-charcoal/80">
                        <li>Ürün orijinal ambalajında ve hasarsız olmalıdır</li>
                        <li>Ürün kullanılmamış olmalıdır</li>
                        <li>Fatura veya sipariş numarası ibraz edilmelidir</li>
                    </ul>
                    <p className="mt-4 text-charcoal/80">
                        İade talebi için:{" "}
                        <a href="mailto:paspartu.co@outlook.com" className="text-gold hover:underline">paspartu.co@outlook.com</a>
                        {" "}adresine e-posta gönderiniz.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">5. Hasarlı veya Eksik Ürün</h2>
                    <p className="leading-relaxed text-charcoal/80">
                        Ürünleriniz hasarlı veya eksik gelirse, teslimattan itibaren <strong>48 saat içinde</strong> fotoğraflı olarak bize bildirmeniz gerekmektedir.
                        Bu durumda ücretsiz yeniden gönderim veya tam iade sağlanır.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">6. İade Sonrası İşlemler</h2>
                    <p className="leading-relaxed text-charcoal/80">
                        İade kabul edildikten sonra ödeme iadesi, orijinal ödeme yöntemine <strong>5-10 iş günü</strong> içinde yapılır.
                        Kargo masrafları iade durumunda müşteriye aittir; hasarlı veya yanlış ürün teslimatında kargo ücreti Paspartu.co tarafından karşılanır.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="font-serif text-2xl text-midnight mb-4">7. İletişim</h2>
                    <p className="leading-relaxed text-charcoal/80">
                        Kargo veya iade ile ilgili her türlü sorunuz için:{" "}
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

export default ShippingReturns;
