import React from "react";
import Hero from "./includes/Hero";
import VisionaryFocus from "./includes/VisionaryFocus";
import OperatingModel from "./includes/OperatingModel";
import TTGGLobal from "./includes/TTGGLobal";
import Team from "./includes/Team";
import Ecosystem from "./includes/Ecosystem";

const page = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <VisionaryFocus />
            <OperatingModel />
            <TTGGLobal />
            <Team />
            <Ecosystem />
        </div>
    );
};

export default page;
