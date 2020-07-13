import { LIST_GET, LIST_ABILITY_GET, DETAIL_HOME_GET } from '../actions/types';

const initialState = {
  home: [],
  listAbility: [],
  detailHome: [],
};

export default function(state = initialState, action) {
  switch (action.type) {

    case LIST_GET:
      return {
        home: action.payload
      };

    case LIST_ABILITY_GET:
      return {
        listAbility: action.payload
      };
      
    case DETAIL_HOME_GET:
      return {
        detailHome: action.payload
      };
   
    default:
    return state
  }
}