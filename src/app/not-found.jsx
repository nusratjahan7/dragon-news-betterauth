import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-r from-white via-gray-200 to-white">
      <div className="text-center p-10 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-500 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="text-white bg-linear-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 px-6 py-3 rounded-md text-lg font-semibold transition-all duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;