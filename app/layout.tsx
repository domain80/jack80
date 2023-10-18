import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "David Mainoo",
    description: "A NextJS portfolio website of David Mainoo; a fullstack developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${rubik.className} bg-[url("/bg.svg")] bg-cover`}>
                <div className="container max-w-screen-lg mx-auto">{children}</div>
            </body>
        </html>
    );
}
