import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS styles
import { Box, useMediaQuery, Theme } from '@mui/material';

interface HomeCarouselProps {
    images: string[];
}

const HomeCarousel: React.FC<HomeCarouselProps> = ({ images }) => {
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery((theme: Theme) => theme.breakpoints.between('sm', 'md'));

    return (
        <Box
            sx={{
                minHeight: isSmallScreen ? '30vh' : isMediumScreen ? '40vh' : '50vh',
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
                    < Box
                        key={index}
                        component="div"
                        sx={{
                            width: '100%',
                            height: isSmallScreen ? '30vh' : isMediumScreen ? '40vh' : '50vh',
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></Box>
                ))
                }
            </ResponsiveCarousel >
        </Box >
    );
};

export default HomeCarousel;
