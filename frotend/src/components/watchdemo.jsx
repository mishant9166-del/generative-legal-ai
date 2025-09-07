function WatchDemo() {
  return (
    <>
      <div id="videoContent" className="tab-content">
        <div className="bg-light rounded p-4 text-center">
          <div className="display-4 mb-3">🎬</div>
          <h4 className="fw-semibold mb-3 text-dark">Interactive Demo Video</h4>
          <p className="text-muted mb-4">
            Watch how LegalAI transforms complex legal documents into simple,
            understandable language.
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
    </>
  );
}

export default WatchDemo;
