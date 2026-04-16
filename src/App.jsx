import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BannerSection from "./components/BannerSection";
import StatCards from "./components/StatCards";
import FriendCard from "./Components/FriendCard";
import FriendDetails from "./Components/FriendDetails";

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
