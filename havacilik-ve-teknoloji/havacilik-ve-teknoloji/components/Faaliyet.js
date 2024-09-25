export default function Faaliyet() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
          <h2 className="text-4xl font-bold text-white mb-12">FAALİYETLERİMİZ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Faaliyet 1 */}
            <div className="bg-white rounded-lg w-64 h-64 flex items-center justify-center text-center">
              <h3 className="text-xl font-bold">İNSANSIZ HAVA ARAÇLARI</h3>
            </div>
            {/* Faaliyet 2 */}
            <div className="bg-white rounded-lg w-64 h-64 flex items-center justify-center text-center">
              <h3 className="text-xl font-bold">İNSANSIZ HAVA ARAÇLARI</h3>
            </div>
            {/* Faaliyet 3 */}
            <div className="bg-white rounded-lg w-64 h-64 flex items-center justify-center text-center">
              <h3 className="text-xl font-bold">İNSANSIZ HAVA ARAÇLARI</h3>
            </div>
          </div>
        </section>
      );
  }