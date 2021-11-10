import React, {useState} from "react";
export default function Logged(){
    let [userlog,setUserlog]=useState(true);
    return (
        <div>
            {
                userlog?<h4> id logout  </h4>:<h4> login id welcome guest </h4>
            }
            <button onClick={()=>setUserlog(false)}>Login</button>
            <button onClick={()=>setUserlog(true)}>logout</button>
        </div>
    );
}
