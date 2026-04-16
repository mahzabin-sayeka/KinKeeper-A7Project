const BannerSection = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        
  {/* heading line ta */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
          Friends to keep close in your life
        </h1>

 {/* nicher halka line */}
        <p className="text-[#667085] text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

 {/* ৩. add friend button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-[#1D3E31] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#163026] transition-all">
            <i className="fa-solid fa-plus text-xs"></i>
            <span className="text-sm">Add a Friend</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default BannerSection;