// filter state manage er jonno
import { useState } from "react"; 

import { useFriends } from "./FriendContext"; 

const Timeline = () => {
  const { timeline } = useFriends(); 
  const [filter, setFilter] = useState("All"); //new

  // new
  const filteredTimeline = timeline.filter((item) => {
    if (filter === "All") return true;
    return item.type === filter;
  });

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-[#1D2939] mb-10 tracking-tight">Timeline</h1>
      
      {/* Filter Box: Heading er niche */}
      <div className="mb-8 flex justify-end">
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-xl bg-white text-gray-700 font-bold focus:outline-none focus:border-[#1D3E31] shadow-sm transition-all"
        >
          <option value="All">All Interactions</option>
          <option value="Call">Calls</option>
          <option value="Text">Messages</option>
          <option value="Video">Video Calls</option>
        </select>
      </div>

      {/* if no data., */}
      {filteredTimeline.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
          <p className="text-gray-400 font-medium italic">
            {filter === "All" ? "No interactions logged yet." : `No ${filter} interactions found.`}
          </p>
        </div>
      ) : (
        
        // timeline list (filtered)
        <div className="space-y-4">
          {filteredTimeline.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                {/* Icon Box */}
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl border border-gray-50 shadow-inner">
                  {item.icon}
                </div>
                
                {/* Details Text */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {item.type} <span className="text-gray-400 font-medium">with {item.with}</span>
                  </h4>
                  <p className="text-sm text-gray-400 font-semibold mt-1 uppercase tracking-wider">
                    {item.date}
                  </p>
                </div>
              </div>

              {/* Right Side Arrow Icon */}
              <div className="text-gray-300 pr-2">
                <i className="fa-solid fa-chevron-right text-sm"></i>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;