import Image from "next/image";
import React from "react";
import About from "@/components/About";

const AboutPage = () => {
    return (
        <>
            <main className="mb-20">
                <header>
                    <h1 className="text-3xl text-neutral-600 font-bold">About Me</h1>
                    <h4 className="text-neutral-500 ">
                        Get to know me better... #whoami
                    </h4>
                </header>
                <About />
            </main>
        </>
    );
};

export default AboutPage;
