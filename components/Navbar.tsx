"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { MenuSquare } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { CgDarkMode } from "react-icons/cg";

interface ILinkDetails {
    href: string;
    label: string;
}
const navlinks: ILinkDetails[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="mt-4 py-2 flex justify-between items-center text-neutral-600">
            <Link href={"/"}>
                <Logo className="w-8 h-8 aspect-square dark:fill-gray-200 fill-neutral-700  stroke-gray-600 " />
            </Link>{" "}
            <div className="md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <MenuSquare className="w-7 h-7 aspect-square stroke-[1.5] text-neutral-500" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-56 text-neutral-500 "
                        align="end">
                        <DropdownMenuLabel className="text-amber-600">
                            Going Somewhere?
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={pathname}>
                            <Link href={"/"}>
                                {" "}
                                <DropdownMenuRadioItem value="/">
                                    Home
                                </DropdownMenuRadioItem>
                            </Link>
                            <Link href={"/about"}>
                                <DropdownMenuRadioItem value="/about">
                                    About
                                </DropdownMenuRadioItem>{" "}
                            </Link>
                            <Link href={"/blog"}>
                                <DropdownMenuRadioItem value="/blog">
                                    Blog
                                </DropdownMenuRadioItem>
                            </Link>
                            <Link href={"/contact"}>
                                <DropdownMenuRadioItem value="/contact">
                                    Contact
                                </DropdownMenuRadioItem>
                            </Link>{" "}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="hidden md:flex gap-10 items-center">
                <ul className="flex gap-10 items-center font-medium  text-neutral-500 dark:text-neutral-400">
                    {navlinks.map((link, i) => {
                        return (
                            <li
                                key={link.label}
                                className="hover:text-orange-400 ">
                                <Link
                                    href={link.href}
                                    className={` relative ${setActiveLink(
                                        link,
                                        pathname
                                    )}`}>
                                    {link.href == pathname ? (
                                        <motion.span
                                            layoutId="active_underline"
                                            className="absolute left-0  top-full block h-[2px] rounded-full w-full bg-[currentColor] mt-1"
                                        />
                                    ) : (
                                        <></>
                                    )}
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <button
                    className="text-2xl dark:text-neutral-400"
                    onClick={switchTheme}>
                    <CgDarkMode className="" />
                </button>
            </div>
        </nav>
    );
}

function setActiveLink(link: ILinkDetails, pathname: string) {
    if (link.href == "/") {
        return pathname === "/" ? "activeLink" : "";
    } else {
        return pathname.startsWith(link.href) ? "activeLink" : "";
    }
}

function switchTheme() {
    document.documentElement.classList.toggle("dark");
}
