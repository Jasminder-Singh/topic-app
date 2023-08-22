
"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';

const NavLinks = () => {
    const [flag,setFlag] = useState(false);
    
    return (
        <div className="w-[40%]">
            <div className={`absolute top-[100%] right-0 w-full sm:relative sm:block ${flag ? 'block' : 'hidden'}`}>
                <ul className="bg-white flex flex-col sm:flex-row justify-evenly text-xl border-2 border-sky-500 p-2">
                    <li className="text-center cursor-pointer text-black font-bold bg-white sm:hover:text-teal-500 sm:border-white border border-dashed hover:border-sky-500 p-2 hover:rounded-md">
                        <Link href="/">Home</Link></li>
                    <li className="text-center cursor-pointer text-black font-bold bg-white sm:hover:text-teal-500 sm:border-white border border-dashed hover:border-sky-500 p-2 hover:rounded-md">
                        <Link href="/addTopic">New topic</Link></li>
                </ul>
            </div>
            <div className="flex justify-end">
                <AiOutlineMenu className={`cursor-pointer sm:hidden text-2xl ${flag ? 'text-sky-600' : null}`} onClick={()=>setFlag(prev =>  !prev)} />
            </div>
        </div>
    )
}
export default NavLinks;