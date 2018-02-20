import { combineReducers } from 'redux'
import {
  CHANGE_COLOR,
  CHANGE_ASPECT,
  CHANGE_FONT,
  TOGGLE_FONT_VARIATION,
  CHANGE_BREAKPOINT,
  CHANGE_SPACING,
  CHANGE_SIZE,
  CHANGE_PRESET
} from '../actions/actions'
import toggleInArray from '../utils/toggleInArray.js'


import defaultColors from '../data/defaultColors'
import defaultAspects from '../data/defaultAspects'
import defaultFonts from '../data/defaultFonts'
import defaultBreakpoints from '../data/defaultBreakpoints'
import defaultSpacing from '../data/defaultSpacing'
import defaultSizes from '../data/defaultSizes'
import { defaultTypography } from '../data/defaultTypography.js';

function aspects(state = defaultAspects, action) {
    switch (action.type) {
        case CHANGE_ASPECT:         
            return Object.assign({}, state, {
                [action.name]: action.ratio
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
                [action.name]:  Object.assign({}, state[action.name], {
                    family: action.font.family,
                    variants: action.font.variants,
                    selectedVariants: ["regular"]
                })
            });
    
        case TOGGLE_FONT_VARIATION: 
        return Object.assign({}, state, {
            [action.name]:  Object.assign({}, state[action.name], {
                  selectedVariants: toggleInArray(state[action.name].selectedVariants, action.variation)
            })
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

function sizes (state = defaultSizes, action) {
    switch (action.type) {
        case CHANGE_SIZE:
            return Object.assign({}, state, {
                [action.name]: action.value 
            })
        default:
            return state;
    }
}

function typography (state = defaultTypography, action) {
    switch (action.type) {
        case CHANGE_PRESET:
            return Object.assign({}, state[action.name], {
                [action.propertyName]: action.value 
            })
        default:
            return state;
    }
}


const themebuilder = combineReducers({
  aspects, colors, fonts, breakpoints, spacing, sizes, typography
})

export default themebuilder