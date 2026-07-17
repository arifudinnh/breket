export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-[#2A2A2A] border-t-[#FF5A1F] rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-400">Memuat...</p>
      </div>
    </div>
  );
}
