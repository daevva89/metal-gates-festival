import React from 'react';
import { Box, Typography, IconButton, Link, Theme, useTheme, Container } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterStyles = styled(Box)(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    marginTop: '32px',
    '& .MuiTypography-root': {
        color: '#fff',
    },
    '& .MuiIconButton-root': {
        color: '#fff',
    },
}));

const Footer: React.FC = () => {
    const theme = useTheme();
    return (
        <FooterStyles theme={theme}>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body1">Created by Mihu</Typography>
                    <Box>
                        <IconButton
                            component={Link}
                            href="https://www.facebook.com/metalgatesfestival/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton
                            component={Link}
                            href="https://www.instagram.com/metalgatesfestival/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <InstagramIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </FooterStyles>
    );
};

export default Footer;
export { };