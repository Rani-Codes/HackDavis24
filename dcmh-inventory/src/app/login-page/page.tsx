export default function Home() {
    return (
        /* The Log-In text */
        <div className = "text-black">
            <p className = "text-4xl font-medium text-center mt-20">Log-In</p>
            
            
            <div className = "flex justify-center mt-20"> 
                <div className = "border border-black border-4 p-4 w-full sm:w-80 bg-white">
                    <div className = "text-black">
                        <p className = "text-xl font-medium text-left">Username</p>
                    </div>
                </div>
            </div>

            <div className = "flex justify-center mt-5">
                <div className = "border border-black border-4 p-4 w-full sm:w-80 bg-white">
                    <div className = "text-black">
                        <p className = "text-xl font-medium text-left">Password</p>
                    </div>
                </div>
            </div>

            <div className = "flex justify-center mt-10">
                <div className = "p-4 w-full sm:w-80 bg-gray-400">
                    <div className = "text-black">
                        <p className = "text-3xl font-medium text-center">Sign-In</p>
                    </div>
                </div>
            </div>


        </div>
    );
}