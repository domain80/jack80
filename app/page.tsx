import Navbar from "@/components/Navbar";
import Image from "next/image";
import EngineerImg from "../public/illustrations/engineer.svg";
import Footer from "@/components/Footer";
import { Engineer } from "@/components/illustrations";

export default function Home() {
    // set footer
    return (
        <div className="">
            <main className="mt-8  mb-20">
                <Engineer className="w-60 mb-8 dark:text-neutral-300" />
                <h4 className="font-semibold  ">Hi there, I’m </h4>
                <h1 className="font-bold text-4xl ">David Mainoo,</h1>
                <p className="text-neutral-600 mt-2 max-w-md">
                    Feast your eyes on my portfolio and when you are done, give it a star
                    on github
                </p>
            </main>
            <Footer
                linkName="About me"
                linkUrl="/about/1"
            />
        </div>
    );
}
