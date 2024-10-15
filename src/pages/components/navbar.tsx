import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg-primary px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              {/* Social media buttons can be added here */}
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              <a href="#">
                <small className="me-3 text-light">GRIEVANCE</small>
              </a>
              <a href="#">
                <small className="me-3 text-light">SITEMAP</small>
              </a>
              <a href="#">
                <small className="me-3 text-light">STUDENT SECTION</small>
              </a>
              <a href="#">
                <small className="me-3 text-light">CONTACT</small>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* navbar main */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="#" className="navbar-brand p-0">
            <div className="row align-items-center">
              <div className="col-auto">
                <img src="img/ldce-logo.png" alt="LDCE Logo" />
              </div>
              <div className="col-auto">
                <h4 className="text-primary m-0">LD College of Engineering</h4>
              </div>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Academics
                </a>
                <div className="dropdown-menu m-0">
                  <a href="#" className="dropdown-item">
                    BE Admission & Courses
                  </a>
                  <a href="#" className="dropdown-item">
                    PDDC Courses
                  </a>
                  <a href="#" className="dropdown-item">
                    PG Admission Courses
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <a href="#" className="dropdown-item">
                    BE Admission & Courses
                  </a>
                  <a href="#" className="dropdown-item">
                    PDDC Courses
                  </a>
                  <a href="#" className="dropdown-item">
                    PG Admission Courses
                  </a>
                </div>
              </div>
              <a href="#" className="nav-item nav-link">
                About
              </a>
              <a href="departments.html" className="nav-item nav-link">
                Departments
              </a>
              <a href="#" className="nav-item nav-link">
                Campus Life
              </a>
              <a href="#" className="nav-item nav-link">
                Placements
              </a>
              <a href="#" className="nav-item nav-link">
                More
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
