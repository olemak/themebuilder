import React, { Component } from 'react';

export class Grid extends Component {

    render(){
        return <div>
            <h3>Grid</h3>
            <div className="grid--default">
                <div className="grid__cell grid__cell--column-6 grid__cell--row-3">
                    .grid__cell<br />
                    .grid__cell--column-6<br />
                    .grid__cell--row-3
                </div>
                <div className="grid__cell grid__cell--column-right grid__cell--row-top">
                    .grid__cell<br />
                    .grid__cell--column-right<br />
                    .grid__cell--row-top
                </div>
            </div>        
        </div>
    }
}

// export default Grid;