import {useEffect, useRef } from "react";
function MobileMenu({ toggleHelp, handleMenuToggle }) {
  const menuRef = useRef(null);

  const handleBackdropClick = (e) => {
    // Close only if backdrop (not submenu content) is clicked
    if (e.target.id === "mobileMenu") {
      handleMenuToggle();
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleMenuToggle(); // close menu
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleMenuToggle]);

  return (
    <>
      <div
        className="mobile-menu"
        id="mobileMenu"
        ref={menuRef}
      >
        <div className="mobile-submenu">
          <a
            href="#home"
            className="mobile-section-1"
            onClick={handleMenuToggle}
          >
            Home
          </a>
          <a
            href="#features"
            className="mobile-section-2"
            onClick={handleMenuToggle}
          >
            Features
          </a>
          <a
            href="#demo"
            className="mobile-section-3"
            onClick={handleMenuToggle}
          >
            Demo
          </a>
          <div
            onClick={() => {
              toggleHelp();
              handleMenuToggle();
            }}
            className="mobile-section-4"
          >
            Help
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
