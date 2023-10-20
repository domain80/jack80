import Navbar from "@/components/Navbar";
import Image from "next/image";
import EngineerImg from "../public/illustrations/engineer.svg";
import Footer from "@/components/Footer";

export default function Home() {
    // set footer
    return (
        <div className="">
            <main className="mt-8  mb-20">
                <Image
                    src={EngineerImg}
                    alt="illustration of an engineer"
                    className="w-60 md:w-72 my-4"
                    priority={true}
                />
                <h4 className="font-semibold  text-gray-500">Hi there, I’m </h4>
                <h1 className="font-bold text-4xl text-gray-600">David Mainoo,</h1>
                <p className="text-gray-600 mt-2 max-w-md">
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
