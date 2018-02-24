import React, { Component } from "react";
import ReactJson from "react-json-view";

class Dashboard extends Component {
    downloadJSON(themevariables) {
        let element = document.createElement("a");
        element.setAttribute(
            "href",
            "data:text/plain;charset=utf-8," +
                encodeURIComponent(JSON.stringify(themevariables))
        );
        element.setAttribute("download", "theme.json");
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();

        document.body.removeChild(element);
    }

    render() {
        return (
            <div className="Dashboard">
                <h3 className="Dashboard__header">Dashboard</h3>
                <h5>Current theme variables</h5>
                <ReactJson src={this.props.state} collapsed={true} />

                <br />

                <button
                    onClick={() => {
                        this.downloadJSON(this.props.state);
                    }}
                >
                    Download JSON<br />Download theme variables in JSON file
                    format
                </button>

                {/*
                <button disabled>Save<br />Save to theme.json file in project root directory.</button>
                <button disabled>Remember<br />Store current vaiables to localstorage</button>
                */}
            </div>
        );
    }
}

export default Dashboard;
