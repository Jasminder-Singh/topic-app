

import Link from "next/link";
import NavLinks from './navbarLinks';

const Navbar = () => {
    return (
        <header className="w-full">
            <nav className="w-full ">
                <div className="border-2 border-sky-500 flex items-center justify-around p-3 sm:p-5 w-full relative">
                    <div className="">
                        <Link href="/" className="text-lg sm:text-3xl font-semibold tracking-[2px] font-sans text-violet-400 w-full" >Topic web</Link>
                    </div>
                    <NavLinks />
                </div>
            </nav>
        </header>
    )
}

export default Navbar