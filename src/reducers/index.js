import { combineReducers } from 'redux';

import home from './homeReducer';
import listAbility from './homeReducer';
import detailHome from './homeReducer';

export default combineReducers({
    home: home,
    listAbility: listAbility,
    detailHome: detailHome,
});