import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../untilies/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../untilies/userSlice";
import { LOGO, SUPPORTED_LANGUAGE, USER_AVATAR } from "../untilies/constant";
import { gptSearch } from "../untilies/gptSlice";
import { languageChange } from "../untilies/configSlice";

const Header = ()=>{

    const navigate = useNavigate()
    const user = useSelector((store) =>store.user)
    const dispatch = useDispatch()
    const gptSearchToggle = useSelector((store) => store.gpt.gptSearchToggle)

    const handleClickSignOut = ()=>{
        signOut(auth).then(() => {
            navigate("/")
          }).catch((error) => {
            navigate("/errorPage")
          });
    }
    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName,photoURL} = user
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              navigate("/browser")
            } else {
              dispatch(removeUser())
              navigate("/")
            }
          });  
          return ()=> unSubcribe() 

    },[])
    const searchGptBtn= ()=>{
      dispatch(gptSearch())
      
    }
    const handleClickChange = (e)=>{
      dispatch(languageChange(e.target.values))
    }
    return (
        <div className="absolute w-screen px-8 py-8 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img 
            className=" mx-auto md:mx-0 w-48" 
            alt="logo" 
            src={LOGO}
            />
            {user && <div className="flex p-2 m-2 ">
              {gptSearchToggle && <select className="bg-black text-white rounded-lg p-2 m-2" onChange={handleClickChange}>
                {SUPPORTED_LANGUAGE.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
              </select>}
              <button className="p-2 m-2 bg-purple-300 rounded-lg " onClick={searchGptBtn}>{gptSearchToggle ? "HomePage" : "Search Gpt"}</button>
                <img 
                className=" hidden md:block h-12 w-12 rounded-full" 
                alt="userIcon" 
                src={USER_AVATAR}/>
                <button 
                className="font-bold text-white" 
                onClick={handleClickSignOut}>
                    SignOut
                </button>
            </div>}
        </div>
    )
}
export default Header