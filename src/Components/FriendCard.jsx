import { Link } from "react-router-dom";
import friendsData from "../Data/Friend.json";

const FriendCard = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-20">
      <h2 className="text-xl font-bold text-gray-800 mb-8">Your Friends</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {friendsData.map((friend) => (
          <Link to={`/friend/${friend.id}`} key={friend.id} className="block">
            <div className="bg-white p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:shadow-sm transition-shadow h-full">
              
              {/* Profile Img */}
              <img 
                src={friend.image} 
                className="w-24 h-24 rounded-full object-cover mb-4 shadow-sm"
                alt={friend.name}
              />

              {/* Nam and time */}
              <h4 className="text-lg font-bold text-[#1D2939] mb-1">{friend.name}</h4>
              <p className="text-xs text-gray-400 mb-4">{friend.lastSeen}</p>

         {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {friend.tags?.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[#ECFDF3] text-[#027A48] text-[10px] font-bold rounded-full uppercase">
                    {tag}
                  </span>
                ))}
              </div>

 {/* Status Button */}
              <div className="w-full mt-auto">
                <button className={`w-full py-2 rounded-full text-xs font-bold text-white ${
                  friend.status === 'Overdue' ? 'bg-[#F04438]' : 
                  friend.status === 'On-Track' ? 'bg-[#064E3B]' : 
                  'bg-[#FDB022]'
                }`}>
                  {friend.status}
                </button>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FriendCard;