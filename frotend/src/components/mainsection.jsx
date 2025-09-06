import Teact, { useState, useRef } from "react";

function MainSection({ toggleHelp }) {
  const fileInputRef = useRef(null);
   const [fileName, setFileName] = useState("");
  const [buttonText, setButtonText] = useState("📄 Upload Your Document");
  const [disabled, setDisabled] = useState(false);

   const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      console.log("Selected file:", file);
      setButtonText("⏳ Processing...");
      setDisabled(true);

      setTimeout(() => {
        setButtonText("✅ Document Simplified!");
        setTimeout(() => {
          setButtonText("📄 Upload Your Document");
          setDisabled(false);
        }, 2000);
      }, 3000);
    }
  };

  return (
    <>
      <section
        id="home"
        className="hero-bg min-vh-100 d-flex align-items-center position-relative"
      >
        {/* Floating Emojis */}
        <div className="ghibli-bg">
          <div
            className="floating-item"
            style={{ left: "10%", animationDelay: "0s" }}
          >
            📄
          </div>
          <div
            className="floating-item"
            style={{ left: "20%", animationDelay: "2s" }}
          >
            ✒️
          </div>
          <div
            className="floating-item"
            style={{ left: "30%", animationDelay: "4s" }}
          >
            📋
          </div>
          <div
            className="floating-item"
            style={{ left: "40%", animationDelay: "6s" }}
          >
            📝
          </div>
          <div
            className="floating-item"
            style={{ left: "50%", animationDelay: "8s" }}
          >
            📑
          </div>
          <div
            className="floating-item"
            style={{ left: "60%", animationDelay: "10s" }}
          >
            🖋️
          </div>
          <div
            className="floating-item"
            style={{ left: "70%", animationDelay: "12s" }}
          >
            📊
          </div>
          <div
            className="floating-item"
            style={{ left: "80%", animationDelay: "14s" }}
          >
            📜
          </div>
          <div
            className="floating-item"
            style={{ left: "90%", animationDelay: "16s" }}
          >
            ⚖️
          </div>
          <div
            className="floating-item"
            style={{ left: "15%", animationDelay: "18s" }}
          >
            📰
          </div>
          <div
            className="floating-item"
            style={{ left: "25%", animationDelay: "20s" }}
          >
            🗂️
          </div>
          <div
            className="floating-item"
            style={{ left: "35%", animationDelay: "22s" }}
          >
            📎
          </div>
          <div
            className="floating-item"
            style={{ left: "45%", animationDelay: "24s" }}
          >
            🖊️
          </div>
          <div
            className="floating-item"
            style={{ left: "55%", animationDelay: "26s" }}
          >
            📈
          </div>
          <div
            className="floating-item"
            style={{ left: "65%", animationDelay: "28s" }}
          >
            📉
          </div>
          <div
            className="floating-item"
            style={{ left: "75%", animationDelay: "30s" }}
          >
            📋
          </div>
          <div
            className="floating-item"
            style={{ left: "85%", animationDelay: "32s" }}
          >
            📄
          </div>
          <div
            className="floating-item"
            style={{ left: "95%", animationDelay: "34s" }}
          >
            ✏️
          </div>
        </div>

        {/* Content */}
        <div className="container position-relative py-5 z-1">
          <div className="row align-items-center g-5">
            {/* Left Section */}
            <div className="col-lg-6 text-center text-lg-start">
              <h1
                className="fw-bold mb-4 lh-tight display-3"
                style={{ color: "var(--text-primary)", fontSize: "3.5rem" }}
              >
                Simplifying <br />
                <span className="text-primary" style={{ fontSize: "4rem" }}>
                  Legal Document
                </span>{" "}
                <br />
                <span
                  className="fw-normal"
                  style={{ color: "var(--text-secondary)", fontSize: "2rem" }}
                >
                  For Everyone
                </span>
              </h1>

              <p
                className="mb-4 mx-auto mx-lg-0"
                style={{
                  color: "var(--text-secondary)",
                  maxWidth: "600px",
                  fontSize: "1.3rem", // fs-5 ≈ 1.25rem, this makes it bigger
                }}
              >
                Transform complex legal jargon into simple, understandable
                language with AI-powered document analysis.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".pdf,.doc,.docx,.txt"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <button
                  className="btn btn-primary px-4 py-3 fw-medium fs-5 soft-button"
                  onClick={handleButtonClick} disabled={disabled}
                >
                  {buttonText}
                </button>
                <button
                  className="btn border px-4 py-3 fw-medium fs-5 soft-button"
                  style={{
                    background: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                  onClick={toggleHelp}
                >
                  ❓ Get Help
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-lg-6 d-flex justify-content-center">
              <div
                className="rounded-4 shadow-lg d-flex align-items-center justify-content-center border"
                style={{
                  width: "20rem",
                  height: "20rem",
                  background: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                <div className="text-center">
                  <div className="fs-1 text-primary mb-3">📄</div>
                  <div
                    className="fs-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    ⚖️
                  </div>
                  <p
                    className="mt-3 small"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    AI-Powered <br /> Legal Analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSection;
