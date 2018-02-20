import presetInfo from '../data/presetInfo.json';

let defaultTypography = {};
for (let preset in presetInfo) {
    Object.assign(defaultTypography, {
        [presetInfo[preset].id]: { ...presetInfo[preset].default }
    })
}

export { defaultTypography};