const StatCards = () => {

  const stats = {
    total: 10,
    onTrack: 4,
    attention: 6,
    interactions: 12
  };

  return (
    <div className="pb-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        
        {/* Total Friends   */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center transition-transform hover:scale-[1.02]">
          <h2 className="text-4xl font-bold text-[#1D3E31] mb-2">{stats.total}</h2>
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Total Friends</p>
        </div>

    {/* On Track   cart*/}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center transition-transform hover:scale-[1.02]">
          <h2 className="text-4xl font-bold text-[#1D3E31] mb-2">{stats.onTrack}</h2>
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">On Track</p>
        </div>

{/* Need Attention */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center transition-transform hover:scale-[1.02]">
          <h2 className="text-4xl font-bold text-[#1D3E31] mb-2">{stats.attention}</h2>
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Need Attention</p>
        </div>

        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center transition-transform hover:scale-[1.02]">
          <h2 className="text-4xl font-bold text-[#1D3E31] mb-2">{stats.interactions}</h2>
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Interactions This Month</p>
        </div>

      </div>

      {/* hr line */}
      <div className="max-w-6xl mx-auto border-b border-gray-200 mt-16"></div>
    </div>
  );
};

export default StatCards;