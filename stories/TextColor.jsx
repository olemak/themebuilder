import React, { Component } from 'react';

import theme from '../theme.json';

class TextColor extends Component {
    
    themeTextColors() {
        let textColors = [];
        for (let color in theme.colors) {
            textColors.push(<section className="text">
            <p className={`text text--${color}`}>
                {`.text .text--${color}`}<br />
                {`${color} color on neutral background`}
            </p>

            <p className={`text text--${color} text__background--contrast`}>
                {`.text .text--${color} .text__background--contrast`}<br />
                {`${color} color on contrast background`}
            </p>
        </section>)
        }
        return textColors;
    }
        
    render() {
        return (
            <div>
                {this.themeTextColors()}
            </div>
        )
    }
}

export default TextColor;