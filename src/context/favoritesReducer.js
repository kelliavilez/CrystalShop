// Estado inicial de favoritos
const initialFavoritesState = {
    favoritesItems: [],
};

// Reducer de favoritos
export const favoritesReducer = (state = initialFavoritesState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            const exists = state.favoritesItems.some(item => item.id === action.payload.id);
            if (exists) {
                return state; // Si el artículo ya existe, no lo agregamos de nuevo
            }
            return {
                ...state,
                favoritesItems: [...state.favoritesItems, action.payload], // Agregamos el nuevo artículo a la lista
            };

        default:
            return state;
    }
};

