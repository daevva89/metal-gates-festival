// HomePage.tsx
import React from "react";
import Hero from "./Hero";
import LatestNews from "./LatestNews";

const HomePage: React.FC = () => {
    return (
        <>
            <Hero title="Welcome to our Homepage" />
            <LatestNews />
        </>
    );
};

export default HomePage;
