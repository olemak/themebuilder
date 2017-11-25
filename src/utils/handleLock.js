function handleLock (colorName, variation) {
    let newState = this.state.colors;    
    const index = newState.findIndex(color=>(color.name === colorName));
    let tempColor = newState[index];
    let variationIndexInLocked = tempColor.locked.indexOf(variation);

    variationIndexInLocked < 0 
      ? tempColor.locked.push(variation) 
      : tempColor.locked.splice(variationIndexInLocked, 1)
    newState.splice(index, 1, tempColor);

    this.setState({colors: newState});
}

export default handleLock;