// TicketsSection.tsx
import React from 'react';
import { Box, Button, Typography, Link } from '@mui/material';

const TicketsSection: React.FC = () => {
    return (
        <Box
            sx={{
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                py: 4,
                textAlign: 'center',
            }}
        >
            <Typography variant="h3" gutterBottom>
                Get Your Tickets Now!
            </Typography>
            <Typography variant="h6" gutterBottom>
                Don't miss out on the ultimate metal festival experience!
            </Typography>
            <Link href="https://metalgates.iabilet.ro" target="_blank" rel="noopener noreferrer" underline="none">
                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                >
                    Buy Tickets
                </Button>
            </Link>
        </Box>
    );
};

export default TicketsSection;
export { };