import { useState } from "react";
import WatchDemo from "./watchdemo";
import QuickSection from "./quicksection";

function HelpSection({ toggleHelp }) {
  const [activeTab, setActiveTab] = useState("WatchDemo");
  
  const handleBackdropClick = (e) => {
    // Close only if backdrop (not modal content) is clicked
    if (e.target.id === "helpModal") {
      toggleHelp();
    }
  };

  const showTab = (tab) => {
    setActiveTab(tab);
  }
  return (
    <>
      <div id="helpModal" className="help-modal help-modal2" onClick={handleBackdropClick}>
        <div className="help-content">
          <div className="p-3 border-bottom ">
            <div className="d-flex justify-content-between align-items-center help-11">
              <h3 className="fs-4 fw-bold text-dark mb-0 help-12">Help Center</h3>
              <button onClick={toggleHelp} className="btn btn-sm btn-light custom-background">
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
                onClick={() => showTab("WatchDemo")}
                id="videoTab"
                className={`tab-button px-3 py-2 btn ${
                activeTab === "WatchDemo" ? "btn-primary text-white" : "btn-light text-dark"
              }`}
              >
                🎥 Watch Demo
              </button>
              <button
                onClick={() => showTab("QuickSection")}
                id="hintsTab"
                className={`tab-button px-3 py-2 btn ${
                activeTab === "QuickSection" ? "btn-primary text-white" : "btn-light text-dark"
              }`}
              >
                💡 Quick Hints
              </button>
            </div>

            {activeTab === "WatchDemo" && <WatchDemo />}
            {activeTab === "QuickSection" && <QuickSection />}

          </div>
        </div>
      </div>
    </>
  );
}

export default HelpSection;
