const initialBoughtState = {
    boughtsItems: []
};

export const boughtsReducer = (state = initialBoughtState, action) => {
    switch (action.type) {
        case 'ADD_TO_BOUGHTS_HISTORY':
            return {
                ...state,
                boughtsItems: [...state.boughtsItems, ...action.payload], 
            };
        default:
            return state;
    }
};

export default boughtsReducer;
