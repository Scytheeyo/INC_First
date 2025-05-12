import React, { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App = () => {
  // 로그인 상태를 관리하는 state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  // 로그인 처리 함수
  const handleLogin = (username, password) => {
    // 실제로는 서버와 통신해야 하지만, 데모용으로 간단히 구현
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  // 페이지 렌더링 함수
  const renderPage = () => {
    switch (currentPage) {
      case "home":
<<<<<<< Updated upstream
        return <HomePage />;
=======
        return <HomePage setCurrentPage={setCurrentPage} />; // 수정: setCurrentPage 전달 클릭해서 이동할 필요가 있음
>>>>>>> Stashed changes
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
