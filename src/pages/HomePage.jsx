import React from "react";
import FeatureCard from "../components/FeatureCard";

<<<<<<< Updated upstream
const HomePage = () => {
=======
const HomePage = ({ setCurrentPage }) => {
>>>>>>> Stashed changes
  const features = [
    {
      title: "소개",
      description: "제 소개입니다.",
    },
    {
      title: "프로젝트",
      description: "제가 만든 프로젝트들 입니다.",
    },
    {
      title: "연락처",
      description: "저에게 연락하는 방법입니다.",
    },
    {
<<<<<<< Updated upstream
      title: "여러분이 원하는",
      description: "항목을 새로 만들어 보세요.",
=======
      id: "calculate",
      title: "계산기",
      description: "계산기 기능을 활성화합니다.", // 계산기 표시
>>>>>>> Stashed changes
    },
  ];

  return (
    <div className="home-container">
      <h2>환영합니다!</h2>
      <p>이 웹사이트는 React를 사용하여 만든 개인 포트폴리오입니다.</p>
      <div className="features">
<<<<<<< Updated upstream
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
=======
        {features.map((feature) => (
          <div
            key={feature.id}
            className="feature-item"
            onClick={() => setCurrentPage(feature.id)} // 클릭 기능 추가(클릭 시 페이지 이동)
          >
            <FeatureCard
              title={feature.title}
              description={feature.description}
            />
          </div>
>>>>>>> Stashed changes
        ))}
      </div>
    </div>
  );
};

export default HomePage;
