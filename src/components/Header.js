import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      // Sign-out successful. Redirect to login page, etc.
      navigate("/");
    })
    .catch((error) => {
      // Handle sign-out errors here
      console.error("Sign out error:", error);
    });
  }

  return (
    <div className="absolute w-screen my-4 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img 
          src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAdEhm1UzVexHjKqFOP9W6E2UVtkWFvL-vdxIEbTU81rsqNuPmDDy_dQvmQ85ath49JBruVV4aGQA3gY2Dl5SiqFf-AEwPAZBTNkW8FMxGXpDN2mHrf8KlRRiddj1P422ZW1eZkZNWLTd.svg" 
          alt="NetFlixGPT" 
          className="w-44"
        />

        {
          user && (
          <div className="flex p-2">
              <img 
                src={user?.photoURL} 
                alt="UserImage"
                className="w-12 h-12 rounded"
              />
            <button onClick={handleSignOut} className="bg-red-500 rounded text-white m-2 p-2 font-bold"> Sign Out </button>
          </div>
          )
        }
    
    </div>
  )
}

export default Header