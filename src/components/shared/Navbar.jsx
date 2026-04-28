import Image from "next/image";
import Link from "next/link";
import avatar from "@/assets/user.png"
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between my-6  w-11/12 mx-auto">
            <div></div>
           <ul className="flex items-center sm:ml-30 gap-3 text-(--dark3)">
            <li><NavLink href={'/'} >Home</NavLink></li>
            <li><NavLink href={'/about'}>About</NavLink></li>
            <li><NavLink href={'/career'}>Career</NavLink></li>
           </ul>

           <div className="flex items-center justify-center gap-2">
            <Image src={avatar} alt="User Avatar" width={35} height={35} />
            <button className="btn bg-[#403F3F] text-white"><Link href={'/login'}>Login</Link></button>
           </div>
        </div>
    );
};

export default Navbar;