import { useFriends } from "./FriendContext"; 

const Timeline = () => {
  const { timeline } = useFriends(); 

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-[#1D2939] mb-10 tracking-tight">Timeline</h1>
      
      {/* if no data., */}
      {timeline.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
          <p className="text-gray-400 font-medium italic">No interactions logged yet. Go to a friend's profile to check-in!</p>
        </div>
      ) : (
        
        // timeline list
        <div className="space-y-4">
          {timeline.map((item) => (
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