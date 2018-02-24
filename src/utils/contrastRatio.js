function hexToRgb(hex) {
    if (hex.charAt(0) === "#") {
        hex = hex.slice(1);
    }

    const splitValues = hex.substring(0).split("");
    const red = splitValues[0] + splitValues[1];
    const green = splitValues[2] + splitValues[3];
    const blue = splitValues[4] + splitValues[5];
    const rgbArray = [
        parseInt(red, 16),
        parseInt(green, 16),
        parseInt(blue, 16)
    ];

    return rgbArray;
}

function luminance(rgb) {
    const a = rgb.map(colorValue => {
        colorValue /= 255;
        return colorValue <= 0.03928
            ? colorValue / 12.92
            : Math.pow((colorValue + 0.055) / 1.055, 2.4);
    });
    const lum = a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    return lum;
}

function contrast(mainRGB, contrastRGB) {
    var contrastRatio =
        (luminance(mainRGB, mainRGB, mainRGB) + 0.05) /
        (luminance(contrastRGB, contrastRGB, contrastRGB) + 0.05);
    if (contrastRatio < 1) contrastRatio = 1 / contrastRatio;
    return contrastRatio;
}

function getContrast(mainHex, contrastHex) {
    const contrastValue = parseFloat(
        contrast(hexToRgb(mainHex), hexToRgb(contrastHex)).toFixed(2)
    );
    return contrastValue;
}

export { hexToRgb, luminance, contrast, getContrast };
