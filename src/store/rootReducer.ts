import { combineReducers } from "@reduxjs/toolkit";
import menuReducer from "../features/menuSlice";
import newsReducer from "../features/newsSlice";
import bandsReducer from '../features/bandsSlice';
import archiveReducer from '../features/archiveSlice';
import contactReducer from '../features/contactSlice';

const rootReducer = combineReducers({
    menu: menuReducer,
    news: newsReducer,
    bands: bandsReducer,
    archive: archiveReducer,
    contact: contactReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
export { };