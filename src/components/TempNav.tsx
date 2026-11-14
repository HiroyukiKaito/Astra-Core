import { NavLink } from "react-router-dom";

const links = [
  { to: "/onboarding", label: "Onboarding" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/chat", label: "AI Chat" },
  { to: "/image-generator", label: "AI Image Generator" },
  { to: "/music-room", label: "Music Room" },
  { to: "/settings", label: "Engine Settings" },
  { to: "/about", label: "About" },
];

export default function TempNav() {
  return (
    <nav style={{ display: "flex", flexWrap: "wrap", gap: 16, padding: 12, background: "#121A2B", borderBottom: "1px solid #26354B" }}>
      {links.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          style={({ isActive }) => ({
            color: isActive ? "#62D9F5" : "#A7B2C5",
            fontWeight: isActive ? 600 : 400,
            textDecoration: "none",
          })}
        >
          {l.label}
        </NavLink>
      ))}
    </nav>
  );
}