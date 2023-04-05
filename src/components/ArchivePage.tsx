// ArchivePage.tsx
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { ArchiveItem } from '../features/archiveSlice'; // Import ArchiveItem from archiveSlice
import { Box, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import Hero from './Hero';

const ArchivePage: React.FC = () => {
    const archive = useSelector((state: RootState) => state.archive.items);

    const [selectedImage, setSelectedImage] = useState<ArchiveItem | null>(null);

    const openImageDialog = (image: ArchiveItem) => {
        setSelectedImage(image);
    };

    const closeImageDialog = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <Hero title="Archive" subtitle="Browse our archive" />
            <Grid container spacing={4}>
                {archive.map((image, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Box onClick={() => openImageDialog(image)}>
                            <img src={image.smallImageUrl} alt={image.title} style={{ width: '100%', cursor: 'pointer' }} />
                            <Typography variant="subtitle1" align="center">
                                {image.title}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {selectedImage && (
                <Dialog open={Boolean(selectedImage)} onClose={closeImageDialog} maxWidth="md" fullWidth>
                    <DialogTitle>{selectedImage.title}</DialogTitle>
                    <DialogContent>
                        <img src={selectedImage.largeImageUrl} alt={selectedImage.title} style={{ width: '100%' }} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeImageDialog} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </>
    );
};

export default ArchivePage;
