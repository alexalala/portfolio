import React, { useEffect } from 'react';
import {gsap} from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import styled, { keyframes } from 'styled-components';

import { ReactComponent as Trail } from '../assets/images/bee-trail.svg';
import { ReactComponent as BeeImg } from '../assets/images/bee.svg';

const Bee = () => {
    gsap.registerPlugin(MotionPathPlugin);

    useEffect(() => {
        gsap.to(".bee", {
            motionPath: {
                path: "#trail",
                align: "#path", // align element with the path
                alignOrigin:[0.5, 0.5], // align with the center of the element
                autoRotate: true, // rotate along the path
                start: 0, // start halfway along the path
                end: 1 // end at the end of the path
            },
            duration: 10,
            immediateRender: true,
        });
    });

    return (
        <>
            <StyledTrail />
            <StyledBeeImg className="bee" />
        </>
    );
};

const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const StyledBeeImg = styled(BeeImg)`
    position: absolute;
    left: 2rem;
    top: 11.25rem;
`;

const StyledTrail = styled(Trail)`
    position: absolute;
    width: 55rem;
    left: 0;
    opacity: 0;
    animation: ${fadein};
    animation-duration: 3s;
    animation-delay: 8s;
    animation-fill-mode: forwards;
`;

export default Bee;

