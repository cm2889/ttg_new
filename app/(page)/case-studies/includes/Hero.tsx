import React from "react";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";

const Hero = () => {
    return (
        <section
            className="relative h-screen w-full overflow-hidden"
            style={{
                backgroundImage:
                    "url('/images/CaseStudies/case-studies-bg.png')",
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
                            icon="/icons/Badges/case-studies.png"
                            text="Case Studies"
                            className=""
                        />

                        <h1 className="font-clash text-4xl leading-tight font-medium text-[#04070D] md:text-[40px]">
                            Where Results Speak Louder
                        </h1>

                        <p className="font-funnel mt-3 max-w-xl text-[16px] leading-relaxed text-[#525353]">
                            Explore how we turn complex challenges into
                            scalable, high-impact solutions.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
