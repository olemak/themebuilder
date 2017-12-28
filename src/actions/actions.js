// #region Action Types
export const CHANGE_COLOR = 'CHANGE_COLOR'
export const CHANGE_ASPECT = 'CHANGE_ASPECT'
export const CHANGE_FONT = 'CHANGE_FONT'
export const CHANGE_BREAKPOINT = 'CHANGE_BREAKPOINT'
// #endregion


// #region Action Creators
export function changeColor(colorName, variation, colorValue) {
    return { type: CHANGE_COLOR, colorName, variation, colorValue }
}

export function changeAspect(name, ratio) {
    return { type: CHANGE_ASPECT, name, ratio }
}

export function changeFont(name, font) {
    return { type: CHANGE_FONT, name, font }
}

export function changeBreakpoint(index, name, value) {
    return { type: CHANGE_BREAKPOINT, index, name, value }
}

// #endregion