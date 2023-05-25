import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Typography, useMediaQuery, Theme } from '@mui/material';

interface HeroProps {
    title?: string;
    subtitle?: string;
    image?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState(0);

    const aspectRatio = image ? 634 / 1152 : 9 / 16; // Set the aspect ratio of your image or use a default value

    const updateContainerHeight = useCallback(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.clientWidth;
            const height = containerWidth * aspectRatio;
            setContainerHeight(height);
        }
    }, [aspectRatio]);

    useEffect(() => {
        updateContainerHeight();
        const handleResize = () => {
            updateContainerHeight();
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [containerRef, updateContainerHeight]);

    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery((theme: Theme) => theme.breakpoints.between('sm', 'md'));

    return (
        <Box
            ref={containerRef}
            sx={{
                minHeight: containerHeight,
                mb: 4,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                flexDirection: 'row',
                background: image
                    ? `url(${image}) no-repeat center center/cover`
                    : 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                color: 'white',
            }}
        >
            {(title || subtitle) && (
                <Box
                    sx={{
                        paddingTop: '4rem',
                        paddingBottom: '2rem',
                        width: '100%',
                        textAlign: 'center',
                        background: 'linear-gradient(transparent 10%, rgba(0, 0, 0, 0.7))',
                    }}
                >
                    {title && (
                        <Typography
                            variant="h2"
                            sx={{
                                textTransform: 'uppercase',
                                fontSize: isSmallScreen ? '1.5rem' : isMediumScreen ? '2rem' : '2.5rem',
                            }}
                        >
                            {title}
                        </Typography>
                    )}
                    {subtitle && (
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: isSmallScreen ? '1.1rem' : isMediumScreen ? '1.3rem' : '1.5rem',
                            }}
                        >
                            {subtitle}
                        </Typography>
                    )}
                </Box>
            )}
        </Box>
    );
};

export default Hero;
