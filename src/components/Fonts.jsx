import React, { Component } from 'react';

class Fonts extends Component {
    state = {
        selectedFonts: [],
        googleFontList: [
            {family: ""}
        ]
    }
    
    componentDidMount = () => {
        let GoogleFontsRequest = new Request ("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAu6iNE9RBHkTp9eEPKk61ua0meOwb--Ps")
        fetch(GoogleFontsRequest)
        .then(response=>response.json())
        .then( data =>{
            this.setState({ googleFontList: data.items })
        })
    }
    
    fontSelect = ( event ) => {
        if (this.state.googleFontList.find(font=>font.family === event.target.value)) {
            console.log(event.target.value);
            //DO THINGS ON FONT SELECTION HERE
        }
    }

    render() {
        return (
            <div className="Fonts">
                <h3 className="fonts__header">Fonts</h3>
                <input list="googleFonts" onInput={this.fontSelect} name="font" />
                <datalist id="googleFonts" >
                  {this.state.googleFontList.map(font=><option value={font.family} key={font.family}/>)}
                </datalist>
            </div>
        );
    }
}

export default Fonts;