import { createSlice } from '@reduxjs/toolkit';
import bandsData from "../data/bands.json";

export interface Band {
    id: number;
    name: string;
    country: string;
    flags: string[];
    genre: string;
    smallImage: string;
    heroImage: string;
    description: string;
    youtubeId: string;
    spotifyUri?: string;
}

interface BandsState {
    bands: Band[];
}

const initialState: BandsState = {
    bands: bandsData,
};

export const bandsSlice = createSlice({
    name: 'bands',
    initialState,
    reducers: {},
});

export default bandsSlice.reducer;
export { };