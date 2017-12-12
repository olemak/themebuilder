// #region Action Types
export const CHANGE_COLOR = 'CHANGE_COLOR'
export const CHANGE_ASPECT = 'CHANGE_ASPECT'
// #endregion


// #region Action Creators
export function changeColor(index, variation, value) {
    return { type: CHANGE_COLOR, index, variation, value }
}

export function changeAspect(name, ratio) {
    return { type: CHANGE_ASPECT, name, ratio }
}

// #endregion