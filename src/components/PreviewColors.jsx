import React, { PureComponent } from "react";
import PreviewColorSingle from "./PreviewColorSingle";
import { getFromObject } from "../utils/getFromObject";

class PreviewColors extends PureComponent {
    render() {
        return (
            <section className={this.props.className}>
                <div className="preview__colors--color">
                    {getFromObject(this.props.colors, [
                        "brand",
                        "main",
                        "support"
                    ]).map(color => (
                        <PreviewColorSingle
                            color={color}
                            className="preview__color"
                            key={`preview-color-${color.name}`}
                        />
                    ))}
                </div>
                <div className="preview__colors--monochrome">
                    {getFromObject(this.props.colors, [
                        "black",
                        "gray",
                        "white"
                    ]).map(color => (
                        <PreviewColorSingle
                            color={color}
                            className="preview__monochrome"
                            key={`preview-monochrome-${color.name}`}
                        />
                    ))}
                </div>
                <div className="preview__colors--functional">
                    {getFromObject(this.props.colors, [
                        "success",
                        "alert",
                        "warn",
                        "info"
                    ]).map(color => (
                        <PreviewColorSingle
                            color={color}
                            className="preview__functional"
                            key={`preview-functional-${color.name}`}
                        />
                    ))}
                </div>
            </section>
        );
    }
}

export { PreviewColors };
