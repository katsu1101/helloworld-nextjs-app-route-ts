export default function AboutHero() {
  return (
    <section className="relative h-[520px] bg-cover bg-center text-white"
             style={{backgroundImage: "url('/about-bg.jpg')"}}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl font-extrabold">私たちについて</h1>
        <p className="text-lg mt-4 max-w-2xl">
          私たちは、Web 技術を活用して未来を創造するエンジニア集団です。
        </p>
        <a href="/contact"
           className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
          お問い合わせ
        </a>
      </div>
    </section>
  );
}
