export default function Galeri() {
    const images = [
      '/1.jpg',
      '/2.jpg',
      '/3.jpg',
      '/4.jpg',
      '/5.jpg',
      '/6.jpg',
      '/7.jpg',
      '/8.jpg',
      '/9.jpg',
    ];
  
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
        <h2 className="text-4xl font-bold text-white mb-12">GALERİ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div key={index} className="w-full h-full">
              <img
                src={src}
                alt={`Galeri resmi ${index + 1}`}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }