import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "David Mainoo",
    description: "A NextJS portfolio website of David Mainoo; a fullstack developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`bg-[url("/bg.svg")] bg-cover`}>
                <div className="container max-w-screen-lg mx-auto">
                    <Navbar />
                    <div className="mt-10 md:px-20 mb-20">{children}</div>
                </div>
            </body>
        </html>
    );
}
