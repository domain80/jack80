import React from "react";
import { aboutData } from "@/lib/about-data";

const About = () => {
    return (
        <>
            <section>
                <Image
                    src={currentData.imageSrc}
                    alt={currentData.imageAlt}
                    quality={40}
                    priority
                />
                <div>
                    <h3 className="text-2xl text-neutral-600 font-bold ">
                        {currentData.title}
                    </h3>
                    <p className="mt-2 max-w-lg">{currentData.content}</p>
                </div>
            </section>

            {/* <Footer
                linkName={params.id < aboutData.length ? "More of me" : "Projects"}
                linkUrl={
                    params.id < aboutData.length
                        ? `/about/${+params.id + 1}`
                        : "/projects"
                }
            /> */}
        </>
    );
};

export default About;
