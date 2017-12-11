import { combineReducers } from 'redux'
import {
  CHANGE_COLOR
} from '../actions/actions'

import defaultColors from '../data/defaultColors'

function colors (state = defaultColors, action) {
    switch (action.type) {
        case CHANGE_COLOR: 
            //       be smart and return correctly set color state!
            return state.map((color, index) => {
                if (index === action.index) {
                return Object.assign({}, color, {
                    [action.variation]: action.value
                });
                }
                return color;
            });

        default:
        return state
    }
}

const painlecss = combineReducers({
  colors
})

export default painlecss