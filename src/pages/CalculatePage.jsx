import React from "react";
import Calculator from "../Calculator/Calculator";

/**
 * 계산기 페이지 컴포넌트
 * 계산기 기능을 이 페이지에 렌더링합니다.
 */
const CalculatePage = () => {
  return (
    <div className="calculate-container">
      <h2>계산기</h2>
      <Calculator />
    </div>
  );
};

export default CalculatePage;
