import React from "react";
import Link from "next/link";
import Container from "@/app/components/Container";

const openings = [
    {
        title: "Senior BPO Ops Manager",
        type: "Full-Time",
        location: "Remote (Global)",
    },
    {
        title: "Full-Stack Software Developer",
        type: "Contract",
        location: "EMEA Region",
    },
    {
        title: "Customer Experience Strategist",
        type: "Full-Time",
        location: "Sylhet, BD / Remote",
    },
    {
        title: "Senior UI/UX Product Designer",
        type: "Full-Time",
        location: "Remote (UTC+/-4)",
    },
] as const;

const OpenPositions = () => {
    return (
        <section className="w-full bg-[#ffffff] py-14 md:py-20">
            <Container>
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-2xl">
                        <h2 className="font-clash text-[24px] leading-tight font-medium text-[#0a0f17] md:text-[40px]">
                            Open Positions
                        </h2>
                        <p className="font-funnel mt-1 text-[14px] leading-relaxed text-[#555555] md:text-[16px]">
                            Filter by department or location to find your match.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="font-funnel inline-flex w-full max-w-68 items-center justify-between rounded-full border border-[#1083a3] bg-[#f5f7f8] px-5 py-2.5 text-[16px] font-medium text-[#1f242b] md:w-auto md:min-w-68"
                    >
                        All Department
                        <span className="bg-btn-primary ml-4 flex h-9 w-9 items-center justify-center rounded-full text-white">
                            <svg
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                aria-hidden="true"
                            >
                                {" "}
                                <path
                                    d="M5 7.5L10 12.5L15 7.5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </button>
                </div>

                <div className="mt-8 space-y-4 md:mt-10 md:space-y-5">
                    {openings.map((opening) => {
                        return (
                            <article
                                key={opening.title}
                                className="rounded-xl px-4 py-4 md:px-6 md:py-5"
                                style={{
                                    backgroundColor: "#f0f2f3",
                                    backgroundImage:
                                        "repeating-linear-gradient(-33deg, rgba(18, 26, 34, 0.03) 0px, rgba(18, 26, 34, 0.03) 1px, transparent 1px, transparent 8px)",
                                }}
                            >
                                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h3 className="font-clash text-[20px] leading-tight font-medium text-[#11161e] md:text-[24px]">
                                            {opening.title}
                                        </h3>

                                        <p className="font-funnel mt-3 flex flex-wrap items-center gap-3 text-[14px] text-[#4f555d] md:text-[16px]">
                                            <span className="font-semibold text-[#464c54]">
                                                {opening.type}
                                            </span>
                                            <span className="bg-btn-primary h-1.5 w-1.5 rounded-full" />
                                            <span>{opening.location}</span>
                                        </p>
                                    </div>

                                    <Link
                                        href="/careers"
                                        className="font-funnel text-btn-primary self-start text-[16px] font-medium underline decoration-1 underline-offset-2 transition-opacity hover:opacity-85 md:self-center"
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default OpenPositions;
