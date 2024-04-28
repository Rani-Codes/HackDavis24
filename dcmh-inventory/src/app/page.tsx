import Image from "next/image";

export default function Home() {
  return (
    <div className="text-black">
      <h1 className="text-6xl font-medium text-center mt-40 ">Hi we need:</h1>
      
      <div className="mt-20 mx-28 bg-gray-300 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
              <span className="text-lg font-bold">10</span>
          </div>

          <div className="flex items-center ml-4">
              <span className="text-lg">Paper Towels</span>
          </div>

          <div className="flex items-center ml-4">
              <div className="h-8 w-8 bg-green-500 rounded-full"></div>
          </div>

          <div className="flex items-center ml-4">
              <span className="text-lg font-semibold text-red-600">High Priority</span>
          </div>
        </div>
      </div>


    </div>
  );
}
