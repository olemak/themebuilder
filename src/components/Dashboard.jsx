import React, { Component } from 'react';
import ReactJson from 'react-json-view';

class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">
                <h3 className="Dashboard__header">Dashboard</h3>

                <h5>Current theme variables</h5>
                <ReactJson src={this.props.state} collapsed={true}/>

                <button disabled>Download JSON<br />Download theme variables in JSON file format</button>
                <button disabled>Save<br />Save to theme.json file in project root directory.</button>
                <button disabled>Remember<br />Store current vaiables to localstorage</button>
                

            </div>
        );
    }
}

export default Dashboard;