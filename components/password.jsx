"use client";

import { useState } from "react";

const Password = () => {
    const [password, setPassword] = useState(false);
    const handlePassword = (value) => {
       
        if(value === "ambrandachan"){
            setPassword(true);
        }
    }

    return (
        <div className={`${password ? 'none' : 'fixed'} top-0 w-full h-full flex justify-center items-center`}>
            <div className={`${password ? 'none' : 'block'}`}>
                <input type="text" placeholder="Enter password...."
                    className={`${password ? " invisible" : 'block'} p-4 rounded-lg border-2 border-black text-xl font-bold`}
                    onChange={(e)=>handlePassword(e.target.value)} />
            </div>
        </div>
    )
}
export default Password;