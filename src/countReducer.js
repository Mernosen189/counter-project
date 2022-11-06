import {
    Increment_Count,
    Decrement_Count,
    Reset_Count,
    Add_Value,
    Reduce_Value,
  } from "./Type";
  
  export const initialState = {
    number: 0,
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case Increment_Count:
        return {
          ...state,
          number: state.number + 1,
        };
  
      case Decrement_Count:
        return {
          ...state,
          number: state.number - 1,
        };
      case Reset_Count:
        return {
          number: 0,
        };
      case Add_Value:
        return {
          ...state,
          number: state.number + action.payload,
        };
      case Reduce_Value:
        return {
          ...state,
          number: state.number - action.payload,
        };
    }
  };