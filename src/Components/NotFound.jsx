import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <h1 className="text-9xl font-black text-[#1D3E31] opacity-20">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 -mt-10">Oops! Page Not Found</h2>
      <p className="text-gray-500 mt-4 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link 
        to="/" 
        className="px-8 py-3 bg-[#1D3E31] text-white rounded-xl font-bold shadow-lg hover:scale-105 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;