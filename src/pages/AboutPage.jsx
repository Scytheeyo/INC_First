import React from "react";
import ProfileCard from "../components/ProfileCard";
import SkillsList from "../components/SkillsList";

const AboutPage = () => {
  const skills = ["HTML/CSS", "JavaScript", "React", "Node.js"];

  const timelineData = [
    { title: '2001', description: '탄생' },
    { title: '2020', description: '동국대학교 정보통신공학과 입학' },
  ]; // 연혁 추가

  return (
    <div className="about-container">
      <h2>자기소개</h2>
      <ProfileCard />
      <SkillsList skills={skills} />

        <h2>이력</h2>
        <ul>
          {timelineData.map((item) => (
            <li key={item.year} className="timeline-item">
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

    </div>
  );
};

export default AboutPage; 