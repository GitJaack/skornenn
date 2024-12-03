import React from "react";
import ArticleCard from "@components/articleCard/ArticleCard";

const OtherProducts = () => {
    return (
        <section className="relative w-full h-full">
            <div
                className="absolute inset-0 w-full h-full bg-cover"
                style={{backgroundImage: "url('iceberg.jpeg')"}}>
                <div className="absolute inset-0 bg-white/80 backdrop-filter backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 pt-[7.5rem] pb-[4rem]">
                <div className="flex justify-center items-center gap-7 mb-24">
                    <hr className="w-[478px] h-[1px] bg-dark-gray border-none" />
                    <h1 className="text-4xl font-medium tracking-widest text-dark-gray overflow-hidden">
                        Autres produits
                    </h1>
                    <hr className="w-[478px] h-[1px] bg-dark-gray border-none" />
                </div>

                <div className="flex flex-col max-w-[1350px] mx-auto">
                    <div className="grid grid-cols-3 gap-8 max-w-[1350px]">
                        <ArticleCard
                            imgSrc="produits/orangeCidre.png"
                            imgAlt="Canette de cidre à l'orange sanguine"
                            title="Canette Oranges Sanguines"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem totam voluptate deleniti voluptatem non, voluptatum accusantium ea ex explicabo consectetur officiis numquam labore impedit, quia dolorem eaque quis! Incidunt."
                            price="1.70"
                            quantité="33"
                        />
                        <ArticleCard
                            imgSrc="produits/orangeCidre.png"
                            imgAlt="Canette de cidre à l'orange sanguine"
                            title="Canette Oranges Sanguines"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem totam voluptate deleniti voluptatem non, voluptatum accusantium ea ex explicabo consectetur officiis numquam labore impedit, quia dolorem eaque quis! Incidunt."
                            price="1.70"
                            quantité="33"
                        />
                        <ArticleCard
                            imgSrc="produits/orangeCidre.png"
                            imgAlt="Canette de cidre à l'orange sanguine"
                            title="Canette Oranges Sanguines"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem totam voluptate deleniti voluptatem non, voluptatum accusantium ea ex explicabo consectetur officiis numquam labore impedit, quia dolorem eaque quis! Incidunt."
                            price="1.70"
                            quantité="33"
                        />
                        <ArticleCard
                            imgSrc="produits/orangeCidre.png"
                            imgAlt="Canette de cidre à l'orange sanguine"
                            title="Canette Oranges Sanguines"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem totam voluptate deleniti voluptatem non, voluptatum accusantium ea ex explicabo consectetur officiis numquam labore impedit, quia dolorem eaque quis! Incidunt."
                            price="1.70"
                            quantité="33"
                        />
                        <ArticleCard
                            imgSrc="produits/orangeCidre.png"
                            imgAlt="Canette de cidre à l'orange sanguine"
                            title="Canette Oranges Sanguines"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem totam voluptate deleniti voluptatem non, voluptatum accusantium ea ex explicabo consectetur officiis numquam labore impedit, quia dolorem eaque quis! Incidunt."
                            price="1.70"
                            quantité="33"
                        />
                        <ArticleCard
                            imgSrc="produits/orangeCidre.png"
                            imgAlt="Canette de cidre à l'orange sanguine"
                            title="Canette Oranges Sanguines"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem totam voluptate deleniti voluptatem non, voluptatum accusantium ea ex explicabo consectetur officiis numquam labore impedit, quia dolorem eaque quis! Incidunt."
                            price="1.70"
                            quantité="33"
                        />
                    </div>
                    <div className="flex items-center justify-end h-fit font-semibold group mt-20 mb-3">
                        <div>
                            <hr className="w-[100px] h-[1px] bg-dark-gray border-none mr-3 transition-all duration-700 ease-in-out group-hover:w-[50px]" />
                        </div>
                        <div>
                            <p className="text-xl text-dark-blue h-full ">
                                En voir plus
                            </p>
                        </div>
                        <div className="self-auto transition-all duration-700 ease-in-out group-hover:transform group-hover:translate-x-1">
                            <img
                                className="h-5"
                                src="icons/chevron.png"
                                alt="chevron"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bottom-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    );
};

export default OtherProducts;
