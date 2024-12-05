import React, { createContext, useReducer,useEffect } from 'react';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';
import { boughtsReducer } from './boughtsReducer';
import favoritesReducer from './favoritesReducer';
import firestore from '@react-native-firebase/firestore';

const AppContext = createContext();

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
        boughtItems: []
    },
    favorites: {
        favoritesItems: []
    }
};

const appReducer = (state, action) => ({
    user: userReducer(state.user, action),
    cart: cartReducer(state.cart, action),
    boughts: boughtsReducer(state.boughts, action),
    favorites: favoritesReducer(state.favorites, action),
});

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    useEffect(() => {
        const unsubscribe = firestore().collection('favorites').onSnapshot(snapshot => {
            const favorites = snapshot.docs.map(doc => doc.data());
            dispatch({ type: 'SYNC_FAVORITES', payload: favorites });
        });

        return () => unsubscribe(); // Cleanup listener
    }, []);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
