import React, { PureComponent } from "react";

export class RootStyle extends PureComponent {
    css(colors) {
        const firstVariation = Object.values(colors)[0];
        let colorVariables = `
:root {
    ${Object.keys(colors).map(key =>
        Object.keys(firstVariation).map(
            variant => `--color-${key}-${variant}: ${colors[key][variant]};
    `
        )
    )};
}`;
        return { __html: colorVariables.replace(/,+/g, "") };
    }

    render = () => (
        <style dangerouslySetInnerHTML={this.css(this.props.colors)} />
    );
}
