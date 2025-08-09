import React from "react";

export default function GradientStar() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <defs>
                <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#ffffff" />
                    <stop offset="100%" stop-color="#22C1AD" />
                </linearGradient>
            </defs>
            <path
                fill="url(#star-gradient)"
                d="M12 2L14.09 8.26H20L15.45 12.14L17.54 18.4L12 14.53L6.46 18.4L8.55 12.14L4 8.26H9.91L12 2Z"
            />
        </svg>

    );
}
