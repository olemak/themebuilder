import React, { Component } from 'react';

class Typography extends Component {
    render() {
        return (
            <div className="Typography">
                <h3 className="typography__header">Typography</h3>

                <h3 className="typography__headers">Headers</h3>
                <h3>H1</h3><h1>The fearsome Tarrasque</h1>
                <h3 className="typography__body">Body</h3>
                <p className="typography__paragraph">Paragraph</p>
                <small className="typography__paragraph">Small</small>
            </div>
        );
    }
}

export default Typography;