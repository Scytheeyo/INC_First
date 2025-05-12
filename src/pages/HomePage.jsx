import React from "react";
import FeatureCard from "../components/FeatureCard";

/**
 * 홈페이지 컴포넌트
 * 주요 기능(소개, 프로젝트, 연락처)을 클릭 시 해당 페이지로 이동합니다.
 */
const HomePage = ({ setCurrentPage }) => {
  const features = [
    {
      id: "about",
      title: "소개",
      description: "제 소개입니다.",
    },
    {
      id: "projects",
      title: "프로젝트",
      description: "제가 만든 프로젝트들 입니다.",
    },
    {
      id: "contact",
      title: "연락처",
      description: "저에게 연락하는 방법입니다.",
    },
    {
      id: "calculate",
      title: "계산기",
      description: "계산기 기능을 활성화합니다.",
    },
  ];

  return (
    <div className="home-container">
      <h2>환영합니다!</h2>
      <p>이 웹사이트를 통해 제 소개와 프로젝트를 확인하실 수 있습니다.</p>

      <div className="features">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="feature-item" /* 수정: 클릭 영역 */
            onClick={() => setCurrentPage(feature.id)} /* 수정: 페이지 이동 */
          >
            <FeatureCard
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;