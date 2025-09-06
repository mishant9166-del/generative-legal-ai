function DemoSection({ toggleHelp }) {
  return (
    <>
      <section
        id="demo"
        className="py-5"
        style={{ background: "var(--bg-tertiary)" }}
      >
        <div className="container px-4">
          {/* Section Header */}
          <div className="text-center mb-5">
            <h2
              className="fw-bold mb-3 display-5"
              style={{ color: "var(--text-primary)" }}
            >
              See AI in Action
            </h2>
            <p
              className="fs-5 mx-auto"
              style={{ maxWidth: "720px", color: "var(--text-secondary)" }}
            >
              Watch how our AI transforms complex legal documents into simple,
              understandable language
            </p>
          </div>

          {/* Card with Before & After */}
          <div
            className="card shadow rounded-4 overflow-hidden border-0"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--border-color)",
            }}
          >
            <div className="row g-0">
              {/* Before Column */}
              <div className="col-lg-6 border-bottom border-lg-end p-4 bg-danger bg-opacity-10 d-flex flex-column justify-content-center">
                <h3 className="h4 fw-bold mb-3 text-danger">
                  Before: Complex Legal Jargon
                </h3>
                <div
                  className="border rounded-3 p-3"
                  style={{
                    background: "var(--card-bg)",
                    borderColor: "#f5c2c7",
                  }}
                >
                  <p
                    className="mb-0 lh-lg"
                    style={{ color: "var(--text-primary)" }}
                  >
                    "The party of the first part hereby agrees to indemnify and
                    hold harmless the party of the second part from and against
                    any and all claims, demands, losses, costs, expenses,
                    obligations, liabilities, damages, recoveries, and
                    deficiencies..."
                  </p>
                </div>
              </div>

              {/* After Column */}
              <div className="col-lg-6 p-4 bg-success bg-opacity-10 d-flex flex-column justify-content-center">
                <h3 className="h4 fw-bold mb-3 text-success">
                  After: Simple Explanation
                </h3>
                <div
                  className="border rounded-3 p-3"
                  style={{
                    background: "var(--card-bg)",
                    borderColor: "#badbcc",
                  }}
                >
                  <p
                    className="mb-2 lh-lg"
                    style={{ color: "var(--text-primary)" }}
                  >
                    "You (first party) take responsibility to protect the second
                    party from any damage, costs, or legal problems that might
                    arise."
                  </p>
                  <p
                    className="small mb-0"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    ✓ Simplified in plain English
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-5">
            <button className="btn btn-primary btn-lg px-5 py-3 rounded-3" onClick={toggleHelp}>
              🚀 Try Demo Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default DemoSection;
