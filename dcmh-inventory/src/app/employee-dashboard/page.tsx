import Image from "next/image";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-center text-zinc-600 mt-20 mr-[460px]">
        <p className="text-2xl font-semibold">Inventory Summary</p>
      </div>

      <div className="flex justify-center">
        <div className="flex">
          <button className="bg-white rounded-lg border-2 border-gray-300 h-[100px] w-[340px] mt-6 mr-4 flex items-center">
            <div className="bg-gray-100 rounded-md h-14 w-14 ml-5 items-center">
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_299_419)">
              <path d="M4.80236 20H16.9231C19.014 20 20.136 18.912 20.136 16.8296V5.09136H18.623V16.8891C18.623 17.9856 18.011 18.5805 16.9316 18.5805H4.80236C3.6974 18.5805 3.10242 17.9856 3.10242 16.8891V5.09136H1.59796V16.8296C1.59796 18.9205 2.71993 20 4.80236 20ZM7.19931 10.1657H14.5346C14.9766 10.1657 15.2656 9.86824 15.2656 9.41777V9.08626C15.2656 8.62729 14.9766 8.34678 14.5346 8.34678H7.19931C6.76583 8.34678 6.47683 8.62729 6.47683 9.08626V9.41777C6.47683 9.86824 6.76583 10.1657 7.19931 10.1657ZM1.95495 5.77987H19.779C21.037 5.77987 21.734 4.98086 21.734 3.73991V2.06545C21.734 0.815977 21.037 0.0254974 19.779 0.0254974H1.95495C0.747982 0.0254974 0 0.815977 0 2.06545V3.73991C0 4.98086 0.696981 5.77987 1.95495 5.77987ZM2.30344 4.36038C1.75096 4.36038 1.50446 4.0969 1.50446 3.53589V2.26094C1.50446 1.70846 1.75096 1.44496 2.30344 1.44496H19.439C19.9915 1.44496 20.2295 1.70846 20.2295 2.26094V3.53589C20.2295 4.0969 19.9915 4.36038 19.439 4.36038H2.30344Z" fill="#787878" fill-opacity="0.85"/>
              </g>
              <defs>
              <clipPath id="clip0_299_419">
              <rect width="21.734" height="20" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </div>
            <div className="text-black ml-2">
              <p className="text-xl font-semibold text-left">Total Items</p>
              <div className="text-zinc-500">
              <p className="font-semibold text-left">Total 200</p>
              </div>
            </div>
          </button>

          <button className="bg-white rounded-lg border-2 border-gray-300 h-[100px] w-[340px] mt-6 flex items-center">
            <div className="bg-red-100 rounded-md h-14 w-14 ml-5 flex justify-center items-center">
              <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_299_431)">
              <path d="M5.79072 19.7232H7.6227V18.4792H5.81177C5.01159 18.4792 4.59748 18.0738 4.59748 17.27V5.64019C4.59748 4.84344 5.01159 4.43109 5.81177 4.43109H18.9023C19.6884 4.43109 20.1166 4.84344 20.1166 5.64019V18.8566L21.359 18.1507V5.61924C21.359 4.03271 20.5237 3.19402 18.9234 3.19402H5.79072C4.19038 3.19402 3.3551 4.02573 3.3551 5.61924V17.298C3.3551 18.8845 4.19038 19.7232 5.79072 19.7232ZM20.6571 9.42132H23.7946C24.286 9.42132 24.6369 9.51917 24.9879 9.90355L27.8867 13.1465C28.1464 13.4261 28.2657 13.7965 28.2657 14.1389V17.27C28.2657 18.0738 27.8516 18.4792 27.0514 18.4792H25.7108V19.7232H27.0795C28.6728 19.7232 29.5082 18.8845 29.5082 17.298V14.1669C29.5082 13.3562 29.3676 12.9298 28.9044 12.4126L25.8161 8.95303C25.3177 8.39391 24.7281 8.17726 23.8859 8.17726H20.6571V9.42132ZM23.0155 14.1809H27.2059C27.2059 13.9712 27.1146 13.8454 26.9813 13.6986L24.286 10.6793C24.0964 10.4697 23.8578 10.3369 23.563 10.3369H22.3066V13.475C22.3066 13.9083 22.5803 14.1809 23.0155 14.1809ZM9.96707 22.2673C11.6446 22.2673 13.0063 20.9114 13.0063 19.234C13.0063 17.5636 11.6446 16.2077 9.96707 16.2077C8.2895 16.2077 6.9208 17.5636 6.9208 19.234C6.9208 20.9114 8.2895 22.2673 9.96707 22.2673ZM9.96707 21.2119C8.87209 21.2119 7.98067 20.3243 7.98067 19.234C7.98067 18.1507 8.87209 17.2631 9.96707 17.2631C11.055 17.2631 11.9394 18.1507 11.9394 19.234C11.9394 20.3243 11.055 21.2119 9.96707 21.2119ZM23.0927 22.2673C24.7702 22.2673 26.132 20.9114 26.132 19.234C26.132 17.5636 24.7702 16.2077 23.0927 16.2077C21.4151 16.2077 20.0464 17.5636 20.0464 19.234C20.0464 20.9114 21.4151 22.2673 23.0927 22.2673ZM23.0927 21.2119C22.0047 21.2119 21.1133 20.3243 21.1133 19.234C21.1133 18.1507 22.0047 17.2631 23.0927 17.2631C24.1736 17.2631 25.065 18.1507 25.065 19.234C25.065 20.3243 24.1877 21.2119 23.0927 21.2119ZM12.4237 19.7232H20.7062V18.4792H12.4237V19.7232Z" fill="#985555"/>
              <path d="M5.65735 11.2664C8.74574 11.2664 11.3147 8.71539 11.3147 5.6332C11.3147 2.53704 8.7598 0 5.65735 0C2.55494 0 0 2.54403 0 5.6332C0 8.73638 2.54792 11.2664 5.65735 11.2664Z" fill="#985555"/>
              <path d="M5.65735 10.1551C8.12106 10.1551 10.1987 8.10735 10.1987 5.6332C10.1987 3.15207 8.14912 1.11127 5.65735 1.11127C3.17263 1.11127 1.11603 3.15908 1.11603 5.6332C1.11603 8.12132 3.17263 10.1551 5.65735 10.1551Z" fill="#F4D8D8"/>
              <path d="M3.48146 6.31116C3.19367 6.31116 2.96905 6.08749 2.96905 5.80096C2.96905 5.52837 3.20069 5.29775 3.48146 5.29775H5.18709V2.92843C5.18709 2.64887 5.41168 2.43221 5.69947 2.43221C5.98024 2.43221 6.21185 2.64887 6.21185 2.92843V5.80096C6.21185 6.08749 5.98726 6.31116 5.69947 6.31116H3.48146Z" fill="#985555"/>
              </g>
              <defs>
              <clipPath id="clip0_299_431">
              <rect width="29.5082" height="25" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </div>
            <div className="text-red-800 ml-2">
              <p className="text-xl font-semibold text-left">Low Stock</p>
              <div className="text-zinc-500">
              <p className="font-semibold text-left">Total 1</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <div className="bg-white rounded-lg border-2 border-gray-300 w-[697px] h-[284px] relative">
          <div className="absolute top-4 left-4">
            <div className="text-black">
              <p className="font-medium text-2xl">Inventory Items</p>
            </div>
          </div>
          <div className="absolute top-14 left-4 flex">
              <input type="text" className="bg-white rounded-lg border-2 border-gray-300 w-[230px] h-[35px]" placeholder="Search"></input>
              <button className="bg-white rounded-lg border-2 border-gray-300 w-[60px] h-[35px] ml-96">
                <div className="flex items-center">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_284_72)">
                  <path d="M6.58347 12.5048C6.58347 11.9486 6.96736 11.5746 7.52397 11.5746H11.5835V7.50862C11.5835 6.9716 11.9578 6.57842 12.4856 6.57842C13.0326 6.57842 13.4069 6.96202 13.4069 7.50862V11.5746H17.4856C18.023 11.5746 18.4069 11.9486 18.4069 12.5048C18.4069 13.0322 18.0134 13.3966 17.4856 13.3966H13.4069V17.4722C13.4069 18.0092 13.0326 18.3928 12.4856 18.3928C11.9578 18.3928 11.5835 17.9996 11.5835 17.4722V13.3966H7.52397C6.97695 13.3966 6.58347 13.0322 6.58347 12.5048Z" fill="#494A52"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_284_72">
                  <rect width="25" height="25" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                </div>
                <div className="text-black ml-1 p-">
                  <p className="font-medium">Add</p>
                </div>
              </button>
          </div>
          <div className="w-full bg-gray-100 flex justify-between mt-28">
            <p>Item Name</p>
            <p>Count</p>
            <p>Status</p>
            <p>Action</p>
          </div>

          <div className="w-full-100 flex justify-between my-2 py-2">
            <p>Toilet Paper</p>
            <p>200</p>
            <p>Low-Stock</p>
            <p>Edit</p>
          </div>

          <div className="w-full-100 flex justify-between my-2">
            <p>Water Paper</p>
            <p>15</p>
            <p>Mid-Stock</p>
            <p>Edit</p>
          </div>

          <div className="w-full-100 flex justify-between my-2">
            <p>Paper plates</p>
            <p>90</p>
            <p>Stocked</p>
            <p>Edit</p>
          </div>


          <div className="w-full-100 flex justify-between my-2">
            <p>Juice Boxes</p>
            <p>2</p>
            <p>Low-Stock</p>
            <p>Edit</p>
          </div>
        </div>
      </div>
    </main>
  );
}
