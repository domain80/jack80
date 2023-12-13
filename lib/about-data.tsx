import { JSXElementConstructor, ReactElement, ReactNode } from "react";

// Images
import CalculatorImg from "../public/illustrations/calculator.svg";
import Studying from "../public/illustrations/studying.svg";
import HomeOffice from "../public/illustrations/home-office.svg";
import Designer from "../public/illustrations/designer.svg";
// import ChefServingChicken from "../public/illustrations/chef-serving-chicken.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import SvgDesigner from "@/components/illustrations/Designer";
import SvgChefServingChicken from "@/components/illustrations/ChefServingChicken";
import SvgHomeOffice from "@/components/illustrations/HomeOffice";
import { Calculator, ManRidingARocket } from "@/components/illustrations";
import SvgStudying from "@/components/illustrations/Studying";

export const aboutData: {
    pageTitle: string;
    title: string;
    content: ReactNode;
    // imageSrc: StaticImport;
    imageAlt: string;
    illustration: JSXElementConstructor<any>;
}[] = [
    {
        pageTitle: "I can Cook",
        title: "I cook... (when I can)",
        content:
            "I am not a culinary master by any chance, but I just love the craft... It’s exciting to cut up veggies as fast as possible.",
        // imageSrc: ChefServingChicken,
        imageAlt: "Illustration of a chef serving Chicken",
        illustration: SvgChefServingChicken,
    },
    {
        pageTitle: "I'm a Designer",
        title: "Design Freak",
        content:
            " The curated lists from Pinterest always find me nostalgic and filled with endless bursts of inspiration.",
        // imageSrc: Designer,
        imageAlt: "Illustration of a designer",
        illustration: SvgDesigner,
    },
    {
        pageTitle: "Coder by Trade",
        title: "< Hello World >...",
        content:
            "My coding journey brought me... web development (my primary focus), robotics, etc... Exciting Stuff indeed ",
        // imageSrc: HomeOffice,
        imageAlt: "Illustration of a man in his home office",
        illustration: SvgHomeOffice,
    },
    {
        pageTitle: "Studying is my Hobby",
        title: "Studying",
        content:
            "I am addicted to learning new skills, technologies and concepts. As they are the source of some great new ideas  ",
        // imageSrc: Studying,
        imageAlt: "Illustration of a man studying",
        illustration: SvgStudying,
    },
    {
        pageTitle: "A Math Enthusiast",
        title: "∫ m@+hs ...",
        content:
            "I like to brush up on mathematical concepts that have been applied to computing... of late, I am more interested in those in the security world",
        // imageSrc: CalculatorImg,
        imageAlt: "Illustration of a calculator",
        illustration: Calculator,
    },
    {
        pageTitle: "#! sudo",
        title: "#! sudo",
        content:
            "Began distro hopping a while back and it has been a fun filled adventure. <br /> I use Arch by the way.",
        // imageSrc: CalculatorImg,
        imageAlt: "Illustration of a man riding a rocket",
        illustration: ManRidingARocket,
    },
];
