import Navbar from "./components/Navbar";
import BannerSection from "./components/BannerSection";
import StatCards from "./components/StatCards"; // Import korla

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Background color eikhane  */}
      <div className="flex-grow bg-[#F8F9FA]">
        
        <BannerSection />
        <StatCards /> 
      </div>
    </div>
  );
}

export default App
