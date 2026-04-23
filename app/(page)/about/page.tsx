import React from 'react';
import Hero from './includes/Hero';
import VisionaryFocus from './includes/VisionaryFocus';
import OperatingModel from './includes/OperatingModel';
import TTGGLobal from './includes/TTGGLobal';
import Team from './includes/Team';

const page = () => {
    return (
        <div>
            <Hero />
            <VisionaryFocus />
            <OperatingModel />
            <TTGGLobal />
            <Team />
        </div>
    );
};

export default page;