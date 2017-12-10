import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  STORE_COLOR,
  storeColor
} from '../actions/actions'

import defaultColors from '../data/defaultColors'

const { SHOW_ALL } = VisibilityFilters

function colors (state = defaultColors, action) {
    switch (action.type) {
        case STORE_COLOR: 
            //       be smart and return correctly set color state!
            return state.map((color, index) => {
                if (index === action.index) {
                return Object.assign({}, color, {
                    [color.variation]: color.value
                })
                }
                return color
            })

        default:
        return state
    }
}



function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const painlecss = combineReducers({
  colors
})

export default painlecss