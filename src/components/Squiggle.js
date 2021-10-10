import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';

const Squiggle = () => {
    const line = useRef(null);
    useEffect(() => {
        TweenMax.fromTo(line.current, 5, { y: 18 }, { y: -18 });
    });

    return (
        <svg width="75vw" height="5rem" viewBox="0 0 600 200" preserveAspectRatio="none" version="1.1" style={{margin: "2rem", fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "1.5"}}>
            <g transform="matrix(1,0,0,1,-100,-100)">
                <path ref={line} d="M105.409,280.282C105.409,280.282 167.212,120.437 199.635,120.362C232.057,120.286 266.585,279.911 299.945,279.831C333.305,279.751 366.518,119.931 399.796,119.881C433.073,119.832 471.319,279.527 499.609,279.533C527.899,279.54 570.701,120.43 599.839,119.907C628.976,119.383 693.823,279.81 693.823,279.81" style={{fill: "none", stroke: "rgb(174,210,254)", strokeWidth: "10.42px"}} />
            </g>
        </svg>
    );
};

export default Squiggle;
