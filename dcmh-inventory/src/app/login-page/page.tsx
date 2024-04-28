export default function Home() {
    return (
        <div className="flex justify-center">
            <div className="border-2 border-gray-300 bg-white rounded-lg w-[575px] h-[519px]">
                <div className = "text-black">
                    <p className = "text-2xl font-semibold flex justify-center mt-10">Welcome Back</p>
                    
                    <p className="text-zinc-600 text-base font-medium flex justify-center mt-3">Please enter your details to sign in.</p>
                    
                    <p className="text- font-semibold flex mt-10 mr-30">Username:</p>

                    <div className = "flex justify-center mt-1"> 
                        <input type = "text" className = "border border-gray-300 border-2 rounded-lg h-[40px] w-[300px] p-4 bg-white" placeholder="Enter your username">
                        </input>
                    </div>

                    <div className = "flex justify-center mt-5">
                        <input type="password" className = "border border-gray-300 border-2 rounded-lg h-[40px] w-[300px] p-4 bg-white" placeholder="Enter your password">
                        </input>
                    </div>

                    <div className = "flex justify-center mt-10">
                        <button className = "p-4 w-1/4 rounded-lg bg-zinc-400">
                            <div className = "text-black">
                                <p className = "text-3xl font-medium text-center">Sign-In</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}