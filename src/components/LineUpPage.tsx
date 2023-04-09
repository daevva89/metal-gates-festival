import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { Grid, Container, CircularProgress } from '@mui/material';
import { Band } from '../features/bandsSlice';
import Hero from './Hero';

const BandCard = lazy(() => import('./BandCard'));

const LineUpPage: React.FC = () => {
    const bands = useSelector((state: RootState) => state.bands.bands);

    return (
        <>
            <Hero title={'Meet The Bands'} />
            <Container>
                <Grid container spacing={4}>
                    <React.Suspense
                        fallback={
                            <Grid container justifyContent="center">
                                <CircularProgress />
                            </Grid>
                        }
                    >
                        {bands.map((band: Band) => (
                            <Grid key={band.id} item xs={12} sm={6} md={4}>
                                <BandCard band={band} />
                            </Grid>
                        ))}
                    </React.Suspense>
                </Grid>
            </Container>
        </>
    );
};

export default LineUpPage;
