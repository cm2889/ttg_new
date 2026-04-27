"use client";

import React, { useEffect } from "react";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <section
            className="relative w-full overflow-hidden"
            style={{
                backgroundImage: "url('/images/Insights/insight-hero-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
            }}
        >
            <Container className="relative z-10 py-24 pt-32 md:py-28 md:pt-40 lg:pt-60">
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                    <div className="max-w-2xl">
                        <InfoBadge
                            icon="/icons/Badges/earth.png"
                            text="Insights"
                            className=""
                        />

                        <h1 className="font-clash mt-6 text-4xl leading-tight font-medium text-[#04070D] md:text-5xl lg:text-6xl">
                            Where Strategy Meets <br /> Execution
                        </h1>

                        <p className="font-funnel mt-6 max-w-xl text-lg leading-relaxed text-[#525353]">
                            Explore how modern businesses are solving
                            operational challenges, adopting smarter systems,
                            and scaling with clarity through proven strategies
                            and real-world experience.
                        </p>
                    </div>

                    <div className="relative flex min-h-[450px] items-center justify-center md:min-h-[600px]">
                        {/* Hero Card 1 - Back (Top) */}
                        <div
                            className="absolute -top-10 right-10 z-10 w-[240px] md:-top-20 md:right-32 md:w-[350px] lg:right-48"
                            data-aos="fade-down-left"
                            data-aos-delay="200"
                        >
                            <Image
                                src="/images/Insights/hero-card-3.png"
                                alt="Strategy Card 1"
                                width={450}
                                height={550}
                                className="h-auto w-full rotate-[-12deg] drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:rotate-[-8deg]"
                            />
                        </div>

                        {/* Hero Card 2 - Middle */}
                        <div
                            className="absolute top-10 right-5 z-20 w-[240px] md:top-20 md:right-16 md:w-[350px] lg:right-24"
                            data-aos="fade-left"
                            data-aos-delay="400"
                        >
                            <Image
                                src="/images/Insights/hero-card-1.png"
                                alt="Strategy Card 2"
                                width={450}
                                height={550}
                                className="h-auto w-full rotate-[-6deg] drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:rotate-[-2deg]"
                            />
                        </div>

                        {/* Hero Card 3 - Front (Bottom) */}
                        <div
                            className="absolute right-0 bottom-0 z-30 w-[240px] md:right-0 md:bottom-100 md:w-[350px] lg:right-5"
                            data-aos="fade-up-left"
                            data-aos-delay="600"
                        >
                            <Image
                                src="/images/Insights/hero-card-2.png"
                                alt="Strategy Card 3"
                                width={450}
                                height={550}
                                className="h-auto w-full rotate-[0deg] drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:rotate-[4deg]"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
