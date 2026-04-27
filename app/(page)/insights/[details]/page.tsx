import React from "react";
import ArticleDetails from "./includes/ArticleDetails";
import articlesData from "@/app/data/articles.json";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        details: string;
    }>;
}

export default async function Page({ params }: PageProps) {
    const { details } = await params;

    const article = articlesData.find(
        (a) =>
            a.id.toString() === details ||
            encodeURIComponent(a.title) === details
    );

    if (!article) {
        notFound();
    }

    return <ArticleDetails article={article} />;
}
