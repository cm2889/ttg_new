"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/app/components/Container";

interface Card {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: string;
}

const CardInfo = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    // Placeholder Google image URLs — replace with your own images
    const images = [
        "/images/CaseStudies/cloud-native.png", // cloud-native
        "/images/CaseStudies/percent.png", // team/servers
        "/images/CaseStudies/cost-reduction.png", // cost reduction
    ];

    const cards: Card[] = [
        {
            id: 1,
            title: "40% Cost Reduction for Fintech CX Team",
            description:
                "Collaborate extensively with top clients from all over the world.",
            image: images[0],
            icon: "/images/CaseStudies/case-studies-icon.png",
        },
        {
            id: 2,
            title: "Cloud-Native SaaS MVP in 12 Weeks",
            description:
                "Collaborate extensively with top clients from all over the world.",
            image: images[1],
            icon: "/images/CaseStudies/cloud.png",
        },
        {
            id: 3,
            title: "5-Person Dev Team Deployed in 2 Weeks",
            description:
                "Collaborate extensively with top clients from all over the world.",
            image: images[2],
            icon: "/images/CaseStudies/team.png",
        },
        {
            id: 4,
            title: "40% Cost Reduction for Fintech CX Team",
            description:
                "Collaborate extensively with top clients from all over the world.",
            image: images[0],
            icon: "/images/CaseStudies/case-studies-icon.png",
        },
        {
            id: 5,
            title: "Cloud-Native SaaS MVP in 12 Weeks",
            description:
                "Collaborate extensively with top clients from all over the world.",
            image: images[1],
            icon: "/images/CaseStudies/cloud.png",
        },
        {
            id: 6,
            title: "5-Person Dev Team Deployed in 2 Weeks",
            description:
                "Collaborate extensively with top clients from all over the world.",
            image: images[2],
            icon: "/images/CaseStudies/team.png",
        },
    ];

    return (
        <div className="bg-[#f5f7f8]">
            <Container>
                <div className="w-full py-12">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm"
                                onMouseEnter={() => setHoveredId(card.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="flex items-start justify-between gap-3 px-4 pt-4 pb-3">
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center">
                                            <Image
                                                src={card.icon}
                                                alt="icon"
                                                width={20}
                                                height={20}
                                                className="h-full w-full object-contain"
                                            />
                                        </div>
                                        <h3 className="font-clash pt-1 text-[16px] leading-snug font-semibold text-gray-800">
                                            {card.title}
                                        </h3>
                                    </div>
                                    <div className="mt-1 flex-shrink-0">
                                        <div className="h-2 w-2 rounded-full bg-gray-300" />
                                    </div>
                                </div>

                                <div className="relative mx-3 mb-3 h-[295px] overflow-hidden rounded-xl">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="h-full w-full object-cover"
                                        priority={false}
                                    />

                                    <div
                                        className={`absolute inset-0 bg-gradient-to-b from-black/30 to-black/30 transition-opacity duration-300 ${
                                            hoveredId === card.id
                                                ? "opacity-100"
                                                : "opacity-0"
                                        }`}
                                    />

                                    <div
                                        className={`absolute inset-0 flex flex-col justify-between p-4 transition-all duration-300 ${
                                            hoveredId === card.id
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-2 opacity-0"
                                        }`}
                                    >
                                        <p className="line-clamp-4 font-sans text-[16px] text-[#f4f4f4]">
                                            {card.description}{" "}
                                            {card.description}{" "}
                                            {card.description}{" "}
                                            {card.description}
                                        </p>
                                        <button className="text-btn-primary hover:text-btn-primary/70 flex items-center gap-1 self-end font-sans text-sm font-medium transition-colors">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CardInfo;
