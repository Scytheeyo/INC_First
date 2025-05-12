import React from "react";
import "./Calculator.css"; // css 임포트

const History = ({ history, onClearHistory }) => {
  return (
    <div className="history_container">
      <h3>이전 계산 기록</h3>
      {history.length === 0 ? (
        <p className="no_history">기록 없음.</p>
      ) : (
        <ul className="history_list">
          {history.map((item, index) => (
            <li key={index} className="history_item">
              {item.expression} = {item.result}
            </li>
          ))}
        </ul>
      )}
      <button onClick={onClearHistory} className="clear_history_btn">기록 삭제</button>
    </div>
  );
};

export default History;
// 기록 jsx