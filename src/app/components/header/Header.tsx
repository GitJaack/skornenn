import React from "react";

const Header = () => {
    return (
        <nav className="w-full h-fit bg-gradient-to-b from-white via-[rgba(255,255,255,0.8)] to-transparent backdrop-blur-[2px] flex justify-between items-center px-[2.5rem] pt-[1rem] pb-[3rem] fixed z-50">
            <div className="pl-14">
                <img
                    className="w-[174px] h-[40px]"
                    src="logo.png"
                    alt="logo"
                ></img>
            </div>
            <div className="flex gap-10 mr-14 py-4">
                <img
                    className="w-8 h-8"
                    src="/icons/search.png"
                    alt="search"
                ></img>
                <img
                    className="w-8 h-8"
                    src="/icons/profil.png"
                    alt="profil"
                ></img>
                <img
                    className="w-8 h-8"
                    src="/icons/cart.png"
                    alt="cart"
                ></img>
                <img
                    className="w-8 h-8"
                    src="/icons/menu.png"
                    alt="menu"
                ></img>
            </div>
        </nav>
    );
};

export default Header;
