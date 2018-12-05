import { HEADER_MENU_SELECTED } from './types';

export const trackHeaderMenuChanges = menuItem => dispatch => {
        dispatch({
            type: HEADER_MENU_SELECTED,
            payload: menuItem
          })
};