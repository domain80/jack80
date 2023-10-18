import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { BiLogoLinkedinSquare, BiLogoDribbble, BiLogoGithub } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = (props: { linkName: string; linkUrl: string }) => {
    return (
        <footer className="">
            <Link
                href={props.linkUrl}
                className="  flex gap-4 items-center text-gray-600">
                <span>{props.linkName}</span>{" "}
                <MoveRight className="animate-shove stroke-[1.3]" />
            </Link>
            <div className="flex mt-8 text-gray-500 text-xl gap-8">
                <Link href={"https://linknedin.com/in/davidmainoo"}>
                    <BiLogoLinkedinSquare />
                </Link>
                <Link href={"https://linknedin.com/in/davidmainoo"}>
                    <BiLogoDribbble />
                </Link>
                <Link href={"https://linknedin.com/in/davidmainoo"}>
                    <FaXTwitter />
                </Link>
                <Link href={"https://linknedin.com/in/davidmainoo"}>
                    <BiLogoGithub />
                </Link>
                <Link href={"https://linknedin.com/in/davidmainoo"}>
                    <MdEmail />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;

function FooterSocialicon() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add to library</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
