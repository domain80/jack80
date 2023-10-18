"use client";

import * as React from "react";
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
import Link from "next/link";

export function MobileNav() {
    const pathname = usePathname();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <MenuSquare className="w-7 h-7 aspect-square stroke-[1.5] text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-56 text-gray-500 "
                align="end">
                <DropdownMenuLabel className="text-amber-600">
                    Going Somewhere?
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={pathname}>
                    <Link href={"/"}>
                        {" "}
                        <DropdownMenuRadioItem value="/">Home</DropdownMenuRadioItem>
                    </Link>
                    <Link href={"/about"}>
                        <DropdownMenuRadioItem value="/about">
                            About
                        </DropdownMenuRadioItem>{" "}
                    </Link>
                    <Link href={"/blog"}>
                        <DropdownMenuRadioItem value="/blog">Blog</DropdownMenuRadioItem>
                    </Link>
                    <Link href={"/contact"}>
                        <DropdownMenuRadioItem value="/contact">
                            Contact
                        </DropdownMenuRadioItem>
                    </Link>{" "}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
