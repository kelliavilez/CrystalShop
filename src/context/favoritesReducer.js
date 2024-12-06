
import firestore from '@react-native-firebase/firestore';

const favoritesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            const isFavorite = state.favoritesItems.some(item => item.id === action.payload.id);
            if (isFavorite) {
                return state;
            }
            // Agregar el artículo a Firestore
            firestore().collection('favorites').doc(action.payload.id.toString()).set(action.payload);

            return {
                ...state,
                favoritesItems: [...state.favoritesItems, action.payload],
            };

        case 'REMOVE_FROM_FAVORITES':
            // Eliminar el artículo de Firestore
            firestore().collection('favorites').doc(action.payload.id.toString()).delete();

            return {
                ...state,
                favoritesItems: state.favoritesItems.filter(item => item.id !== action.payload.id),
            };
            case 'SYNC_FAVORITES':
            return {
                ...state,
                favoritesItems: action.payload,  // Aquí estamos actualizando 'favoritesItems'
            };
        default:
            return state;
    }
};

export default favoritesReducer;
/*const initialFavoritesState = {
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
*/



