import { useState, useEffect } from "react";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "/admin";
      } else {
        alert("Login failed");
      }
    } catch (error) {
      alert("Login error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${cursorVariant}`}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      >
        <div className="cursor-dot"></div>
        <div className="cursor-ring"></div>
      </div>

      {/* Animated Background */}
      <div className="animated-bg">
        <div className="gradient-bg"></div>
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`
            }}></div>
          ))}
        </div>
        <div className="orb">
          <div className="orb-inner"></div>
        </div>
      </div>

      {/* Cursor Light Effect */}
      <div 
        className="cursor-light"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      ></div>

      {/* Login Card */}
      <div 
        className="login-card"
        onMouseEnter={() => setCursorVariant("hover")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        <div className="card-glow"></div>
        
        <div className="card-content">
          <div className="icon-wrapper">
            <div className="icon-bg">
              <i className="bi bi-shield-lock"></i>
            </div>
          </div>
          
          <h2 className="login-title">Admin Login</h2>
          <p className="login-subtitle">Access the admin panel</p>

          <div 
            className="input-group-custom"
            onMouseEnter={() => setCursorVariant("input")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <i className="bi bi-envelope input-icon"></i>
            <input
              type="email"
              className="login-input"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="input-focus-effect"></div>
          </div>

          <div 
            className="input-group-custom"
            onMouseEnter={() => setCursorVariant("input")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <i className="bi bi-key input-icon"></i>
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
            />
            <div className="input-focus-effect"></div>
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="login-btn"
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Logging in...
              </>
            ) : (
              <>
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Login
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;