import React from "react";

export default class Title extends React.Component {
    render() {
        const {type, children, fontSize, lineHeight, className} = this.props;

        const styles = {
            fontSize: fontSize, 
            lineHeight: lineHeight,
            fontFamily: "Ferry, sans-serif",
            fontStyle: "normal",
            fontWeight: 900
        }
        return (
            <React.Fragment>
                {type === "h1" ? <h1 style={styles} className="title">{children}</h1> : <h2 style={styles} className="title">{children}</h2>}
            </React.Fragment>
        )
    }
}
