import React from "react";

const Discover = () => {
    return (
        <div className="w-full min-h-screen bg-white">
            <div className="grid grid-cols-[1fr_1fr] gap-[1.25rem] p-[1.25rem] bg-white mt-[2rem]">
                <div className="relative w-full max-h-[1050px] group overflow-hidden rounded-lg">
                    <img
                        className="w-full h-full object-cover"
                        src="/produits-bg/orangeCard.png"
                        alt="Cidre parfumé"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex  flex-col items-center justify-end text-white  hover:bg-black/20 transition-all duration-700">
                        <h2 className="text-[2.5rem] font-bold mb-4 h-16">
                            Cidre parfumé
                        </h2>
                        <button className="text-[1.5rem] px-[6.5rem] font-light mb-24 py-3 border border-white rounded-sm hover:bg-white hover:text-light-blue hover:shadow-buttonHover transition-all duration-700">
                            Découvrir la sélection
                        </button>
                    </div>
                </div>

                <div className="relative w-full max-h-[1050px] group overflow-hidden rounded-lg">
                    <img
                        className="w-full h-full object-cover"
                        src="/produits-bg/sanguineCard.png"
                        alt="Cidre BIO"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex  flex-col items-center justify-end text-white  hover:bg-black/20 transition-all duration-700">
                        <h2 className="text-[2.5rem] font-bold mb-4 h-16">
                            Cidre BIO
                        </h2>
                        <button className="text-[1.5rem] px-[6.5rem] font-light mb-24 py-3 border border-white rounded-sm hover:bg-white hover:text-light-blue hover:shadow-buttonHover transition-all duration-700">
                            Découvrir la sélection
                        </button>
                    </div>
                </div>

                <div className="relative w-full max-h-[800px] group overflow-hidden rounded-lg col-span-2">
                    <img
                        className="w-full h-full object-cover"
                        src="/produits-bg/cidreNoAlcool.jpeg"
                        alt="Cidre non alcool"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex  flex-col items-center justify-end text-white  hover:bg-black/20 transition-all duration-700">
                        <h2 className="text-[2.5rem] font-bold mb-4 h-16">
                            Cidre sans alcool
                        </h2>
                        <button className="text-[1.5rem] px-[6.5rem] font-light mb-24 py-3 border border-white rounded-sm hover:bg-white hover:text-light-blue hover:shadow-buttonHover transition-all duration-700">
                            Découvrir la sélection
                        </button>
                    </div>
                </div>

                <div className="relative w-full max-h-[1050px] group overflow-hidden rounded-lg">
                    <img
                        className="w-full h-full object-cover"
                        src="/produits-bg/lancelotCard.png"
                        alt="Cidre nature"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex  flex-col items-center justify-end text-white  hover:bg-black/20 transition-all duration-700">
                        <h2 className="text-[2.5rem] font-bold mb-4 h-16">
                            Cidre nature
                        </h2>
                        <button className="text-[1.5rem] px-[6.5rem] font-light mb-24 py-3 border border-white rounded-sm hover:bg-white hover:text-light-blue hover:shadow-buttonHover transition-all duration-700">
                            Découvrir la sélection
                        </button>
                    </div>
                </div>

                <div className="relative w-full max-h-[1050px] group overflow-hidden rounded-lg">
                    <img
                        className="w-full h-full object-cover"
                        src="/produits-bg/cidreGlace.jpeg"
                        alt="Cidre glace"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex  flex-col items-center justify-end text-white  hover:bg-black/20 transition-all duration-700">
                        <h2 className="text-[2.5rem] font-bold mb-4 h-16">
                            Cidre glace
                        </h2>
                        <button className="text-[1.5rem] px-[6.5rem] font-light mb-24 py-3 border border-white rounded-sm hover:bg-white hover:text-light-blue hover:shadow-buttonHover transition-all duration-700">
                            Découvrir la sélection
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
