function QuickSection() {
  return (
    <>
      <div id="hintsContent" className="tab-content">
        <div className="d-flex flex-column gap-3">
          <div className="quick-section-1">
            <h5 className="quicksection-title-1">
              📄 Getting Started
            </h5>
            <p className="quicksection-text-1">
              Upload your legal document using the "Upload Your Document"
              button. Supported formats: PDF, DOC, DOCX, TXT.
            </p>
          </div>

          <div className="quick-section-2">
            <h5 className="quicksection-title-2">
              🤖 Using AI Assistant
            </h5>
            <p className="quicksection-text-2">
              Ask specific questions about your document. Try: "What are my
              rights?" or "Explain this clause in simple terms."
            </p>
          </div>

          <div className="quick-section-3">
            <h5 className="quicksection-title-3">
              🌐 Language Support
            </h5>
            <p className="quicksection-text-3">
              Switch between languages anytime. The AI can explain documents in
              your preferred language.
            </p>
          </div>

          <div className="quick-section-4">
            <h5 className="quicksection-title-4">🎙️ Voice Features</h5>
            <p className="quicksection-text-4">
              Click the microphone icon to ask questions using your voice. Great
              for hands-free interaction.
            </p>
          </div>

          <div className="quick-section-5">
            <h5 className="quicksection-title-5">💡 Pro Tips</h5>
            <ul className="quicksection-text-5">
              <li>• Be specific with your questions for better results</li>
              <li>• Use the summary feature for long documents</li>
              <li>• Save important explanations for future reference</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickSection;
