function MobileMenu({ toggleHelp }) {
  return (
    // <nav className="navbar navbar-expand-md navbar-light bg-light border-bottom">
    //   <div className="container-fluid">
    //     {/* Brand */}
    //     <a className="navbar-brand fw-bold" href="#home">
    //       ⚖️ LegalAI
    //     </a>

    //     {/* Collapse Menu */}
    //     <div className={`collapse navbar-collapse `}>
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <a className="nav-link" href="#home" >
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#features" >
    //             Features
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#demo">
    //             Demo
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <button
    //             className="nav-link btn text-start"
    //             style={{ color: "var(--text-secondary)", background: "none", border: "none" }}
    //             onClick={toggleHelp}
    //           >
    //             Help
    //           </button>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <>
      <div className="mobile-menu" id="mobileMenu">
        <div className="py-2 px-4 space-y-2 ">
          <a
            href="#home"
            className="d-block py-2 text-secondary link-offset-2 link-underline-opacity-0 transition"
            
            
          >
            Home
          </a>
          <a href="#features" className="">
            Features
          </a>
          <a href="#demo" className="">
            Demo
          </a>
          <button onClick={toggleHelp} className="">
            Help
          </button>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
