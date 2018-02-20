import presetInfo from '../data/presetInfo.json';

let defaultTypography = {};
//let presets = [];
for (let preset in presetInfo) {
//    presets.push(presetInfo[preset].id);
    Object.assign(defaultTypography, {
        [presetInfo[preset].id]: {
            font: "main",
            size: "medium",
            weight: "regular"
        }
})
}

export { defaultTypography};