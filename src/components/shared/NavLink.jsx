'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = href === pathname;

    return (
       <Link href={href} className={`${isActive ? "text-(--dark2) border-b border-b-(--dark2)" : ""} `}>
       {children}
       </Link>
    );
};

export default NavLink;