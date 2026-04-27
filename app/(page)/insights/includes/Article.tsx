"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/app/components/Container";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import articlesData from "@/app/data/articles.json";
import Link from "next/link";
import { truncateText } from "@/app/utils/truncate";

const Article = () => {
    const featuredArticles = articlesData.slice(0, 3);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % featuredArticles.length);
        }, 5000); // Slide every 5 seconds

        return () => clearInterval(interval);
    }, [featuredArticles.length]);

    return (
        <section className="overflow-hidden bg-white py-16 md:py-20">
            <Container>
                {/* Section Title */}
                <div className="mb-12 text-center md:mb-10">
                    <h2 className="font-clash text-[30px] font-medium text-[#04070D] md:text-[40px]">
                        Latest Article
                    </h2>
                </div>

                {/* Sliding Carousel Container */}
                <div className="w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {featuredArticles.map((article) => (
                            <div
                                key={article.id}
                                className="w-full shrink-0 px-2 md:px-4"
                            >
                                <div className="overflow-hidden rounded-xl border-2 border-[#eaeaeb] bg-white shadow-[10px_20px_60px_-15px_rgba(0,0,0,0.05)]">
                                    <div className="flex flex-col gap-8 p-4 md:flex-row md:gap-10 md:p-2 md:p-6">
                                        {/* Image Section */}
                                        <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-xl md:h-[350px] md:h-[420px] md:w-[480px] md:rounded-xl">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex w-full flex-col justify-center py-4">
                                            <h3 className="font-clash mb-6 text-2xl leading-[1.2] font-semibold text-[#04070D] md:text-3xl md:text-[36px]">
                                                {article.title}
                                            </h3>

                                            <div className="mb-10 space-y-5">
                                                <p className="font-funnel text-[16px] leading-[1.6] text-[#525353]">
                                                    {truncateText(
                                                        article.description,
                                                        750
                                                    )}
                                                </p>
                                            </div>

                                            {/* Footer Metadata & Link */}
                                            <div className="flex flex-wrap items-center justify-between gap-6 pt-16">
                                                <div className="flex items-center gap-6">
                                                    <div className="flex items-center gap-2.5 text-[#525353]">
                                                        <FiCalendar className="text-xl opacity-70" />
                                                        <span className="font-funnel text-[16px]">
                                                            {article.date}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2.5 text-[#525353]">
                                                        <FiClock className="text-xl opacity-70" />
                                                        <span className="font-funnel text-[16px]">
                                                            {
                                                                article.readingTime
                                                            }
                                                        </span>
                                                    </div>
                                                </div>

                                                <Link
                                                    href={`/insights/${article.id}`}
                                                    className="group flex items-center gap-2 text-[17px] font-semibold text-[#0C7E9A] transition-all duration-300 hover:gap-4"
                                                >
                                                    Read More
                                                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="mt-10 flex items-center justify-center gap-3 md:mt-12">
                        {featuredArticles.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${
                                    currentIndex === index
                                        ? "w-8 bg-[#0C7E9A]"
                                        : "w-2.5 bg-[#D1D5DB] hover:bg-[#9CA3AF]"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Article;
