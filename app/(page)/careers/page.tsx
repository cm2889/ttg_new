import React from "react";
import Hero from "./includes/Hero";
import WhyWorkTTG from "./includes/WhyWorkTTG";
import OpenPositions from "./includes/OpenPositions";
import ApplyForm from "./includes/ApplyForm";

const page = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <WhyWorkTTG />
            <OpenPositions />
            <ApplyForm />
        </div>
    );
};

export default page;
