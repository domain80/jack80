import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="">
                <Image
                    src={"/illustrations/engineer.svg"}
                    alt=" Illustration of an engineer"
                    width={228}
                    height={228}
                    className="w-60"
                    // placeholder="blur"
                />
            </main>
        </>
    );
}
