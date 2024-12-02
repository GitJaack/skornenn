import React from "react";

interface ArticleCardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
    price: string;
    quantité: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
    imgSrc,
    imgAlt,
    title,
    description,
    price,
    quantité,
}) => (
    <article
        className="group flex flex-col gap-6 text-center bg-white rounded-md p-4 shadow-articleCard 
        transition-all ease-in-out duration-700 delay-100 
        hover:shadow-articleCardHover 
        m-2 hover:cursor-pointer hover:bg-ice-effect  ">
        <img
            className="h-[200px] object-contain  duration-700
            delay-100 group-hover:scale-110
            "
            src={imgSrc}
            alt={imgAlt}
        />
        <h2 className="text-xl font-semibold text-light-blue">{title}</h2>
        <p className="text-sm text-dark-gray">{description}</p>
        <div className="overflow-hidden">
            <span className="text-2xl text-light-blue ">{price}€</span>
            <span className="text-dark-gray"> / {quantité}CL</span>
        </div>

        <button
            className="py-3 bg-transparent
        border-[1px] border-light-blue border-solid text-light-blue rounded-md hover:bg-light-blue hover:text-white transition-all hover:shadow-buttonHover hover:backdrop-blur-[2px] ease-in-out duration-700 delay-100">
            Ajouter au panier
        </button>
    </article>
);

const Section = () => {
    return (
        <>
            <section className="w-full h-full bg-custom-gradient pt-[8.5rem]  backdrop-blur-[2px]">
                <div className="flex justify-center items-center gap-7 mb-24">
                    <hr className="w-[478px] h-[1px] bg-dark-gray border-none" />
                    <h1 className="text-4xl font-medium tracking-widest text-dark-gray overflow-hidden">
                        Les nouveautés
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
                <div className="w-full h-[150px] bg-custom-gradient"></div>
            </section>
        </>
    );
};

export default Section;
