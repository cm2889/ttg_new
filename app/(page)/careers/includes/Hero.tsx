import React from "react";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";

const Hero = () => {
    return (
        <section
            className="relative w-full overflow-hidden"
            style={{
                backgroundImage: "url('/images/Careers/careers-hero-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
            }}
        >
            <Container className="relative z-10 py-24 pt-32 md:py-28 md:pt-80">
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-6">
                    <div className="max-w-2xl">
                        <InfoBadge
                            icon="/icons/Badges/earth.png"
                            text="World-Class Opportunities"
                            className=""
                        />

                        <h1 className="font-clash text-4xl leading-tight font-medium text-[#04070D] md:text-[40px]">
                            AJoin the Global Talent <br />
                            Collective
                        </h1>

                        <p className="font-funnel mt-3 max-w-xl text-[16px] leading-relaxed text-[#525353]">
                            At TotalTech Global, we connect ingenuity with
                            technology. We seek architects who embrace
                            complexity and demand excellence.{" "}
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
