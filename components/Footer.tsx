"use client";

import { MoveRight } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { BiLogoLinkedinSquare, BiLogoDribbble, BiLogoGithub } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useFooterStore } from "@/lib/State/footerStore";

const Footer = (props: { linkName?: string; linkUrl?: string }) => {
    const footerState = useFooterStore((state) => state.footer);
    return (
        <footer className="dark:text-neutral-400 text-neutral-600">
            <Link
                href={props.linkUrl ? props.linkUrl : footerState.linkUrl}
                className="w-max flex gap-4 items-center ">
                <span>{props.linkName ? props.linkName : footerState.linkName}</span>{" "}
                <MoveRight className="animate-shove stroke-[1.3]" />
            </Link>
            <div className="flex mt-8  text-xl gap-12">
                <FooterSocialicon
                    tooltip="LinkedIn"
                    href=""
                    content={<BiLogoLinkedinSquare />}
                />
                <FooterSocialicon
                    tooltip="Dribbble"
                    href=""
                    content={<BiLogoDribbble />}
                />
                <FooterSocialicon
                    tooltip="Twitter"
                    href=""
                    content={<FaXTwitter />}
                />
                <FooterSocialicon
                    tooltip="GitHub"
                    href=""
                    content={<BiLogoGithub />}
                />
                <FooterSocialicon
                    tooltip="Email"
                    href=""
                    content={<MdEmail />}
                />
            </div>
            <div className="text-sm flex justify-between gap-8  mt-6 font-medium">
                <p className="">Proudly open source</p>
                <p className="font-normal">
                    Illustrations by{"  "}
                    <Link
                        className="text-orange-600 hover:border-b border-spacing-1 border-current hover:font-medium transition-all"
                        href="">
                        Popsy
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

function FooterSocialicon(props: { href: string; content: ReactNode; tooltip: string }) {
    return (
        <TooltipProvider>
            <Tooltip>
                <Link href={props.href}>
                    <TooltipTrigger asChild>{props.content}</TooltipTrigger>
                </Link>
                <TooltipContent>
                    <p>{props.tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
