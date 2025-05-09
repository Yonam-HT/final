import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import BoardHeader from "./components/BoardHeader";
import BoardList from "./components/BoardList";
import BoardProgress from "./components/BoardProgress";
import BoardWrite from "./components/BoardWrite";
import ProfilePage from "./components/ProfilePage";
import MyPage from "./components/MyPage";
import PortfolioPage from "./components/PortfolioPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/board" element={<BoardHeader />} />
      <Route path="/board/list" element={<BoardList />} />
      <Route path="/board/progress" element={<BoardProgress />} />
      <Route path="/board/write" element={<BoardWrite />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;