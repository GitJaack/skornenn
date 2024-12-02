"use client";
import React, {useState, useEffect, useRef} from "react";

const images = [
    "/produits-bg/parfumeCidre.png",
    "/produits-bg/orangeSanguine.png",
    "/produits-bg/lancelot.png",
    "/produits-bg/strilherezh.png",
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        resetInterval();
    };

    const prevImage = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
        resetInterval();
    };

    const togglePause = () => {
        setIsPaused((prevIsPaused) => {
            const newIsPaused = !prevIsPaused;
            if (newIsPaused) {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            } else {
                resetInterval();
            }
            return newIsPaused;
        });
    };

    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);
        }
    };

    useEffect(() => {
        resetInterval();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className="h-screen w-full relative  overflow-hidden">
                <div className="absolute -top-1 w-full h-full z-10">
                    <img
                        className="w-full object-cover"
                        src="/vector/vector.png"></img>
                </div>

                <div className="sticky inset-0 h-full w-full">
                    <img
                        className="w-full h-full  object-cover"
                        src={images[currentIndex]}
                        alt=""
                    />
                </div>
                <div className="absolute top-1/2  w-full flex justify-between z-20">
                    <button
                        onClick={prevImage}
                        className="bg-white px-10 py-8 ml-4rounded-full shadow-md">
                        {"<"}
                    </button>
                    <button
                        onClick={nextImage}
                        className="bg-white p-2 rounded-full shadow-md">
                        {">"}
                    </button>
                </div>
                <div className="absolute bottom-4 w-full flex justify-center items-center z-20">
                    <button
                        onClick={togglePause}
                        className="bg-white p-2 rounded-full shadow-md mx-2">
                        {isPaused ? "Reprendre" : "Pause"}
                    </button>
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`mx-1 w-2 h-2 rounded-full ${
                                currentIndex === index
                                    ? "bg-blue-500"
                                    : "bg-gray-300"
                            }`}></span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Carousel;
