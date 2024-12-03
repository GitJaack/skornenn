interface ArticleCardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
    price: string;
    quantité: string;
}

const ArticleCard = ({
    imgSrc,
    imgAlt,
    title,
    description,
    price,
    quantité,
}: ArticleCardProps) => {
    return (
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
};

export default ArticleCard;
