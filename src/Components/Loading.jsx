const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      
      <div className="w-12 h-12 border-4 border-[#1D3E31] border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-500 font-bold animate-pulse">Loading your friends...</p>
    </div>
  );
};

export default Loading;