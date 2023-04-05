import { createSlice } from "@reduxjs/toolkit";
import newsData from "../data/news.json";

export interface NewsItem {
    id: number;
    date: string;
    image: string;
    title: string;
    content: string;
}

interface NewsState {
    items: NewsItem[];
}

const initialState: NewsState = {
    items: newsData,
};

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
});

export default newsSlice.reducer;