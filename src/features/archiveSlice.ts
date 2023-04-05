import { createSlice } from "@reduxjs/toolkit";
import archiveData from "../data/archive.json";

export interface ArchiveItem {
    title: string;
    smallImageUrl: string;
    largeImageUrl: string;
}

interface ArchiveState {
    items: ArchiveItem[];
}

const initialState: ArchiveState = {
    items: archiveData,
};

export const archiveSlice = createSlice({
    name: "archive",
    initialState,
    reducers: {},
});

export default archiveSlice.reducer;