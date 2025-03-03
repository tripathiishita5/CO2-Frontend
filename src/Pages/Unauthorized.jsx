import { Link } from "react-router-dom";

const Unauthorized = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md">
      <h1 className="text-3xl font-bold text-[#830c59]">Access Denied</h1>
      <p className="text-gray-600 mt-4">You do not have permission to view this page.</p>
      <Link
        to="/dashboard"
        className="mt-6 inline-block bg-[#830c59] text-white px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        Go Back
      </Link>
    </div>
  </div>
);

export default Unauthorized;