import invertColor from "./invertColor";
import shadeColor from "./shadeColor";

function handleColorChange (colorName, colorVariant, colorValue) {
    this.setState({editing: false});

    let newColorState = this.state.colors;    
    const index = newColorState.findIndex(color=>(color.name === colorName));
    let tempColor = newColorState[index];
        tempColor[colorVariant] = colorValue;

    if (colorVariant === "main") {
        tempColor.contrast = invertColor(colorValue);
        tempColor.light = shadeColor(colorValue, 25);
        tempColor.dark = shadeColor(colorValue, -25);
    }

    newColorState.splice(index, 1, tempColor);

    this.setState({colors: newColorState});
}

export default handleColorChange;