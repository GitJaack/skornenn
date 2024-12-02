import React from "react";

const Presentation = () => {
    return (
        <section className="w-screen h-screen relative flex">
            <div className="absolute w-full h-16 bg-gradient-to-b from-white via-white to-transparent z-10"></div>

            <div className="absolute w-full h-full">
                <img
                    className="w-full h-full object-cover"
                    src="ice.webp"
                    alt="ice"
                />
            </div>

            <div className="bg-radial-white w-full h-full absolute inset-0"></div>

            <div className="w-full absolute inset-0 flex justify-center items-center px-[160px] gap-10">
                <div className="flex flex-col gap-4 max-w-[30rem]">
                    <h2 className="tracking-widest w-full text-left text-light-blue text-4xl overflow-hidden">
                        Un vent frais pour le cidre breton.
                    </h2>

                    <div className="w-full flex flex-col gap-4 text-left text-dark-blue">
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Est donec
                            lorem neque ultrices. Bibendum vitae donec augue
                            viverra pulvinar pharetra platea nunc dui. Molestie
                            vel purus porttitor mi eget vel sit orci nunc.
                        </p>
                        <p>
                            Facilisis est egestas enim amet dapibus in malesuada
                            pellentesque. Gravida ornare justo arcu integer
                            habitant tellus. Leo velit tellus convallis interdum
                            orci faucibus. Eleifend pellentesque a odio
                            adipiscing lacinia morbi egestas ornare. Sed ornare
                            fermentum aliquam platea pellentesque eu risus. Eget
                            nisl nulla sagittis scelerisque. Id nec viverra
                            elementum ac. Neque id ante dignissim pellentesque
                            nisl.
                        </p>
                        <p>
                            Habitant in eu ultrices sed. Ut varius libero massa
                            commodo. Vestibulum aenean mattis commodo sagittis
                            amet feugiat urna eget pellentesque.
                        </p>
                    </div>
                </div>

                {/* Right image */}
                <div className="flex items-center h-full max-w-[30rem]">
                    <img
                        className="object-contain h-[53%]"
                        src="produits/OrangeCidre.png"
                        alt="orange cidre"
                    />
                </div>
            </div>
            <div className=" w-full  absolute bottom-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    );
};

export default Presentation;
