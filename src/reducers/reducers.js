import { combineReducers } from 'redux'
import {
  CHANGE_COLOR,
  CHANGE_ASPECT
} from '../actions/actions'

import defaultColors from '../data/defaultColors'
import defaultAspects from '../data/defaultAspects'

function aspects(state = defaultAspects, action) {
    switch (action.type) {
        case CHANGE_ASPECT: 
        return state.map(aspect => {
            if (aspect.name === action.name) {
                    return Object.assign({}, aspect, {
                        ratio: action.ratio
                    });
                }
                return aspect;
            })
        default:
        return state
    }
}

function colors (state = defaultColors, action) {
    switch (action.type) {
        case CHANGE_COLOR: 
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
  aspects, colors
})

export default painlecss