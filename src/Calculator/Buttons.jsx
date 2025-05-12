import React from "react";
import "./Calculator.css"; // css 임포트

const Buttons = ({onButtonClick}) => {
    const buttons = [
        ["7", "8", "9", "/"], 
        ["4", "5", "6", "*"], 
        ["1", "2", "3", "-"], 
        ["0", ".", "=", "+"],
        ["AC"]
    ];

    return (
        <div className="button_grid">
            {buttons.map((row, rowIndex) => (
                <div className="button_row" key = {rowIndex}>
                    {row.map((btn) => (
                        <button
                            key = {btn}
                            onClick = {() => onButtonClick(btn)}
                            className="calc_button"
                        >
                            {btn}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Buttons;