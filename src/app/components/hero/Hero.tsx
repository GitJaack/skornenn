import React from "react";

// Reusable Article Card Component

const Hero = () => {
    return (
        <div className="relative -z-[3] h-screen w-screen mb-[1rem]">
            {/* Hero Video */}
            <div className="h-screen w-full -z-[1] ">
                <div className="min-w-full h-screen fixed inset-0 overflow-hidden">
                    <video
                        className="
                    aspect-auto brightness-50 absolute inset-0 min-w-full min-h-full bg-cover object-cover "
                        autoPlay
                        muted
                        loop
                        src="heroVideo.mp4"
                    >
                        <source
                            className="w-full h-auto object-cover "
                            src="heroVideo.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                {/* Hero Logo */}
                <img
                    className="w-[900px] h-[205px]"
                    src="logo.png"
                    alt="Logo principal"
                />
            </div>
        </div>
    );
};

export default Hero;
