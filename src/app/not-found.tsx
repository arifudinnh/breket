import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-extrabold text-[#FF5A1F] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-2">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-400 mb-8">Halaman yang Anda cari tidak ada atau telah dipindahkan.</p>
        <Link
          href="/"
          className="inline-flex px-8 py-3 bg-[#FF5A1F] hover:bg-[#E04815] text-white font-medium rounded-lg transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
