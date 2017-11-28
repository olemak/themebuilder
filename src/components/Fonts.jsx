import React, { Component } from 'react';

import './fonts.css';

class Fonts extends Component {
    state = {
        mainFont: {
            family:     "Select you main font",
            variants:   ["regular"],
            files:      {"regular": "http://themes.googleusercontent.com/static/fonts/antic/v4/hEa8XCNM7tXGzD0Uk0AipA.ttf"}
        },
        supportFont: {
            family:     "Optional support font",
            variants:   [],
        },
        activateSupportFont: false,
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
        let selectedFont = this.state.googleFontList.find(font=>font.family === event.target.value);
        if (selectedFont) {
            this.setState({[event.target.name]: selectedFont});
        }
    }

    fontVariantSelect = event => {
        console.dir(event.target);
        console.log(event.target.name, event.target.value, event.target.checked);

        // TODO: set included variants in state on respective font.

    }

    render() {
        return (
            <div className="Fonts">
                <p>Tip: You must know your fonts. Use <a href="//google.fonts/">Google Fonts</a> for details on the available fonts.</p>
                <datalist id="googleFonts" >
                    {this.state.googleFontList.map(font=><option value={font.family} key={font.family}/>)}
                </datalist>
                
                <div className="font font--main">                        
                    <h3>Main Font</h3>
                        <input list="googleFonts" onInput={this.fontSelect} name="mainFont" />                    
                        <div className="font__details">
                            <h4>{this.state.mainFont.family}</h4>
                            <h5>Select Variants</h5>
                            {this.state.mainFont.variants.map(variant=><div className="font-variant__wrapper" key={`main-font-${variant}`}>
                                <input className="font-variant__input" type="checkbox" onChange={this.fontVariantSelect} name="mainFont" value={variant} />
                                <p className="font-variant__example">{variant}</p>
                                </div>)}
                        </div>
                </div>

                <input type="checkbox" className="font__add--support" onChange={()=>{this.setState({activateSupportFont: !this.state.activateSupportFont})}}/>
                {this.state.activateSupportFont ? <div className="font font--support">
                    <h3>Support Font</h3>
                    <input list="googleFonts" onInput={this.fontSelect} name="supportFont" />                    
                        <div className="font__details">
                            <h4>{this.state.supportFont.family}</h4>
                            <h5>Select Variants</h5>
                            {this.state.supportFont.variants.map(variant=><div className="font-variant__wrapper" key={`support-font-${variant}`}>
                                <input className="font-variant__input" type="checkbox" onChange={this.fontVariantSelect} name="supportFont" value={variant} />
                                <p className="font-variant__example">{variant}</p>
                            </div>)}
                        </div>
                </div>:""}
            </div>
        );
    }
}

export default Fonts;