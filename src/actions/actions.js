// #region Action Types
export const CHANGE_COLOR = 'CHANGE_COLOR'
export const CHANGE_ASPECT = 'CHANGE_ASPECT'
export const CHANGE_FONT = 'CHANGE_FONT'
export const CHANGE_BREAKPOINT = 'CHANGE_BREAKPOINT'
// #endregion


// #region Action Creators
export function changeColor(index, variation, value) {
    return { type: CHANGE_COLOR, index, variation, value }
}

export function changeAspect(name, ratio) {
    return { type: CHANGE_ASPECT, name, ratio }
}

export function changeFont(name, family, font) {
    return { type: CHANGE_FONT, name, family, font }
}

export function changeBreakpoint(index, name, value) {
    return { type: CHANGE_BREAKPOINT, index, name, value }
}

// #endregion