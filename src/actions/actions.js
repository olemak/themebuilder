// #region Action Types
export const CHANGE_COLOR = "CHANGE_COLOR";
export const CHANGE_ASPECT = "CHANGE_ASPECT";
export const CHANGE_FONT = "CHANGE_FONT";
export const TOGGLE_FONT_VARIATION = "TOGGLE_FONT_VARIATION";
export const CHANGE_BREAKPOINT = "CHANGE_BREAKPOINT";
export const CHANGE_SPACING = "CHANGE_SPACING";
export const CHANGE_SIZE = "CHANGE_SIZE";
export const CHANGE_PRESET = "CHANGE_PRESET";
// #endregion

// #region Action Creators
export function changeColor(colorName, variation, colorValue) {
    return { type: CHANGE_COLOR, colorName, variation, colorValue };
}

export function changeAspect(name, ratio) {
    return { type: CHANGE_ASPECT, name, ratio };
}

export function changeFont(name, font) {
    return { type: CHANGE_FONT, name, font };
}

export function toggleFontVariation(name, variation) {
    return { type: TOGGLE_FONT_VARIATION, name, variation };
}

export function changeBreakpoint(index, name, value) {
    return { type: CHANGE_BREAKPOINT, index, name, value };
}

export function changeSpacing(name, value) {
    return { type: CHANGE_SPACING, name, value };
}

export function changeSize(name, value) {
    return { type: CHANGE_SIZE, name, value };
}

export function changePreset(presetName, parameterName, value) {
    return { type: CHANGE_PRESET, presetName, parameterName, value };
}

// #endregion
