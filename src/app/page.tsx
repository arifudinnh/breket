import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import TrustSignals from "@/components/TrustSignals";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CheckoutForm from "@/components/CheckoutForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <Hero />
      <ProductGrid />

      {/* About Section */}
      <section id="about" className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative h-96 rounded-2xl overflow-hidden bg-[#1A1A1A] border border-[#2A2A2A]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/breket.jpg')" }}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-[#FF5A1F] text-sm font-semibold tracking-widest uppercase mb-2 block">
                Tentang Kami
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                Tentang Briket<span className="text-[#FF5A1F]">.id</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#FF5A1F] to-[#FFA07A] rounded-full mb-8" />
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Berlokasi di Serang, Banten, kami adalah produsen briket arang batok kelapa premium. Pabrik kami menerapkan standar kontrol kualitas yang ketat untuk memastikan setiap briket memenuhi standar ekspor.
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Dengan kandungan karbon tinggi, tanpa bahan kimia tambahan, dan residu abu yang sangat minim, briket kami menghasilkan panas yang konsisten, bersih, dan nyaman untuk segala acara bakar-bakar Anda. Sangat cocok untuk kumpul keluarga, sate, bakaran ayam, maupun aneka hidangan lainnya. Kami melayani pembelian eceran lokal maupun grosir.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-[#FF5A1F] pl-4">
                  <h4 className="text-white font-bold text-xl mb-1">100%</h4>
                  <p className="text-gray-400 text-sm">Batok Kelapa Alami</p>
                </div>
                <div className="border-l-2 border-[#FF5A1F] pl-4">
                  <h4 className="text-white font-bold text-xl mb-1">&gt;2 Jam</h4>
                  <p className="text-gray-400 text-sm">Waktu Bakar Konsisten</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />
      <Testimonials />
      <FAQ />
      <CheckoutForm />
      <Footer />
    </main>
  );
}
