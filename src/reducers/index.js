import {combineReducers} from 'redux';
import headerMenuReducers from './headerMenuReducers';

export default combineReducers({
    headerMenu: headerMenuReducers
});
