import Image from "next/image";

export default function Home() {
  return (
    <main>
    <div className = "flex">
      <button className = "bg-zinc-300 p-10 ml-96 mt-20">
        <div className = "text-black">
          <p className = "text-lg font-medium text-left">Key Data Statistic</p>
        </div>
      </button>

      <button className = "bg-zinc-300 p-10 ml-10 mt-20">
        <div className = "text-black">
          <p className="text-lg font-medium text-left">Key Data Point</p>
        </div>
      </button>

      <button className="bg-zinc-300 p-10 ml-10 mt-20">
        <div className="text-black">
          <p className="text-lg font-medium text-left">Key Data Point</p>
        </div>
      </button>
    </div>

    <div className = "flex justify-center">
      <div className = "bg-zinc-300 p-40 mt-10 w-full w-1/2 relative">
          <div className = "absolute top-5 left-5 bg-white w-4/5 h-10">
            <div className = "text-black">
              <p className = "font-medium text-2xl mt-1 ml-3">Search</p>
            </div>
          </div>
          <div className = "absolute bg-white right-5 top-5 w-24 h-10">
            <div className = "text-black">
              <p className = "font-medium text-2xl mt-1 text-center">Add</p>
            </div>
          </div>
          <div className = "absolute top-20 left-5">
            <div className = "text-black flex">
              <p className=" font-medium text-xl">Priority</p>
              <div className="ml-1 w-4 h-4 bg-red-500 rounded-full"></div>
              <div className = "ml-5">
                <p className = "font-medium text-xl">Item Name</p>
              </div>
              <div className = "ml-14">
                <p className = "font-medium text-xl">Count</p>
              </div>
              <div className = "ml-5">
                <p className = "font-medium text-xl">Tag</p>
              </div>
            </div>
          </div>
          <div className = "absolute top-32">
          </div>
      </div>
    </div>
    </main>
  );
}
