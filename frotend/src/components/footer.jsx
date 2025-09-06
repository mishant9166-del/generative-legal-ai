import "../App.css";

function Footer() {
  return (
    <>
    <footer className="bg-white border-top py-5 border border-secondary">
          <div className="container px-4 px-lg-5">
            <div className="row g-4">
              {/* Column 1 */}
              <div className="col-md-6 col-lg-3">
                <div className="d-flex align-items-center gap-2 mb-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded bg-primary"
                    style={{ width: "2rem", height: "2rem" }}
                  >
                    <span
                      className="text-white fw-bold"
                      style={{ fontSize: "0.875rem" }}
                    >
                      ⚖️
                    </span>
                  </div>
                  <span className="fs-4 fw-semibold text-dark">LegalAI</span>
                </div>
                <p className="text-secondary f-1">
                  Empowering everyone with AI-powered legal document
                  understanding.
                </p>
              </div>

              {/* Column 2 */}
              <div className="col-md-6 col-lg-3">
                <h4 className="fw-semibold mb-4 text-dark">Features</h4>
                <ul className="list-unstyled text-secondary">
                  <li className="mb-2 cursor-pointer">
                    <a href="#" className="cursor-pointer text-secondary ">
                      Document Simplification
                    </a>
                  </li>
                  <li className="mb-2 cursor-pointer">
                    <a href="#" className="cursor-pointer text-secondary">
                      AI Assistant
                    </a>
                  </li>
                  <li className="mb-2 cursor-pointer">
                    <a href="#" className="cursor-pointer text-secondary">
                      Multilingual Support
                    </a>
                  </li>
                  <li className="mb-2 cursor-pointer">
                    <a href="#" className="cursor-pointer text-secondary">
                      Voice Recognition
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="col-md-6 col-lg-3">
                <h4 className="fw-semibold mb-4 text-dark">Languages</h4>
                <ul className="list-unstyled text-secondary">
                  <li className="mb-2 cursor-pointer">English</li>
                  <li className="mb-2 cursor-pointer">Hindi</li>
                  <li className="mb-2 cursor-pointer">Spanish</li>
                  <li className="mb-2 cursor-pointer">French</li>
                </ul>
              </div>

              {/* Column 4 */}
              <div className="col-md-6 col-lg-3">
                <h4 className="fw-semibold mb-4 text-dark">Contact</h4>
                <ul className="list-unstyled text-secondary">
                  <li className="mb-2 cursor-pointer">📧 support@legalai.com</li>
                  <li className="mb-2 cursor-pointer">📞 +1 (555) 123-4567</li>
                  <li className="mb-2 cursor-pointer">🏢 San Francisco, CA</li>
                  <li className="mb-2 cursor-pointer">🌐 www.legalai.com</li>
                </ul>
              </div>
            </div>

            <div className="lower-footer">
              <p>&copy; 2024 LegalAI. All rights reserved.</p>
            </div>
          </div>
        </footer>
    </>
  );
}

export default Footer;