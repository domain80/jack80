import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { ReactNode } from "react";

interface ProjectBriefType {
    tags: string[];
    title: string;
    content: string;
    imageSrc: string | StaticImport;
}

const ProjectBrief = ({ tags, title, content, imageSrc }: ProjectBriefType) => {
    return (
        <article>
            <figure className="flex items-start gap-4 max-w-lg">
                <Image
                    src={imageSrc}
                    alt={"project screenshot"}
                    quality={40}
                    priority
                />
                <figcaption>
                    <div className="space-x-3 mb-2">
                        {tags.map((t) => (
                            <span key={t}>{t}</span>
                        ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{title}</h3>
                    <p>{content}</p>
                </figcaption>
            </figure>
        </article>
    );
};

export default ProjectBrief;
