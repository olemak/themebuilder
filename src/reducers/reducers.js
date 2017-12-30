import { combineReducers } from 'redux'
import {
  CHANGE_COLOR,
  CHANGE_ASPECT,
  CHANGE_FONT,
  CHANGE_BREAKPOINT,
  CHANGE_SPACING
} from '../actions/actions'

import defaultColors from '../data/defaultColors'
import defaultAspects from '../data/defaultAspects'
import defaultFonts from '../data/defaultFonts'
import defaultBreakpoints from '../data/defaultBreakpoints'
import defaultSpacing from '../data/defaultSpacing'

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
            return Object.assign({}, state, {
                [action.colorName]:  Object.assign({}, state[action.colorName], {
                    [action.variation]: action.colorValue
                }
            )});
        default:
            return state;
    }
}

function fonts (state = defaultFonts, action) {
    switch (action.type) {
        case CHANGE_FONT:
            return Object.assign({}, state, {
                [action.name]:  action.font
            });
        default:
            return state;
    }
}

function breakpoints (state = defaultBreakpoints, action) {
    switch (action.type) {
        case CHANGE_BREAKPOINT:
            return Object.assign({}, state, {
                [action.name]:  action.size
            });
        default:
            return state;
    }
}

function spacing (state = defaultSpacing, action) {
    switch (action.type) {
        case CHANGE_SPACING:
            return Object.assign({}, state, {
                [action.name]: action.value 
            })
        default:
            return state;
    }
}

const themebuilder = combineReducers({
  aspects, colors, fonts, breakpoints, spacing
})

export default themebuilder