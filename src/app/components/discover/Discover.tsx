import React from "react";

const Discover = () => {
    return (
        <div className="w-full h-screen bg-white">
            <div className="grid grid-cols-[1fr_1fr] gap-[1.25rem] p-[1.25rem] bg-white mt-[2rem]">
                <div className="relative w-full h-[600px] group overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src="/produits-bg/orangeCard.png"
                        alt="Cidre parfumé"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h2 className="text-3xl font-medium mb-4">
                            Cidre parfumé
                        </h2>
                        <button className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-colors">
                            Découvrir la sélection
                        </button>
                    </div>
                </div>
                <div className="relative w-full h-[600px] group overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src="/produits-bg/bioCard.png"
                        alt="Cidre BIO"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h2 className="text-3xl font-medium mb-4">Cidre BIO</h2>
                        <button className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-colors">
                            Découvrir la sélection
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
