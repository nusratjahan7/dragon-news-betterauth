'use client'
import Image from "next/image";
import Link from "next/link";
import avatar from "@/assets/user.png"
import NavLink from "./NavLink";
import { authClient, signOut } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

        return (
            <div className="flex items-center justify-between py-6  w-11/12 mx-auto">
                <div></div>
                <ul className="flex items-center sm:ml-30 gap-3 text-(--dark3)">
                    <li><NavLink href={'/'} >Home</NavLink></li>
                    <li><NavLink href={'/about'}>About</NavLink></li>
                    <li><NavLink href={'/career'}>Career</NavLink></li>
                </ul>

                <div className="flex items-center justify-center gap-2">

                    {isPending ? (<span className="loading loading-dots loading-xs"></span>) : user ? (
                        <div className="flex  gap-1">
                            <div className="flex gap-1.5 items-center">
                                <Image src={user?.image || avatar} alt="User Avatar" width={35} height={35} className="rounded-full h-9 w-9" />
                                <span className="text-sm font-bold text-(--dark2)">{user.name}</span>
                            </div>
                            <button onClick={() => signOut()} className="btn bg-[#403F3F] text-white">Logout</button>
                        </div>
                    ) : (
                        <button className="btn bg-[#403F3F] text-white">
                            <Link href={'/login'}>Login</Link>
                        </button>
                    )}
                </div>
            </div>
        );
    };

    export default Navbar;