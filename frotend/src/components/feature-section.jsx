// import "../App.css";
// import "../index.css"
function FeatureSection() {
  return (
    <>
      <section id="features" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2
              className="fw-bold mb-3 text-dark"
              style={{ fontSize: "3.5rem" }}
            >
              Key Features
            </h2>
            <p
              className="lead mx-auto text-secondary "
              style={{ maxWidth: "700px" , fontSize: "1.4rem", fontWeight: "450"}}
            >
              Simple, powerful tools to help you understand legal documents
              better
            </p>
          </div>

          <div className="row g-5">
            {/* Feature 1 */}
            <div className="col-sm-6 col-lg-3 ">
              <div className="card h-100 text-center p-4 minimal-card feature-card border-0">
                <div
                  className="bg-primary bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{ width: "64px", height: "64px" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>📜</span>
                </div>
                <h5 className="fw-semibold mb-4 text-dark" style={{fontSize:"1.4rem" , fontWeight:"600"}}>
                  Simplify Legal Language
                </h5>
                <p className="text-secondary mb-4 " style={{fontSize:"1.05rem" , fontWeight:"450", width:"85%" ,marginLeft:"auto" , marginRight:"auto"}}>
                  AI explains complex legal terms in plain language that everyone can understand.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-sm-6 col-lg-3 ">
              <div className="card h-100 text-center p-4 minimal-card feature-card border-0">
                <div
                  className="bg-success bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{ width: "64px", height: "64px" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🔎</span>
                </div>
                <h5 className="fw-semibold mb-4 text-dark" style={{fontSize:"1.4rem" , fontWeight:"600" , width:"85%" , margin:"auto"}}>
                  Summarize Key Clauses
                </h5>
                <p className="text-secondary mb-4" style={{fontSize:"1.05rem" , fontWeight:"450" , width:"85%" , marginLeft:"auto" , marginRight:"auto"}}>
                  Get instant summaries of the most important clauses and
                  conditions in your documents.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-sm-6 col-lg-3">
              <div className="card h-100 text-center p-4 minimal-card feature-card border-0">
                <div
                  className="bg-info bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{ width: "64px", height: "64px" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>⚖️</span>
                </div>
                <h5 className="fw-semibold mb-4 text-dark" style={{fontSize:"1.4rem" , fontWeight:"600" , width:"85%", marginLeft:"auto", marginRight:"auto"}} >
                  Rights & Responsibilities
                </h5>
                <p className="text-secondary mb-4" style={{fontSize:"1.05rem" , fontWeight:"450" , width:"85%" , marginLeft:"auto" , marginRight:"auto"}}>
                  Clearly understand your rights and obligations with AI-powered
                  explanations.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col-sm-6 col-lg-3">
              <div className="card h-100 text-center p-4 minimal-card feature-card border-0">
                <div
                  className="bg-warning bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{ width: "64px", height: "64px" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🌐</span>
                </div>
                <h5 className="fw-semibold mb-4 text-dark" style={{fontSize:"1.4rem" , fontWeight:"600" , width:"85%", marginLeft:"auto", marginRight:"auto"}}>
                  Multilingual Support
                </h5>
                <p className="text-secondary mb-4" style={{fontSize:"1.05rem" , fontWeight:"450" , width:"85%" , marginLeft:"auto" , marginRight:"auto"}}>  
                  Available in multiple languages including Hindi, English, and
                  regional languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeatureSection;
