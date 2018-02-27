function calculatedTextStyle(presetName, fonts, typography, sizes) {
    let weightString = typography[presetName].weight;
    let italicStartIndex = weightString.toString().search("italic");
    let isItalic = italicStartIndex > -1;

    let styleObject = {
        fontStyle: isItalic ? "italic" : "normal",
        fontWeight: isItalic
            ? weightString.slice(0, 3)
            : weightString === "regular" ? 400 : weightString,
        fontFamily: fonts[typography[presetName].font].family,
        fontSize: `${sizes[typography[presetName].size] * 100}%`,
        color: `var(--color-black-value)`
    };

    return styleObject;
}

export { calculatedTextStyle };
