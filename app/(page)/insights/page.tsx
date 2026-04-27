import React from "react";
import Hero from "./includes/Hero";
import Article from "./includes/Article";
import AllArticles from "./includes/AllArticles";

const page = () => {
    return (
        <div>
            <Hero />
            <Article />
            <AllArticles />
        </div>
    );
};

export default page;
