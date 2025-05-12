import React from "react";
import "./Calculator.css"; // css 임포트

const Display = ({input, result}) => {
    return (
        <div className="display_container">
            <div className="display_expression">{input || "0"}</div>
            <div className="display_result">{result}</div>
        </div>
    );
};

export default Display;