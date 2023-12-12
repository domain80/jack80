import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "David Mainoo",
    description: "A NextJS portfolio website of David Mainoo; a fullstack developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    try {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    } catch (error) {}
    return (
        <html
            lang="en"
            className="dark">
            <body className={`dark:bg-neutral-900 `}>
                <div className="container max-w-screen-lg mx-auto">
                    <Navbar />
                    <div className="mt-10 md:px-20 mb-20">{children}</div>
                </div>
            </body>
        </html>
    );
}
