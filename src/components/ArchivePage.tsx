// ArchivePage.tsx
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { RootState } from "../store/rootReducer";
import { ArchiveItem } from '../features/archiveSlice'; // Import ArchiveItem from archiveSlice
import { Box, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button, useMediaQuery, Theme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Hero from './Hero';

const ArchivePage: React.FC = () => {
    const archive = useSelector((state: RootState) => state.archive.items);

    const [selectedImage, setSelectedImage] = useState<ArchiveItem | null>(null);

    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

    const openImageDialog = (image: ArchiveItem) => {
        setSelectedImage(image);
    };

    const closeImageDialog = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <Helmet>
                <title>Archive | Metal Gates Festival</title>
                <meta name="description" content="Check out the last editions!" />
            </Helmet>
            <Hero
                title="Archive"
                subtitle="Check out the last editions!"
                image="/images/hero/hero-archive.jpg"
            />
            <Grid container spacing={4}>
                {archive.map((image, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Box onClick={() => openImageDialog(image)}>
                            <img src={`/images/archive/${image.smallImageUrl}`} alt={image.title} style={{ width: '100%', cursor: 'pointer' }} />
                            <Typography variant="subtitle1" align="center">
                                {image.title}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {selectedImage && !isSmallScreen && (
                <Dialog open={Boolean(selectedImage)} onClose={closeImageDialog} maxWidth="sm" fullWidth>
                    <DialogTitle>
                        METAL GATES FESTIVAL - {selectedImage.title}
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={closeImageDialog}
                            sx={{
                                position: 'absolute',
                                right: (theme) => theme.spacing(1),
                                top: (theme) => theme.spacing(1),
                                marginRight: 0
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <img src={`/images/archive/${selectedImage.largeImageUrl}`} alt={selectedImage.title} style={{ width: '100%' }} />
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
};

export default ArchivePage;
