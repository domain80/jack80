"use client";
import React, { useRef } from "react";
import { aboutData } from "@/lib/about-data";
import { useAboutScoller } from "@/lib/State/aboutScrollStore";
import Footer from "./Footer";

const About = () => {
    const scrollableRef = useRef<HTMLElement | any>();
    const { current, updateCurrent } = useAboutScoller();
    return (
        <>
            <section className="flex gap-24 justify-between items-center mb-12">
                <div
                    className="grid gap-12 max-h-96 overflow-y-hidden snap-mandatory scroll-smooth snap-y"
                    ref={scrollableRef}
                    onScroll={(e) => {
                        updateCurrent(
                            // @ts-expect-error
                            Math.floor(e.target.scrollTop / e.target.clientHeight)
                        );
                    }}>
                    {aboutData.map((data, index) => (
                        <figure
                            className="snap-center my-4"
                            key={data.title}>
                            <data.illustration className="w-60" />
                            <figcaption>
                                <h3 className="text-2xl text-neutral-600 font-bold ">
                                    {data.title}
                                </h3>
                                <p className="mt-2 max-w-lg">{data.content}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
                <nav className="flex flex-col gap-10">
                    {aboutData.map((d, index) => {
                        return (
                            <button
                                className={`w-2 h-2  bg-current dark:text-neutral-400 text-neutral-600 transition-colors border-2 border-current rounded-full ${
                                    current == index
                                        ? "dark:text-amber-500 text-orange-600"
                                        : ""
                                } `}
                                onClick={() => {
                                    updateCurrent(index);
                                    scrollableRef.current.scrollTo(
                                        0,
                                        scrollableRef.current.clientHeight * index
                                    );
                                }}>
                                {""}
                            </button>
                        );
                    })}
                </nav>
            </section>

            <Footer
                linkName={"Projects"}
                linkUrl={"/projects"}
            />
        </>
    );
};

export default About;
