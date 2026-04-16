import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BannerSection from "./components/BannerSection";
import StatCards from "./components/StatCards";
import FriendCard from "./Components/FriendCard";
import FriendDetails from "./Components/FriendDetails";
import Footer from "./Components/Footer";

import Timeline from "./Components/Timeline"; 

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <div className="flex-grow bg-[#F8F9FA]">
        <Routes>
          <Route path="/" element={
            <>
              <BannerSection />
              <StatCards />
              <FriendCard />
            </>
          } />
          <Route path="/friend/:id" element={<FriendDetails />} />
          
          {/* Timeline route new */}
          <Route path="/timeline" element={<Timeline />} />
          
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
