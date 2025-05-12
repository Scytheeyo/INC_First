import React, {useEffect} from "react";
import useCalculatorLogic from "./useCalculatorLogic";
import Buttons from "./Buttons";
import Display from "./Display";
import History from "./History"; // import 추가됨
import "./Calculator.css";

const Calculator = () => {
    const { input, result, history, handleClick, calculateResult, clearInput, clearHistory, backspace } = useCalculatorLogic();

    useEffect(() => {
        const handleKeyDown = (e) => {
            const { key } = e;
            if (!isNaN(key)) {
                handleClick(key);
            } else if (["+", "-", "*", "/", "."].includes(key)) {
                handleClick(key);
            } else if (key === "Enter") {
                calculateResult();
            } else if (key === "Escape" || key === "Delete") {
                clearInput();
            } else if (key === "Backspace") {
                backspace();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleClick, calculateResult, clearInput, backspace]); // 키보드 입력 추가
    
    const onButtonClick = (value) => {
        if (value === "=") calculateResult();
        else if (value === "AC") clearInput();
        else handleClick(value);
    }; // 계산기능 함수로 빼버림

    return (
        <div className="calculator_container">
            <div className="calc_and_history">
                <div className="calculator">
                    <Display input={input} result={result} />
                    <Buttons onButtonClick={onButtonClick}/>
                </div>
                <History history={history} onClearHistory={clearHistory} />
            </div>
        </div>
    );
};

export default Calculator;