const initialUserState = {
  username: '',
  email: '',
  dateOfBirth: '',
  address: '',
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
