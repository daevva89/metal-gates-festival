// HomePage.tsx
import React from "react";
import { Helmet } from 'react-helmet';
import HomeCarousel from "./HomeCarousel";
import TicketsSection from "./TicketsSection"; // Import the new TicketsSection component
import LatestNews from "./LatestNews";

const HomePage: React.FC = () => {
    const carouselImages = [
        "/images/hero/hero1-homepage.jpg",
        "/images/hero/hero2-homepage.jpg",
        "/images/hero/hero3-homepage.jpg",
    ];

    return (
        <>
            <Helmet>
                <title>Metal Gates Festival</title>
                <meta name="description" content="Biggest Romanian indoor metal festival" />
            </Helmet>
            <HomeCarousel images={carouselImages} />
            <TicketsSection /> {/* Add the TicketsSection between the carousel and the news */}
            <LatestNews />
        </>
    );
};

export default HomePage;
