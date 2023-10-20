import Image from "next/image";
import React from "react";
import Footer from "@/components/Footer";
import { aboutData } from "@/lib/about-data";
import { metadata } from "@/app/layout";

const AboutPage = ({ params }: { params: { id: number } }) => {
    const currentData = aboutData[params.id - 1];

    metadata.title = currentData.pageTitle;

    return (
        <>
            <main className="mb-20">
                <header>
                    <h1 className="text-3xl text-gray-600 font-bold">About Me</h1>
                    <h4 className="text-gray-500 ">Get to know me better... #whoami</h4>
                </header>
                <section>
                    <Image
                        src={currentData.imageSrc}
                        alt={currentData.imageAlt}
                        quality={40}
                        priority
                    />
                    <div>
                        <h3 className="text-2xl text-gray-600 font-bold ">
                            {currentData.title}
                        </h3>
                        <p className="mt-2 max-w-lg">{currentData.content}</p>
                    </div>
                </section>
            </main>

            <Footer
                linkName={params.id < aboutData.length ? "More of me" : "Projects"}
                linkUrl={
                    params.id < aboutData.length
                        ? `/about/${+params.id + 1}`
                        : "/projects"
                }
            />
        </>
    );
};

export default AboutPage;
