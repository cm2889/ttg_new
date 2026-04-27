import React from "react";
import { notFound } from "next/navigation";
import Hero from "./includes/Hero";
import jobsData from "@/app/data/jobs.json";

const jobs = jobsData;

const getJobById = (id: string) => {
    return jobs.find((job) => job.id === id);
};

interface PageProps {
    params: Promise<{
        positiondetails: string;
    }>;
}

export default async function Page({ params }: PageProps) {
    const { positiondetails } = await params;
    const job = getJobById(positiondetails);

    if (!job) {
        notFound();
    }

    return (
        <div className="overflow-hidden">
            <Hero job={job} />
        </div>
    );
}
