import { Link, useLocation } from "react-router-dom"; 

const Navbar = () => {
  const location = useLocation(); 

  return (
    <div className="drw-box z-50">
      <input id="tgl-btn" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content">
        <nav className="bg-white border-b flex justify-between items-center px-6 md:px-12 py-4">
          
          {/* left side logo */}
          <div className="logo-part">
            <Link to="/"> 
              <h1 className="text-xl md:text-2xl font-black">
                <span className="text-black">Keen</span>
                <span className="text-[#1D3E31]">Keeper</span>
              </h1>
            </Link>
          </div>

          {/* Right side Menu */}
          <div className="flex items-center">
            
            <div className="hidden md:flex gap-3">
              {/* Home Link */}
              <Link 
                to="/" 
                className={`flex items-center gap-2 px-4 py-2 rounded-md h-10 shadow-sm transition-all ${
                  location.pathname === "/" ? "bg-[#1D3E31] text-white" : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <i className="fa-solid fa-house text-sm"></i>
                <span className="text-sm font-bold">Home</span>
              </Link>
              
              {/* Timeline Link */}
              <Link 
                to="/timeline" 
                className={`flex items-center gap-2 px-4 py-2 rounded-md h-10 transition-all ${
                  location.pathname === "/timeline" ? "bg-[#1D3E31] text-white" : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <i className="fa-regular fa-clock"></i>
                <span className="text-sm font-medium">Timeline</span>
              </Link>
              
              {/* Stats Link */}
              {/* <button className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:bg-gray-50 h-10">
                <i className="fa-solid fa-chart-line"></i>
                <span className="text-sm font-medium">Stats</span>
              </button> */}
            
             <Link 
               to="/stats" 
                className={`flex items-center gap-2 px-4 py-2 rounded-md h-10 transition-all font-bold ${
               location.pathname === "/stats" 
                ? "bg-[#1D3E31] text-white shadow-sm" // ক্লিক করলে এই কালার হবে
                 : "text-gray-500 hover:bg-gray-50"
               }`}
              >
              <i className="fa-solid fa-chart-line"></i>
               <span className="text-sm font-medium">Stats</span>
            </Link>
            </div>

            {/* Mobile device eer jonno Icon */}
            <label htmlFor="tgl-btn" className="md:hidden cursor-pointer p-2 text-[#1D3E31]">
              <i className="fa-solid fa-bars text-xl"></i>
            </label>
          </div>

        </nav>
      </div> 

      {/* mobile view er kaj */}
      <div className="drawer-side">
        <label htmlFor="tgl-btn" className="drawer-overlay"></label>
        <ul className="menu p-5 w-60 min-h-full bg-white">
          <li className="font-black text-lg border-b mb-4 pb-2 italic text-[#1D3E31]">
              <span className="text-black">KEEN</span>KEEPER
          </li>
          <li>
            <Link to="/" className={`mb-2 py-3 font-bold ${location.pathname === "/" ? "bg-[#1D3E31] text-white" : "text-gray-600"}`}>
              <i className="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/timeline" className={`mb-2 py-3 ${location.pathname === "/timeline" ? "bg-[#1D3E31] text-white" : "text-gray-600"}`}>
              <i className="fa-regular fa-clock"></i> Timeline
            </Link>
          </li>
          <li><a className="text-gray-600 py-3"><i className="fa-solid fa-chart-line"></i> Stats</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;