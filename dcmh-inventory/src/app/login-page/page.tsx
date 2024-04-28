import { Navbar } from "../components/Navbar";
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center mt-10">
            
            <div className="border-2 border-gray-300 bg-white rounded-lg w-[575px] h-[519px]">
                <div className="text-black">
                    <p className="text-2xl font-semibold flex justify-center mt-10">Welcome Back</p>
                    
                    <p className="text-zinc-600 text-base font-medium flex justify-center mt-3">Please enter your details to sign in.</p>
                    
                    <div className="flex flex-col items-center mt-10">
                        <div className="flex justify-start w-[300px]">
                            <p className="text-base font-semibold">Username:</p>
                        </div>
                        <div className="flex justify-center mt-1">
                            <input type="text" className="border border-gray-300 border-2 rounded-lg h-[40px] w-[300px] p-4 bg-white" placeholder="Enter your username" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center mt-5">
                        <div className="flex justify-start w-[300px]">
                            <p className="text-base font-semibold">Password:</p>
                        </div>
                        <div className="flex justify-center mt-1">
                            <input type="password" className="border border-gray-300 border-2 rounded-lg h-[40px] w-[300px] p-4 bg-white" placeholder="Enter your password" />
                        </div>
                    </div>
{/* 
                    <div className="flex justify-center mt-5">
                        <button className="p-4 w-[300px] h-[40px] rounded-lg bg-blue-500 flex items-center justify-center">
                            <p className="text-white text-sm font-small">Sign-In</p>
                        </button>
                    </div> */}

                    <div className="flex justify-center mt-5">
                        <button className="p-4 w-[300px] h-[40px] rounded-lg bg-blue-500 flex items-center justify-center">
                            <Link href="/employee-dashboard">
                                Sign-In
                            </Link>
                        </button>
                    </div>
    




                </div>
            </div>
        </div>
        </div>
        
    );
}

