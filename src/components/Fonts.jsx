import React, { Component } from 'react';
import WebFont from 'webfontloader';

import './fonts.css';
import './fonts-and-typography.scss';

class Fonts extends Component {
    state = {
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
            this.props.changeFont(event.target.name, selectedFont);
        }
    }

    fontVariantSelect = event => {
        this.props.toggleFontVariation(event.target.name, event.target.value)
    }

    componentWillReceiveProps(nextProps) {
        // eslint-disable-next-line
        if (nextProps.fonts && nextProps.fonts.main.family !== this.props.fonts.main.family || nextProps.fonts.support.family !== this.props.fonts.support.family ) {
            const mainOrSupport = (nextProps.fonts.main.family !== this.props.fonts.main.family) ? "main" : "support";

            WebFont.load({
                google: {
                  families: [nextProps.fonts[mainOrSupport].family]
                }
              });

        }
    }

    render() {
        return (
            <section className="fonts-and-typography">
                <div className="Fonts">
                    <p>Tip: You must know your fonts. Use <a href="//google.fonts/">Google Fonts</a> for details on the available fonts.</p>
                    <datalist id="googleFonts" >
                        {this.state.googleFontList.map(font=><option value={font.family} key={font.family} />)}
                    </datalist>
                    
                    <div className="font font--main">                        
                        <h3>Main Font</h3>
                            <input list="googleFonts" onInput={this.fontSelect} name="main" />                    
                            <div className="font__details">
                                <h4 style={{fontFamily: `${this.props.fonts.main.family}, Comfortaa, sans-serif`}}>{this.props.fonts.main.family}</h4>
                                <h5>Select Variants</h5>
                                {this.props.fonts.main.variants.map(variant=><div className="font-variant__wrapper" key={`main-font-${variant}`}>
                                    <input className="font-variant__input" type="checkbox" onChange={this.fontVariantSelect} name="main" value={variant} checked={(this.props.fonts.main.selectedVariants.indexOf(variant) > -1)}/>
                                    <p className="font-variant__example" style={{fontFamily: this.props.fonts.main.family, fontWeight: variant}}>{variant}</p>
                                    </div>)}
                            </div>
                    </div>

                    <input type="checkbox" id="showSupport" className="font__add--support" onChange={()=>{this.setState({activateSupportFont: !this.state.activateSupportFont})}}/>
                    <label htmlFor="showSupport">Show support font</label>
                    {this.state.activateSupportFont ? <div className="font font--support">
                        <h3>Support Font</h3>
                        <input list="googleFonts" onInput={this.fontSelect} name="support" />                    
                            <div className="font__details">
                                <h4 style={{fontFamily: `${this.props.fonts.support.family}, Comfortaa, sans-serif`}}>{this.props.fonts.support.family}</h4>
                                <h5>Select Variants</h5>
                                {this.props.fonts.support.variants.map(variant=><div className="font-variant__wrapper" key={`support-font-${variant}`}>
                                    <input className="font-variant__input" type="checkbox" onChange={this.fontVariantSelect} name="support" value={variant} />
                                    <p className="font-variant__example">{variant}</p>
                                </div>)}
                            </div>
                    </div>:""}
                </div>
            </section>
        );
    }
}

export default Fonts;