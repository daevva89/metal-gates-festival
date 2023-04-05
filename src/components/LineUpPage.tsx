import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { Grid, Container } from '@mui/material';
import BandCard from './BandCard';
import { Band } from '../features/bandsSlice';
import Hero from "./Hero";

const LineUpPage: React.FC = () => {
    const bands = useSelector((state: RootState) => state.bands.bands);

    return (
        <>
            <Hero
                title={"Meet The Bands"}
            />
            <Grid container spacing={4}>
                {bands.map((band: Band) => (
                    <Grid key={band.id} item xs={12} sm={6} md={4}>
                        <BandCard band={band} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default LineUpPage;