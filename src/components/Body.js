import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn";
import Browser from "./Browser";

const Body = ()=>{
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<SignIn/>
        },
        {
            path:"/browser",
            element:<Browser/>
        }
    ])
   
    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Body;