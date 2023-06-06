// Initial State
const initialState = {
    counter: 0,
  };
  
  // Redux: Counter Reducer
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT': {
        return {
          ...state,
          counter: state.counter + 1,
        };
      }
      case 'DECREMENT': {
        return {
          ...state,
          counter: state.counter - 1,
        };
      }
      default: {
        return state;
      }
    }
  };
  
  // Exports
  export default counterReducer;