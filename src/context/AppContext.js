import React, { createContext, useReducer } from 'react';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';
import { boughtsReducer } from './boughtsReducer';
import { favoritesReducer } from './favoritesReducer'; // Reducer de favoritos

// Creamos el contexto
const AppContext = createContext();

// Estado inicial
const initialState = {
    user: {
        username: '',
        email: '',
        dateOfBirth: '',
        address: '',
        photo: null,
    },
    cart: {
        cartItems: [],
        total: 0,
        selectedItems: [],
    },
    boughts: {
        boughtItems: [] // Cambiado para mantener consistencia
    },
    favorites: {
        favoritesItems: [] // Usamos el mismo nombre que en el reducer
    }
};

// Reducer principal
const appReducer = (state, action) => ({
    user: userReducer(state.user, action),
    cart: cartReducer(state.cart, action),
    boughts: boughtsReducer(state.boughts, action),
    favorites: favoritesReducer(state.favorites, action), // Reducer de favoritos
});

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
