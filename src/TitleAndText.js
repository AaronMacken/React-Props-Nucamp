import React from "react";
import './TitleAndText.css';

class TitleAndText extends React.Component {
    render() {
        return (
            <div className="titleAndTextBg">
                <h1>{this.props.titleText}</h1>
                <p>{this.props.pText}</p>
            </div>
        )
    }
}

export default TitleAndText;