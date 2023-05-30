import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Link, Box, Theme, useTheme, Drawer, Container } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { toggleMenu } from '../features/menuSlice';

const HeaderStyles = styled(AppBar)(({ theme }: { theme: Theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    '& .MuiToolbar-root': {
        display: 'flex',
        justifyContent: 'space-between',
    },
    '& .MuiTypography-root': {
        flexGrow: 1,
    },
    '& a': {
        color: 'inherit',
        textDecoration: 'none',
    },
}));

const navLinks = [
    { label: 'Line-up', href: '/line-up' },
    { label: 'Info', href: '/info' },
    { label: 'Archive', href: '/archive' },
    { label: 'Contact Us', href: '/contact' },
] as const;

const Header: React.FC = () => {
    const menuOpen = useSelector((state: RootState) => state.menu.open);
    const dispatch = useDispatch();
    const theme = useTheme();

    const handleMenuButtonClick = () => {
        dispatch(toggleMenu());
    };

    return (
        <>
            <HeaderStyles position="fixed" theme={theme}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Box display="flex" justifyContent="space-between" alignItems="center" flexGrow={1}>
                            <Box display={{ xs: 'block', sm: 'none' }}>
                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuButtonClick}>
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                            <RouterLink to="/" style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                                <img src={`/images/metal-gates-logo.png`} alt="Metal Gates Festival" style={{ maxHeight: '64px', objectFit: 'contain', cursor: 'pointer' }} />
                            </RouterLink>
                            <Box flexGrow={1}></Box>
                        </Box>
                        <Box display={{ xs: 'none', sm: 'block' }}>
                            {navLinks.map((link) => (
                                <Button color="inherit" key={link.href} component={RouterLink} to={link.href}>{link.label}</Button>
                            ))}
                            <Button color="secondary" variant="contained" component={RouterLink} to="/tickets">Tickets</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </HeaderStyles>
            <Drawer anchor="left" open={menuOpen} onClose={handleMenuButtonClick}>
                <Box sx={{ width: '100%', maxWidth: 360 }}>
                    <Box sx={{ padding: 2, position: 'relative', top: '64px' }}>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            {navLinks.map((link) => (
                                <Button color="inherit" key={link.href} component={RouterLink} to={link.href} onClick={handleMenuButtonClick}>{link.label}</Button>
                            ))}
                            <Button color="secondary" variant="contained" component={RouterLink} to="/tickets">Tickets</Button>
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
export { };
