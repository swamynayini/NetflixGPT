import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../untilies/validate";
import { auth } from "../untilies/firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../untilies/userSlice";
import { BG_IMAGE, USER_AVATAR } from "../untilies/constant";
// import { CheckValidatePassword } from "../untilies/validate";

const SignIn = ()=>{
    const [isSignIn,setIsSignIn] = useState(true)
    const dispatch = useDispatch()

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const [errorMessage,setErrorMessage] = useState(null)

    const clickSignBtn = ()=>{
        const message = checkValidData(email.current.value,password.current.value)
    setErrorMessage(message)

    if(message)return
    //sign in sign up logic 
    if(!isSignIn){
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
        displayName: name.current.value, photoURL: USER_AVATAR
      }).then(() => {
        const {uid,email,displayName,photoURL} = auth.currentUser
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
      }).catch((error) => {
        setErrorMessage(error.message)
      });
    // console.log(user)
    

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });

    }else{
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-"+ errorMessage)
  });

    }
    }
    const clickBtn = ()=>{
        setIsSignIn(!isSignIn)
    }
    
    return (
        <div className="">
            <Header/>
            <div className="absolute">
            <img className="h-screen object-cover"  alt="bg-logo" src={BG_IMAGE}/>
            </div>
            <form 
                onSubmit={(e)=>e.preventDefault()} 
                className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="text-3xl font-bold py-2">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignIn && <input ref={name} className="p-4 my-4 w-full bg-gray-700" type="text" placeholder="Full Name"/>}
                <input 
                ref={email} className="p-4 my-4 w-full bg-gray-700" type="text" placeholder="Email or Mobile Number"
                />
                <input 
                ref={password} className="p-4 my-4 w-full bg-gray-700" type="Password" placeholder="Password"
                />
                <p 
                className="text-red-700">{errorMessage}
                </p>
                <button 
                onClick={clickSignBtn} className="p-4 my-6 w-full bg-red-600">{isSignIn ? "Sign In" : "Sign Up"}
                </button>
                <h1 
                className="px-10 my-4 cursor-pointer"> Forgot password?
                </h1>
                <h2 
                onClick={clickBtn} className="cursor-pointer">{isSignIn ? "New to Netflix? Sign up now." : "Alredy registared.Please Sign In"}
                </h2>
                <p 
                className="py-4 opacity-50 text-sm">
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </p>
            </form>
            
        </div>
    )
}
export default SignIn;