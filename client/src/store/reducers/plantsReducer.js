const initialState = {
  loading: false,
  plantsList: [],
  error: null
};

const plantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PLANTS_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'FETCH_PLANTS_SUCCESS':
      return {
        ...state,
        loading: false,
        plantsList: action.payload,
        error: null
      };

    case 'FETCH_PLANTS_FAILURE':
      return {
        ...state,
        loading: false,
        plantsList: [],
        error: action.payload
      };

    default:
      return state;
  }
};

export default plantsReducer;