// GoogleAnalytics.tsx
import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface GoogleAnalyticsProps {
    children: React.ReactNode;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        if (typeof window.gtag !== 'function') {
            return;
        }

        window.gtag('config', 'G-LHL88P22DZ', {
            page_path: location.pathname + location.search,
        });
    }, [location]);

    return <>{children}</>;
};

export default GoogleAnalytics;
