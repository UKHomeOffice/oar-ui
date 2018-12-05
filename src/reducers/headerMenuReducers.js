import { HEADER_MENU_SELECTED } from '../actions/types';

const initialState = {
    headerMenuSelected: '',
};

export default function(state = initialState, action){
   switch(action.type) {
      case HEADER_MENU_SELECTED:
        return {
            state,
            menuItem: action.payload
        };
        default:
        return state;

   }
}

