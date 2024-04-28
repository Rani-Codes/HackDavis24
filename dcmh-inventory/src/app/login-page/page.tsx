export default function Home() {
    return (
        <div className = "text-black">
            <p className = "text-4xl font-medium flex justify-center mt-20">Log-In</p>
            
            
            <div className = "flex justify-center mt-20"> 
                <input type = "text" className = "border border-black border-1 rounded-md p-4 w-1/4 bg-white" placeholder="Username">
                </input>
            </div>

            <div className = "flex justify-center mt-5">
                <input type="password" className = "border border-black border-1 rounded-md p-4 w-1/4 bg-white" placeholder="Password">
                </input>
            </div>

            <div className = "flex justify-center mt-10">
                <button className = "p-4 w-1/4 rounded-md bg-zinc-400">
                    <div className = "text-black">
                        <p className = "text-3xl font-medium text-center">Sign-In</p>
                    </div>
                </button>
            </div>


        </div>
    );
}