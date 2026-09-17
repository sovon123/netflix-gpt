import { useState } from "react"
import Header from "./Header"

const Login = () => {

    const [ isSignInFrom, setIsSignInForm ] = useState(true);

    const handleSignInForm = () => {
        setIsSignInForm(!isSignInFrom);
    }

  return (
    <div>
        <Header />
        <div className="absolute">

            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4a59f124-030b-417a-9565-8362f395bdb0/web/IN-en-20260914-TRIFECTA-perspective_16ddf2ab-4945-4e79-8f84-6df3eef26875_large.jpg" alt="NetFlixIMG" />

        </div>
        <form className="w-3/12 absolute p-12 bg-black m-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">
                {isSignInFrom ? "Sign IN" : "Sign UP"}
            </h1>
            {!isSignInFrom && (
                <input
                    type="text"
                    placeholder="user full name" 
                    className="p-4 my-4 w-full bg-gray-700" 
                />
            )}
            <input
                type="text"
                placeholder="user email" 
                className="p-4 my-4 w-full bg-gray-700" 
            />
            <input 
                type="password" 
                placeholder="user password" 
                className="p-4 my-4 w-full bg-gray-700" 
            />
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
                {isSignInFrom ? "Sign IN" : "Sign UP"}
            </button>
            <p className="py-6 cursor-pointer" onClick={handleSignInForm}>
                {isSignInFrom ? "Now to NetFlix? Sing In Now" : "Already registered. Sign Up Now"}
            </p>
        </form>
    </div>
  )
}

export default Login