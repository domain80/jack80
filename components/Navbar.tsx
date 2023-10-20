import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

export default function Navbar() {
    return (
        <nav className="mt-4 py-2 flex justify-between items-center text-gray-600">
            <Link href={"/"}>
                <Logo className="w-8 h-8 aspect-square fill-rose-700 stroke-gray-600 " />
            </Link>{" "}
            <MobileNav />
        </nav>
    );
}
