/*
 * action types
 */
export const CHANGE_COLOR = 'CHANGE_COLOR'

// #region Action Creators

export function changeColor(index, variation, value) {
    return { type: CHANGE_COLOR, index, variation, value }
}

// #endregion