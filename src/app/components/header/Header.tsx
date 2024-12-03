"use client";

import Image from "next/image";
import Link from "next/link";
import {useState, useRef, useEffect} from "react";

interface HeaderIconProps {
    src: string;
    alt: string;
    href: string;
}

const HEADER_ICONS: HeaderIconProps[] = [
    {src: "/icons/search.png", alt: "Rechercher", href: "/search"},
    {src: "/icons/profil.png", alt: "Mon profil", href: "/profile"},
    {src: "/icons/cart.png", alt: "Mon panier", href: "/cart"},
    {src: "/icons/menu.png", alt: "Menu", href: "/menu"},
];

const HeaderIcon = ({
    src,
    alt,
    href,
    index,
}: HeaderIconProps & {index: number}) => (
    <div
        className="cursor-pointer transition-all duration-700 animate-slideDown opacity-0"
        style={{animationDelay: `${index * 0.1}s`}}>
        <Link
            href={href}
            aria-label={alt}>
            <Image
                width={32}
                height={32}
                src={src}
                alt={alt}
            />
        </Link>
    </div>
);

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                rootMargin: "0px",
                threshold: 0.1,
                root: null,
            }
        );

        if (logoRef.current) {
            observer.observe(logoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed z-50 flex h-fit w-full items-center justify-between bg-gradient-to-b from-white via-[rgba(255,255,255,0.8)] to-transparent px-[2.5rem] pb-[3rem] pt-[1rem] backdrop-blur-[2px]">
            <div
                ref={logoRef}
                className="pl-14">
                <Link href="/">
                    <Image
                        className={`transition-all duration-700 ${
                            isVisible ? "opacity-100" : "opacity-0"
                        }`}
                        width={174}
                        height={40}
                        src="/logo.png"
                        alt="Logo du site"
                        priority
                    />
                </Link>
            </div>
            <div className="mr-14 flex gap-10 py-4">
                {HEADER_ICONS.map((icon, index) => (
                    <HeaderIcon
                        key={icon.alt}
                        {...icon}
                        index={index}
                    />
                ))}
            </div>
        </nav>
    );
};

export default Header;
