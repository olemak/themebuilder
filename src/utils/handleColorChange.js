function handleColorChange (colorName, colorVariant, colorValue) {
    this.setState({editing: false});

    let newColorState = this.state.colors;    
    const index = newColorState.findIndex(color=>(color.name === colorName));
    let tempColor = newColorState[index];
        tempColor[colorVariant] = colorValue;

    newColorState.splice(index, 1, tempColor);

    this.setState({colors: newColorState});
}

export default handleColorChange;