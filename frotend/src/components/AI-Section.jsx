import { useState } from "react";
function Assistant() {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const handleMicClick = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Sorry, your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setListening(true);
      setText("🎙️ Listening...");
    };

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setText(speechResult);
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
      setText("⚠️ Error, please try again.");
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const InputValue = () => {
    alert(`You asked: ${text}`);
    setText("");
  };

  return (
    <>
      <section className="py-5 bg-white">
        <div className="container px-4">
          <div className="row align-items-center g-5">
            {/* Left Column */}
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4 text-dark">
                AI Legal Assistant
              </h2>
              <p className="fs-5 text-secondary mb-4">
                Ask our AI assistant any questions about your legal documents in
                multiple languages.
              </p>

              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle"
                    style={{ width: "32px", height: "32px" }}
                  >
                    <span className="text-primary fw-bold">✓</span>
                  </div>
                  <span className="ms-3 text-dark">
                    Voice Assistant in Multiple Languages
                  </span>
                </li>

                <li className="d-flex align-items-center mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle"
                    style={{ width: "32px", height: "32px" }}
                  >
                    <span className="text-primary fw-bold">✓</span>
                  </div>
                  <span className="ms-3 text-dark">24/7 AI Legal Guidance</span>
                </li>

                <li className="d-flex align-items-center">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle"
                    style={{ width: "32px", height: "32px" }}
                  >
                    <span className="text-primary fw-bold">✓</span>
                  </div>
                  <span className="ms-3 text-dark">
                    Instant Document Analysis
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              <div className="card shadow-sm rounded-4 p-4">
                <div className="bg-light rounded-3 p-3 mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <div
                      className="d-flex align-items-center justify-content-center bg-primary rounded-circle me-2"
                      style={{ width: "32px", height: "32px" }}
                    >
                      <span className="text-white">🤖</span>
                    </div>
                    <span className="fw-semibold text-dark">AI Assistant</span>
                  </div>
                  <p className="mb-0 text-secondary">
                    "I can help you understand your legal documents. Ask any
                    question!"
                  </p>
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Ask about your document..."
                    onChange={handleInputChange}
                    value={text}
                  />

                  <button
                    className="btn btn-submit btn-primary "
                    type="submit"
                    onClick={InputValue}
                  >
                    ➤
                  </button>
                  <button className={`btn ${listening ? "btn-danger" : "btn-primary"}`} onClick={handleMicClick}>
                    🎙️
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Assistant;
