import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import TempNav from "./components/TempNav";
import OnboardingPage from "./pages/OnboardingPage";
import DashboardPage from "./pages/DashboardPage";
import ChatPage from "./pages/ChatPage";
import ImageGeneratorPage from "./pages/ImageGeneratorPage";
import MusicRoomPage from "./pages/MusicRoomPage";
import SettingsPage from "./pages/SettingsPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <HashRouter>
      <TempNav />
      <main style={{ padding: 24 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/image-generator" element={<ImageGeneratorPage />} />
          <Route path="/music-room" element={<MusicRoomPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
    </HashRouter>
  );
}