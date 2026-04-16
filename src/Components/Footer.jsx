const Footer = () => {
  return (
    <footer className="w-full bg-[#1A3D2F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center">
        
        {/* heading line */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-center">
          KeenKeeper
        </h2>
        
        
        <p className="max-w-xl text-center text-sm md:text-base text-gray-300 mb-10 leading-relaxed font-normal">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        
        {/* social link sectionnn */}
        <div className="flex flex-col items-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
            Social Links
          </p>
          
          <div className="flex items-center gap-8 mb-6">
            {/*   Icons.....    */}
            <a href="#" className="text-2xl hover:text-gray-400 transition-colors" title="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="text-2xl hover:text-gray-400 transition-colors" title="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="text-2xl hover:text-gray-400 transition-colors" title="Twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>

          
          <div className="w-20 h-[1px] bg-gray-600 mb-8"></div>
        </div>
        
        {/* akdom nicher lines */}
        <div className="flex flex-col items-center ">
          <p className="text-[11px] text-gray-500 font-light">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-[11px] text-gray-500 font-light">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;