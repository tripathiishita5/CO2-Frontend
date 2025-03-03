import { useLoading } from "../Contexts/LoadingContext";

const LoadingScreen = () => {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray bg-opacity-30 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="h-16 w-16 border-4 border-t-[#820C59] border-gray-300 rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="mt-4 text-black text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;