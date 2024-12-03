"use client";
import React, {useState, useEffect, useRef, useCallback} from "react";

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

    const nextImage = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, []);

    const prevImage = useCallback(() => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    }, []);

    const togglePause = useCallback(() => {
        setIsPaused((prevIsPaused) => !prevIsPaused);
    }, []);

    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(nextImage, 3000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused, nextImage]);

    return (
        <>
            <div className="h-[110vh] w-full relative overflow-hidden">
                <div className="absolute -top-1 w-full h-full z-10">
                    <img
                        className="w-full object-cover"
                        src="/vector/vector.png"
                        alt=""
                    />
                </div>

                <div className="absolute w-full h-full ">
                    <img
                        className="w-full h-full object-cover"
                        src={images[currentIndex]}
                        alt=""
                    />
                </div>
                <div className="absolute top-1/2 w-full flex justify-between items-center z-20">
                    <div className="py-2">
                        <button
                            onClick={prevImage}
                            className="bg-white w-20 h-20 ml-10 rounded-full shadow-md flex items-center justify-center">
                            <img
                                className="h-7 transform rotate-180"
                                src="/icons/next.png"
                                alt="next"></img>
                        </button>
                    </div>
                    <div className="py-2">
                        <button
                            onClick={nextImage}
                            className="bg-white w-20 h-20 mr-10 rounded-full shadow-md flex items-center justify-center">
                            <img
                                className="h-7"
                                src="/icons/next.png"
                                alt="next"></img>
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-10 w-full flex justify-center items-center z-20">
                    <button
                        onClick={togglePause}
                        className="h-8 w-8 p-2">
                        {isPaused ? (
                            <img src="/icons/play.png"></img>
                        ) : (
                            <img src="/icons/pause.png"></img>
                        )}
                    </button>
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`mx-1 w-2 h-2 border-[1px] border-white rounded-full ${
                                currentIndex === index
                                    ? "bg-white"
                                    : "bg-transparent"
                            }`}></span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Carousel;
