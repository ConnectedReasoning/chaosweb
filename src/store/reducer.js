import { 
  INIT_CHAOS,
  LOAD_CHAOS, 
  UPDATE_LOCAL_CHAOS,
} from './actionTypes';

const reducer  = (state = {}, action = {}) => { 
  switch (action.type) { 
    case INIT_CHAOS:
      return action.payload || {};
    case LOAD_CHAOS: 
      return action.payload || {}; 
    case UPDATE_LOCAL_CHAOS: 
      return action.payload || {};     
    default: 
      return state; 
  } 
};
export default reducer;