import React from "react";
import { metadata } from "../layout";
import Image from "next/image";
// import rocketImage from "../../public/illustrations/idea-launch.svg";
import { Toggle } from "@/components/ui/toggle";
import { IdeaLaunch } from "@/components/illustrations";

const Page = () => {
    metadata.title = "David Mainoo's Projects";
    metadata.description =
        "A comprehensive list of some of the best Fullstack, frontend, and backend projects compiled for you by David Maioo";
    return (
        <main className=" ">
            <header className="">
                <IdeaLaunch className="w-80 dark:text-neutral-300 text-neutral-800 -ml-8 z-10 " />
                <h2 className="text-4xl font-bold ">Projects</h2>
                <p>Ideas fleshed out into realities...</p>
                <div className="mt-8 space-x-4">
                    <Toggle
                        variant={"outline"}
                        className="data-[state=on]:text-rose-800 data-[state=on]:bg-rose-50 data-[state=on]:ring-rose-600 data-[state=on]:border-rose-300 ">
                        Ui/Ux
                    </Toggle>
                    <Toggle
                        variant={"outline"}
                        className="data-[state=on]:text-emerald-800 data-[state=on]:bg-emerald-50 data-[state=on]:ring-emerald-600 data-[state=on]:border-emerald-300 ">
                        Frontend
                    </Toggle>
                    <Toggle
                        variant={"outline"}
                        className="data-[state=on]:text-orange-800 data-[state=on]:bg-orange-50 data-[state=on]:ring-orange-600 data-[state=on]:border-orange-300 ">
                        Backend
                    </Toggle>
                </div>
            </header>
        </main>
    );
};

export default Page;
