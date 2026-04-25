import React from "react";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";

const Hero = () => {
    return (
        <section
            className="relative w-full overflow-hidden"
            style={{
                backgroundImage: "url('/images/Services/services-hero-bg.png')",
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
                            icon="/icons/Badges/core-service.png"
                            text="Core Service"
                            className=""
                        />

                        <h1 className="font-clash text-4xl leading-tight font-medium text-[#04070D] md:text-[40px]">
                            All you need to scale—six key capabilities in one
                            partner.
                        </h1>

                        <p className="font-funnel mt-3 max-w-md text-[16px] leading-relaxed text-[#525353]">
                            Six interconnected service pillars designed to cover
                            every dimension of modern business operations.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
