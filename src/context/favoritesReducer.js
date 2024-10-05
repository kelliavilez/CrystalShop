const initialFavoritesState = {
    favoritesItems: [],
};

const favoritesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            const isFavorite = state.favoritesItems.some(item => item.id === action.payload.id);
            if (isFavorite) {
                return state;
            }
            return {
                ...state,
                favoritesItems: [...state.favoritesItems, action.payload],
            };
        case 'REMOVE_FROM_FAVORITES':
            return {
                ...state,
                favoritesItems: state.favoritesItems.filter(item => item.id !== action.payload.id),
            };
        default:
            return state;
    }
};

export default favoritesReducer;




