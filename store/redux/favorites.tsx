import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface FavoritesState {
    ids: number[]; 
}


const initialState: FavoritesState = {
    ids: [],
};

// Define the slice
const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<{id : number}>) => {
            state.ids.push(action.payload.id);

        },
        removeFavorite: (state, action: PayloadAction<{id : number}>) => {
            const index = state.ids.indexOf(action.payload.id);
            if (index !== -1) {
                state.ids.splice(index, 1);
            }
        }
    }
});


export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;


