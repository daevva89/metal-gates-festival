// HomePage.tsx
import React from "react";
import HomeCarousel from "./HomeCarousel";
import TicketsSection from "./TicketsSection"; // Import the new TicketsSection component
import LatestNews from "./LatestNews";

const HomePage: React.FC = () => {
    const carouselImages = [
        "/images/bands/img-hero/katatonia.jpg",
        "/images/bands/img-hero/antimatter.jpg",
        "/images/bands/img-hero/rotting-christ.jpg",
    ];

    return (
        <>
            <HomeCarousel images={carouselImages} />
            <TicketsSection /> {/* Add the TicketsSection between the carousel and the news */}
            <LatestNews />
        </>
    );
};

export default HomePage;
