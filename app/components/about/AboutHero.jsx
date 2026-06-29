const AboutHero = () => {
  return (
    <section className="bg-[#1a2d56] py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block border border-white/30 text-white/70 text-xs tracking-widest uppercase rounded-full px-4 py-1.5 mb-6">
          About Us
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
          Driven to make better drivers
        </h1>
        <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          For over 15 years, DriveRight has helped people across the city earn
          their licence with confidence and care.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
