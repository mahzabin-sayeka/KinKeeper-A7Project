import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BannerSection from "./components/BannerSection";
import StatCards from "./components/StatCards";
import FriendCard from "./Components/FriendCard";
import FriendDetails from "./Components/FriendDetails";
import Footer from "./Components/Footer";
import Timeline from "./Components/Timeline"; 
import Stats from "./Components/Stats"; 


import Loading from "./Components/Loading"; 
import NotFound from "./Components/NotFound"; 

function App() {
  const [loading, setLoading] = useState(true);


  // loadingg,,
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);



  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <div className="flex-grow bg-[#F8F9FA]">
        <Routes>
          <Route path="/" element={
            loading ? <Loading /> : (
              <>
                <BannerSection />
                <StatCards />
                <FriendCard />
              </>
            )
          } />
          
          <Route path="/friend/:id" element={<FriendDetails />} />
          
          {/* Timeline route new */}
          <Route path="/timeline" element={<Timeline />} />

          {/* Stats route new */}
          <Route path="/stats" element={<Stats />} />

      {/*..404 Page....., */}
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;