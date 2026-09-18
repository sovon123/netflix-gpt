import { useRef, useState } from "react"
import Header from "./Header";
import { validateForm } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [ isSignInFrom, setIsSignInForm ] = useState(true);
    const [ errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        // form validation
        const nameValue = isSignInFrom ? null : name.current.value;
        const message = validateForm(email.current.value, password.current.value, nameValue, isSignInFrom);
        setErrorMessage(message);
        if(message) return;

        if(!isSignInFrom) {
            //Sign Up Login
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value, nameValue)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: nameValue, 
                    photoURL: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
                }).then(() => {
                    console.log(user);
                    navigate("/browse");
                }).catch((error) => {
                    setErrorMessage(error.message);
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
        } else {
            //Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });

        }

    }

    const handleSignInForm = () => {
        setIsSignInForm(!isSignInFrom);
    }

  return (
    <div>
        <Header />
        <div className="absolute">

            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4a59f124-030b-417a-9565-8362f395bdb0/web/IN-en-20260914-TRIFECTA-perspective_16ddf2ab-4945-4e79-8f84-6df3eef26875_large.jpg" alt="NetFlixIMG" />

        </div>
        <form onSubmit={(e)=> e.preventDefault()} className="w-3/12 absolute p-12 bg-black m-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">
                {isSignInFrom ? "Sign IN" : "Sign UP"}
            </h1>
            {!isSignInFrom && (
                <input
                    ref={name}
                    type="text"
                    placeholder="user full name" 
                    className="p-4 my-4 w-full bg-gray-700" 
                />
            )}
            <input
                ref={email}
                type="text"
                placeholder="user email" 
                className="p-4 my-4 w-full bg-gray-700" 
            />
            <input 
                ref={password}
                type="password" 
                placeholder="user password" 
                className="p-4 my-4 w-full bg-gray-700" 
            />
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
                {isSignInFrom ? "Sign IN" : "Sign UP"}
            </button>
            <p className="py-6 cursor-pointer" onClick={handleSignInForm}>
                {isSignInFrom ? "Now to NetFlix? Sing Up Now" : "Already registered. Sign In Now"}
            </p>
        </form>
    </div>
  )
}

export default Login