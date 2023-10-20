import { ReactNode } from "react";

// Images
import CalculatorImg from "../public/illustrations/calculator.svg";
import Studying from "../public/illustrations/studying.svg";
import HomeOffice from "../public/illustrations/home-office.svg";
import Designer from "../public/illustrations/designer.svg";
import ChefServingChicken from "../public/illustrations/chef-serving-chicken.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const aboutData: {
    pageTitle: string;
    title: string;
    content: ReactNode;
    imageSrc: StaticImport;
    imageAlt: string;
}[] = [
    {
        pageTitle: "I can Cook",
        title: "I cook... (when I can)",
        content:
            "I am not a culinary master by any chance, but I just love the craft... It’s exciting to cut up veggies as fast as possible.",
        imageSrc: ChefServingChicken,
        imageAlt: "Illustration of a chef serving Chicken",
    },
    {
        pageTitle: "I'm a Designer",
        title: "Design Freak",
        content:
            " The curated lists from Pinterest always find me nostalgic and filled with endless bursts of inspiration.",
        imageSrc: Designer,
        imageAlt: "Illustration of a designer",
    },
    {
        pageTitle: "Coder by Trade",
        title: "< Hello World >...",
        content:
            "My coding journey brought me... web development (my primary focus), robotics, etc... Exciting Stuff indeed ",
        imageSrc: HomeOffice,
        imageAlt: "Illustration of a man in his home office",
    },
    {
        pageTitle: "Studying is my Hobby",
        title: "Studying",
        content:
            "I am addicted to learning new skills, technologies and concepts. As they are the source of some great new ideas  ",
        imageSrc: Studying,
        imageAlt: "Illustration of a man studying",
    },
    {
        pageTitle: "A Math Enthusiast",
        title: "∫ m@+hs ...",
        content:
            "I like to brush up on mathematical concepts that have been applied to computing... of late, I am more interested in those in the security world",
        imageSrc: CalculatorImg,
        imageAlt: "Illustration of a calculator",
    },
];
