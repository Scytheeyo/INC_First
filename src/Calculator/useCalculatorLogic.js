import { useState } from "react";

const useCalculatorLogic = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [history, setHistory] = useState([]); // History를 만들어서 계산 결과를 기록함

    const handleClick = (value) => setInput((prev) => prev + value);

    const backspace = () => {
        setInput((prev) => (prev.length > 0 ? prev.slice(0, -1) : ""));
    }; // 키보드 입력에서 백 스페이스가 가능하게 함

    const calculateResult = () => {
        try {
            const calculation = eval(input).toString();
            setResult(calculation);
            setHistory((prev) => [
                ...prev,
                { expression: input, result: calculation },
            ]); // History에 결과를 저장함
        } catch {
            setResult("Error");
        }
    };

    const clearInput = () => {
        setInput("");
        setResult("");
    };

    const clearHistory = () => {
        setHistory([]);
    }; // History를 리셋함

    return { input, result, history, handleClick, calculateResult, clearInput, clearHistory, backspace };
};

export default useCalculatorLogic;