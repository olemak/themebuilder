import React, { Component } from 'react';

class Fonts extends Component {
    state = {
        selectedFonts: [{
            family:     "Antic",
            variants:   ["regular"],
            subsets:    ["latin"],
            files:      {"regular": "http://themes.googleusercontent.com/static/fonts/antic/v4/hEa8XCNM7tXGzD0Uk0AipA.ttf"}
        }],
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
        let newSelectedFont = this.state.googleFontList.find(font=>font.family === event.target.value); 
        
        //DO THINGS ON FONT SELECTION HERE
        if (newSelectedFont) {
            let previouslySelectedFonts = this.state.selectedFonts;
                previouslySelectedFonts.splice(event.target.id, 1, newSelectedFont);
            this.setState({selectedFonts: previouslySelectedFonts});
        }

    }

    render() {
        return (
            <div className="Fonts">
                <h4 className="fonts__header">Select fonts</h4>
                <p>You must know what font you want. Check <a href="//google.fonts/">Google Fonts</a> for details on available fonts.</p>
                <datalist id="googleFonts" >
                    {this.state.googleFontList.map(font=><option value={font.family} key={font.family}/>)}
                </datalist>
                
                {this.state.selectedFonts.map((font, i)=><div key={`font-input-${i}`}>
                    <input list="googleFonts" onInput={this.fontSelect} id={i} name="font" />
                    <div className="font__details">
                        <h4>{font.family}</h4>
                        <h5>Select Variants</h5>
                        {font.variants.map(variant=><p key={`${font.family}-${variant}`}>{variant}</p>)}
                    </div>
                </div>)}
            </div>
        );
    }
}

export default Fonts;