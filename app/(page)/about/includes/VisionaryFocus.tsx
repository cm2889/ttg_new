import React from "react";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";
import Image from "next/image";

interface ValuePoint {
    title: string;
    description: string;
    icon: string;
}

const valuePoints: ValuePoint[] = [
    {
        title: "Client Outcome First",
        description:
            "Every decision we make is tied to your business results, not our service metrics.",
        icon: "/images/About/client-outcome-first.png",
    },
    {
        title: "Transparent Operations",
        description:
            "No hidden fees, no black-box processes. You always know what's happening",
        icon: "/images/About/transparent-operations.png",
    },
    {
        title: "AI-Enhanced Delivery",
        description:
            "We embed automation in every service we deliver to maximize quality and speed.",
        icon: "/images/About/ai-enhanced-delivery.png",
    },
    {
        title: "Long-Term Partnership",
        description:
            "We grow when our clients grow. Our incentives are aligned with your.",
        icon: "/images/About/long-term-partnership.png",
    },
];

const VisionaryFocus = () => {
    return (
        <section className="w-full bg-[#ffffff] py-16 md:py-24">
            <Container>
                <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
                    <div className="md:max-w-2xl">
                        <InfoBadge
                            icon="/icons/Badges/Visionary.png"
                            text="Visionary Focus"
                            className="mb-6 md:mb-12"
                        />

                        <h2 className="font-clash text-[20px] font-medium text-[#0b0b0b] md:text-[32px]">
                            What Drives Us
                        </h2>
                        <p className="font-funnel mt-5 text-[12px] text-[#555555] md:text-[16px]">
                            At TTG, we&rsquo;re driven by the belief that great
                            businesses scale through smart systems, strong
                            teams, and seamless execution&mdash;built to deliver
                            lasting impact.
                        </p>

                        <div className="mt-5 border-t border-[#cfcfcf]" />

                        <h3 className="font-clash mt-5 text-[20px] font-medium tracking-[-0.02em] text-[#0b0b0b] md:text-[32px]">
                            Our Vision
                        </h3>
                        <p className="font-funnel mt-7 text-[12px] leading-[1.45] text-[#555555] md:text-[16px]">
                            To become the world&rsquo;s most trusted full-stack
                            operations partner - enabling businesses to scale
                            without limits through intelligent technology,
                            skilled talent, and robust infrastructure
                        </p>

                        <div className="mt-5 border-t border-[#cfcfcf]" />

                        <h3 className="font-clash mt-5 text-[20px] font-medium text-[#0b0b0b] md:text-[32px]">
                            Mission
                        </h3>
                        <p className="font-funnel mt-5 text-[12px] text-[#555555] md:text-[16px]">
                            Deliver outcome-driven business solutions that
                            combine people, process, and technology - making
                            enterprise - grade capabilities accessible to every
                            scaling company
                        </p>

                        <div className="mt-10 border-t border-[#cfcfcf]" />
                    </div>

                    <div
                        className="rounded-xl border border-[#e1e1e1] bg-[#ffffff] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.03)] md:p-8"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(-35deg, rgba(17, 19, 22, 0.015) 0px, rgba(17, 19, 22, 0.015) 2px, transparent 2px, transparent 8px)",
                        }}
                    >
                        {valuePoints.map((point, index) => {
                            const isLast = index === valuePoints.length - 1;

                            return (
                                <div
                                    key={point.title}
                                    className={`${
                                        !isLast
                                            ? "mb-7 border-b border-[#d4d4d4] pb-7"
                                            : ""
                                    }`}
                                >
                                    <div className="flex items-start gap-5 md:gap-6">
                                        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center">
                                            <div className="relative h-8 w-8">
                                                <Image
                                                    src={point.icon}
                                                    alt={`${point.title} icon`}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-clash text-[20px] font-medium tracking-[-0.02em] text-[#101317] md:text-[24px]">
                                                {point.title}
                                            </h4>
                                            <p className="font-funnel mt-4 text-[12px] leading-[1.45] text-[#4e4e4e] md:text-[16px]">
                                                {point.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default VisionaryFocus;
