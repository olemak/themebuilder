import React, { Component } from 'react';

import theme from '../theme.json';

class ThemeColors extends Component {

    themeColors(){
        let colors = [];
        for (let color in theme.colors) {
            let colorClasses = `color__${color}`;
            let variants = Object.keys(theme.colors[color]);
            colors.push(<section className="color story--color" key={colorClasses}>
                <h3>{color}</h3>
                <div className={`color color__${color}`}>
                </div>

                {variants.map(variant => <div className={`story__color--${variant}`}>
                    <span className={ colorClasses + '--' + variant }>
                        {variant}
                    </span>
                    <div className={ 'background-color__' + color + '--' + variant }>
                        {variant}
                    </div>
                    </div>
                )}

            </section>)
        }
        return colors;
    }

    render() {
        return (
            <div>
                <h2>Theme Colors</h2>
                <p></p>
                {this.themeColors()}
            </div>
        );
    }
}

export default ThemeColors;