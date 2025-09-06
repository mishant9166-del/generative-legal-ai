function HelpSection({ toggleHelp }) {
  return (
    <>
      <div id="helpModal" className="help-modal help-modal2">
        <div className="help-content">
          <div className="p-3 border-bottom">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="fs-4 fw-bold text-dark mb-0">Help Center</h3>
              <button onClick={toggleHelp} className="btn btn-sm btn-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-x-lg text-secondary"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 0 1 .708 0L8 8.293l5.146-5.439a.5.5 0 1 1 .708.708L8.707 9l5.147 5.146a.5.5 0 0 1-.708.708L8 9.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 9 2.146 3.854a.5.5 0 0 1 0-.708" />
                </svg>
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="d-flex gap-2 mb-4">
              <button
                onClick="showTab('video')"
                id="videoTab"
                className="tab-button btn btn-primary px-3 py-2 active"
              >
                🎥 Watch Demo
              </button>
              <button
                onclick="showTab('hints')"
                id="hintsTab"
                className="tab-button btn btn-light text-dark px-3 py-2"
              >
                💡 Quick Hints
              </button>
            </div>

            <div id="videoContent" className="tab-content">
              <div className="bg-light rounded p-4 text-center">
                <div className="display-4 mb-3">🎬</div>
                <h4 className="fw-semibold mb-3 text-dark">
                  Interactive Demo Video
                </h4>
                <p className="text-muted mb-4">
                  Watch how LegalAI transforms complex legal documents into
                  simple, understandable language.
                </p>
                <div className="bg-white rounded p-4 border-dashed">
                  <p className="text-secondary mb-3">
                    Demo video would be embedded here
                  </p>
                  <button className="btn btn-primary fw-medium">
                    ▶️ Play Demo Video
                  </button>
                </div>
              </div>
            </div>

            <div id="hintsContent" className="tab-content d-none">
              <div className="d-flex flex-column gap-3">
                <div className="bg-primary-subtle border border-primary rounded p-3">
                  <h5 className="fw-semibold text-primary mb-2">
                    📄 Getting Started
                  </h5>
                  <p className="text-primary small mb-0">
                    Upload your legal document using the "Upload Your Document"
                    button. Supported formats: PDF, DOC, DOCX, TXT.
                  </p>
                </div>

                <div className="bg-success-subtle border border-success rounded p-3">
                  <h5 className="fw-semibold text-success mb-2">
                    🤖 Using AI Assistant
                  </h5>
                  <p className="text-success small mb-0">
                    Ask specific questions about your document. Try: "What are
                    my rights?" or "Explain this clause in simple terms."
                  </p>
                </div>

                <div className="bg-purple-100 border border-purple rounded p-3">
                  <h5 className="fw-semibold text-purple mb-2">
                    🌐 Language Support
                  </h5>
                  <p className="text-purple small mb-0">
                    Switch between languages anytime. The AI can explain
                    documents in your preferred language.
                  </p>
                </div>

                <div className="bg-warning-subtle border border-warning rounded p-3">
                  <h5 className="fw-semibold text-warning mb-2">
                    🎙️ Voice Features
                  </h5>
                  <p className="text-warning small mb-0">
                    Click the microphone icon to ask questions using your voice.
                    Great for hands-free interaction.
                  </p>
                </div>

                <div className="bg-light border rounded p-3">
                  <h5 className="fw-semibold text-dark mb-2">💡 Pro Tips</h5>
                  <ul className="text-secondary small mb-0">
                    <li>
                      • Be specific with your questions for better results
                    </li>
                    <li>• Use the summary feature for long documents</li>
                    <li>• Save important explanations for future reference</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpSection;
