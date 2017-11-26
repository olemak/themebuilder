import invertColor from './invertColor';
import shadeColor from './shadeColor';

function addColor () {
    const newColorValue = "#333333";
    const newColor = {
        name: "color_" + (this.state.colors.length + 1),
        main: newColorValue,
        contrast: invertColor(newColorValue),
        light: shadeColor(newColorValue, 25),
        dark: shadeColor(newColorValue, -25),
    };
    let colors = this.state.colors;
        colors.push(newColor);
    this.setState({colors: colors})
}

export default addColor; 