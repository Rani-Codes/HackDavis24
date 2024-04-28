import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center">
        <div className="flex">
          <button className="bg-white rounded-md border-2 border-gray-300 h-[100px] w-[340px] mt-20 mr-4">
            <div className="text-black ml-32">
              <p className="text-xl font-semibold text-left">Total Items</p>
            </div>
          </button>

          <button className="bg-white rounded-md border-2 border-gray-300 h-[100px] w-[340px] mt-20">
            <div className="text-red-500 ml-32">
              <p className="text-xl font-semibold text-left">Low Stock</p>
            </div>
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <div className="bg-zinc-300 p-40 w-[697px] h-[284px] relative">
          <div className="absolute top-5 left-5 bg-white w-4/5 h-10">
            <div className="text-black">
              <p className="font-medium text-2xl mt-1 ml-3">Search</p>
            </div>
          </div>
          <div className="absolute bg-white right-5 top-5 w-24 h-10">
            <div className="text-black">
              <p className="font-medium text-2xl mt-1 text-center">Add</p>
            </div>
          </div>
          <div className="absolute top-20 left-5">
            <div className="text-black flex">
              <p className="font-medium text-xl">Priority</p>
              <div className="ml-5">
                <p className="font-medium text-xl">Item Name</p>
              </div>
              <div className="ml-14">
                <p className="font-medium text-xl">Count</p>
              </div>
              <div className="ml-5">
                <p className="font-medium text-xl">Tag</p>
              </div>
            </div>
          </div>
          <div className="absolute top-32 left-10">
            <div className="flex w-6 h-6 bg-red-500 rounded-full"></div>
            <div className="text-black flex ml-14">
              <p className="font-medium text-xl">Paper Towels</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
