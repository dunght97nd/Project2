import React from "react";

const cleanPercentage = (percentage) => {
    const tooLow = !Number.isFinite(+percentage) || percentage < 0;
    const tooHigh = percentage > 100;
    return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
    const r = 16;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - pct) * circ) / 100;
    return (
        <circle
            r={r}
            cx={19}
            cy={19}
            fill="transparent"
            stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
            strokeWidth={"0.5rem"}
            strokeDasharray={circ}
            strokeDashoffset={pct ? strokePct : 0}
            strokeLinecap="round"
        ></circle >
    );
};

const Text = ({ percentage }) => {
    return (
        <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize={"1.1rem"}
            fill="white"
            fontWeight={"800"}
        >
            {percentage.toFixed(0)} %
        </text >
    );
};

const Pie = ({ percentage, colour }) => {
    const pct = cleanPercentage(percentage);
    return (
        <svg width={38} height={38}>
            <g>
                <Circle colour="#ffc0c0" />
                <Circle colour={colour} pct={pct} />
            </g>
            <Text percentage={pct} />
        </svg>
    );
};

export default Pie;