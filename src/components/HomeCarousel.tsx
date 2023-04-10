import React, { useEffect, useRef, useState } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, useMediaQuery, Theme } from '@mui/material';

interface HomeCarouselProps {
    images: string[];
}

const HomeCarousel: React.FC<HomeCarouselProps> = ({ images }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState(0);

    const aspectRatio = images.length > 0 ? 634 / 1152 : 9 / 16;

    const updateContainerHeight = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.clientWidth;
            const height = containerWidth * aspectRatio;
            setContainerHeight(height);
        }
    };

    useEffect(() => {
        updateContainerHeight();
        const handleResize = () => {
            updateContainerHeight();
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [containerRef, aspectRatio]);

    return (
        <Box
            ref={containerRef}
            sx={{
                minHeight: containerHeight,
                mb: 4,
                position: 'relative',
            }}
        >
            <ResponsiveCarousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showArrows
                showIndicators
            >
                {images.map((image, index) => (
                    <Box
                        key={index}
                        component="div"
                        sx={{
                            width: '100%',
                            height: containerHeight,
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></Box>
                ))}
            </ResponsiveCarousel>
        </Box>
    );
};

export default HomeCarousel;
