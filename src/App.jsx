import React, { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import CalculatePage from "./pages/CalculatePage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

/**
 * 메인 앱 컴포넌트
 * 로그인 상태와 currentPage 상태에 따라 페이지를 렌더링합니다.
 * HomePage에는 setCurrentPage prop을 전달해 홈에서 페이지 이동이 가능합니다.
 */
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />; // 수정: setCurrentPage 전달
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsPage setCurrentPage={setCurrentPage} />;
      case "contact":
        return <ContactPage />;
      case "calculate":
        return <CalculatePage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {!isLoggedIn ? (
          <LoginPage onLogin={handleLogin} />
        ) : (
          renderPage()
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
