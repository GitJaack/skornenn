import React from "react";

// Reusable Article Card Component
interface ArticleCardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
    price: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
    imgSrc,
    imgAlt,
    title,
    description,
    price,
}) => (
    <article
        className="group flex flex-col gap-6 overflow-hidden text-center bg-white rounded-md p-4 shadow-articleCard 
        transition-all ease-in-out duration-700 delay-100 
        hover:shadow-articleCardHover 
        m-2 hover:cursor-pointer hover:bg-ice-effect  "
    >
        <img
            className="h-[200px] object-contain  duration-700
            delay-100 group-hover:scale-110
            "
            src={imgSrc}
            alt={imgAlt}
        />
        <h2 className="text-xl font-semibold text-light-blue">{title}</h2>
        <p className="text-sm text-dark-gray">{description}</p>
        <div className="text-lg font-medium text-light-blue">{price}</div>
        <button
            className="px-4 py-3 bg-white
        border-[1px] border-light-blue border-solid text-light-blue rounded-md hover:bg-light-blue hover:text-white transition-colors"
        >
            Ajouter au panier
        </button>
    </article>
);

const Hero = () => {
    return (
        <div className="relative w-screen h-[200vh] overflow-hidden -z-1">
            {/* Hero Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover brightness-50"
                src="heroVideo.mp4"
                autoPlay
                muted
                loop
            ></video>

            {/* Hero Logo */}
            <img
                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[900px] h-[205px]"
                src="logo.png"
                alt="Logo principal"
            />

            {/* Nouveautés Section */}
            <section className="sticky top-[100vh] z-[15] w-full h-screen bg-custom-gradient pt-[8.5rem] pb-[6.25rem] backdrop-blur-[2px] flex flex-col items-center overflow-hidden">
                {/* Title */}
                <div className="flex items-center gap-7 mb-10">
                    <hr className="w-[478px] h-[2px] bg-dark-gray" />
                    <h1 className="text-4xl font-medium tracking-widest text-dark-gray overflow-hidden">
                        Les nouveautés
                    </h1>
                    <hr className="w-[478px] h-[2px] bg-dark-gray" />
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-3 gap-8 mx-auto max-w-[1200px]">
                    {/* Article Card */}
                    <ArticleCard
                        imgSrc="produits/orangeCidre.png"
                        imgAlt="Canette de cidre à l'orange sanguine"
                        title="Canette Oranges Sanguines"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem totam voluptate deleniti voluptatem non, voluptatum accusantium ea ex explicabo consectetur officiis numquam labore impedit, quia dolorem eaque quis! Incidunt."
                        price="1.70€ / 33cl"
                    />
                    <ArticleCard
                        imgSrc="produits/orangeCidre.png"
                        imgAlt="Canette de cidre à l'orange sanguine"
                        title="Canette Oranges Sanguines"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem totam voluptate deleniti voluptatem non, voluptatum accusantium ea ex explicabo consectetur officiis numquam labore impedit, quia dolorem eaque quis! Incidunt."
                        price="1.70€ / 33cl"
                    />
                    <ArticleCard
                        imgSrc="produits/orangeCidre.png"
                        imgAlt="Canette de cidre à l'orange sanguine"
                        title="Canette Oranges Sanguines"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem totam voluptate deleniti voluptatem non, voluptatum accusantium ea ex explicabo consectetur officiis numquam labore impedit, quia dolorem eaque quis! Incidunt."
                        price="1.70€ / 33cl"
                    />
                    <ArticleCard
                        imgSrc="produits/orangeCidre.png"
                        imgAlt="Canette de cidre à l'orange sanguine"
                        title="Canette Oranges Sanguines"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem totam voluptate deleniti voluptatem non, voluptatum accusantium ea ex explicabo consectetur officiis numquam labore impedit, quia dolorem eaque quis! Incidunt."
                        price="1.70€ / 33cl"
                    />
                    <ArticleCard
                        imgSrc="produits/orangeCidre.png"
                        imgAlt="Canette de cidre à l'orange sanguine"
                        title="Canette Oranges Sanguines"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem totam voluptate deleniti voluptatem non, voluptatum accusantium ea ex explicabo consectetur officiis numquam labore impedit, quia dolorem eaque quis! Incidunt."
                        price="1.70€ / 33cl"
                    />
                    <ArticleCard
                        imgSrc="produits/orangeCidre.png"
                        imgAlt="Canette de cidre à l'orange sanguine"
                        title="Canette Oranges Sanguines"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem totam voluptate deleniti voluptatem non, voluptatum accusantium ea ex explicabo consectetur officiis numquam labore impedit, quia dolorem eaque quis! Incidunt."
                        price="1.70€ / 33cl"
                    />
                </div>
            </section>
        </div>
    );
};

export default Hero;
