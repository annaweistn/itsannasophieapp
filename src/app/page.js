import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-neutral-800">
        <h1 className="text-2xl font-bold">DVSY</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-neutral-400">
            Designers
          </a>
          <a href="#" className="hover:text-neutral-400">
            Collabs
          </a>
          <a href="#" className="hover:text-neutral-400">
            Events
          </a>
          <a href="#" className="hover:text-neutral-400">
            Blog
          </a>
          <a href="#" className="hover:text-neutral-400">
            Card
          </a>
          <a href="#" className="bg-red-600 px-4 py-2 rounded-full">
            Get in Touch
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Fashion Hero"
          fill
          className="object-cover opacity-50"
        />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            DESIGN & FREEDOM
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            Explore Independent Style by Embracing Uniqueness with Our Exclusive
            Designer Apparel
          </p>
          <button className="mt-6 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 py-16">
        {[
          {
            title: "Independency",
            desc: "Explore the creativity of independent designers from around the globe.",
          },
          {
            title: "Uniquity",
            desc: "Discover the charm of unique pieces that stand out effortlessly.",
          },
          {
            title: "Quality",
            desc: "Experience unparalleled craftsmanship and attention to detail.",
          },
          {
            title: "Sustainability",
            desc: "Embrace eco-conscious fashion choices without compromising on style.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-neutral-900 p-6 rounded-xl hover:bg-neutral-800 transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-neutral-400">{f.desc}</p>
            </div>
            <button className="mt-4 text-sm text-neutral-400 hover:text-white">
              Learn More →
            </button>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 pb-16 text-center">
        {[
          { number: "150+", label: "Designers" },
          { number: "500+", label: "Clients" },
          { number: "20K+", label: "Masterpieces" },
          { number: "50+", label: "Events" },
        ].map((s, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold">{s.number}</h3>
            <p className="text-neutral-400">{s.label}</p>
          </div>
        ))}
      </section>

      {/* About */}
      <section className="px-8 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Where Fashion Meets Freedom
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            We believe that fashion should be the expression of individuality.
            We encourage creativity and originality in every item we offer,
            presenting customers with exclusive collections from independent
            designers.
          </p>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            Driven by our dedication to authenticity, we curate each collection
            with a keen eye for unique designs that inspire confidence and
            self-expression.
          </p>
        </div>
        <Image
          src="/about.jpg"
          alt="Fashion Story"
          width={600}
          height={400}
          className="rounded-xl object-cover"
        />
      </section>

      {/* Advantages */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Our Advantages</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Independent Designers",
              desc: "Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments.",
            },
            {
              title: "Exclusive & Uniquity",
              desc: "Indulge in curated collections showcasing exclusive, one-of-a-kind pieces.",
            },
            {
              title: "High Quality",
              desc: "Embrace superior craftsmanship with meticulously curated, enduring high-quality garments.",
            },
            {
              title: "Eco-Friendly",
              desc: "Join our commitment to sustainability with eco-friendly fashion options.",
            },
          ].map((adv, i) => (
            <div
              key={i}
              className="bg-neutral-900 p-6 rounded-xl hover:bg-neutral-800 transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{adv.title}</h3>
                <p className="text-neutral-400 text-sm">{adv.desc}</p>
              </div>
              <button className="mt-4 text-sm text-neutral-400 hover:text-white">
                Explore →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 border-t border-neutral-800 text-center text-sm text-neutral-500">
        © 2025 Your Name – All rights reserved.
      </footer>
    </main>
  );
}
