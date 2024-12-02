import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Section from "./components/section/Section";
import Intro from "./components/introduction/Introduction";
import Presentation from "./components/presentation/Presentation";
import Carousel from "./components/carousel/Carousel";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Section />
            <Intro />
            <Presentation />
            <Carousel />
        </>
    );
}
