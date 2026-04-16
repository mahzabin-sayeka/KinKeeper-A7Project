import { useParams, Link } from "react-router-dom";
import friendsData from "../Data/Friend.json";

const FriendDetails = () => {
  const { id } = useParams();
  
//   url to id

  const friend = friendsData.find((f) => f.id === parseInt(id));

  if (!friend) {
    return (
      <div className="text-center py-20 text-gray-500">
        Friend not found! <br />
        <Link to="/" className="text-blue-500 underline">Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
     {/* Back Button */}

      <Link to="/" className="text-sm text-gray-500 mb-6 inline-block hover:text-gray-800">
        ← Back to Dashboard
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        




        {/* Left Side &&&&&&& */}

        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
            <img 
              src={friend.image} 
              className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-gray-50 object-cover" 
              alt={friend.name} 
            />
            <h2 className="text-2xl font-bold text-gray-900">{friend.name}</h2>
            
            <div className="flex flex-col items-center gap-2 mt-3">
               <span className={`px-4 py-1 text-white text-[10px] font-bold rounded-full uppercase ${
                 friend.status === 'Overdue' ? 'bg-[#F04438]' : 
                 friend.status === 'On-Track' ? 'bg-[#064E3B]' : 'bg-[#FDB022]'
               }`}>
                 {friend.status}
               </span>
               <span className="px-4 py-1 bg-[#ECFDF3] text-[#027A48] text-[10px] font-bold rounded-full uppercase">
                 {friend.tags[0]}
               </span>
            </div>
            
            <p className="mt-6 text-gray-500 italic text-sm">"{friend.bio}"</p>
            <p className="text-[10px] text-blue-500 font-bold mt-2 uppercase tracking-widest">
              Preferred: {friend.preferredContact}
            </p>
          </div>

          {/* Action Btn */}
          <div className="space-y-3">
            <button className="w-full bg-white border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 transition-all">
              <i className="fa-regular fa-bell"></i> Snooze 2 Weeks
            </button>
            <button className="w-full bg-white border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 transition-all">
              <i className="fa-solid fa-box-archive"></i> Archive
            </button>
            <button className="w-full bg-white border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
              <i className="fa-solid fa-trash"></i> Delete
            </button>
          </div>
        </div>





        {/* Right side &&&&&&&&&&& */}

        <div className="lg:col-span-8 space-y-6">


          {/* grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-[#1D3E31]">{friend.daysSinceContact}</h3>
              <p className="text-[10px] text-gray-400 uppercase font-bold mt-2">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-[#1D3E31]">{friend.goalDays}</h3>
              <p className="text-[10px] text-gray-400 uppercase font-bold mt-2">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <h3 className="text-xl font-bold text-[#1D3E31] mt-2">{friend.nextDue}</h3>
              <p className="text-[10px] text-gray-400 uppercase font-bold mt-3">Next Due</p>
            </div>
          </div>

          {/* relation Section */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex justify-between items-center shadow-sm">
            <div>
              <h4 className="font-bold text-gray-800">Relationship Goal</h4>
              <p className="text-sm text-gray-500 mt-1">Connect every <span className="font-bold text-gray-900">{friend.goalDays} days</span></p>
            </div>
            <button className="px-4 py-1.5 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50">Edit</button>
          </div>

          {/* checkin quick */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-[#1D3E31] mb-6">Quick Check-In</h4>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-3 py-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all">
                <i className="fa-solid fa-phone text-xl text-gray-700"></i>
                <span className="text-xs font-bold text-gray-600 uppercase">Call</span>
              </button>
              <button className="flex flex-col items-center gap-3 py-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all">
                <i className="fa-regular fa-comment-dots text-xl text-gray-700"></i>
                <span className="text-xs font-bold text-gray-600 uppercase">Text</span>
              </button>
              <button className="flex flex-col items-center gap-3 py-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all">
                <i className="fa-solid fa-video text-xl text-gray-700"></i>
                <span className="text-xs font-bold text-gray-600 uppercase">Video</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;