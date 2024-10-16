import React from "react";

const styles = `
    .bg-dept {
        background: linear-gradient(rgba(19, 53, 123, 0.5), rgba(19, 53, 123, 0.5)), url(../img/20231218_165208.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        padding: 150px 0 50px 0;
    }

    .vision {
        max-width: 90%;
    }

    .row {}

    .dept-box {
        padding: 15px 25px;
        font-family: 'Roboto', sans-serif;
    }

    .dept-content {
        border: 3px solid #e6e6e6;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 250px;
    }

    .dept-box a {
        color: #656565;
        font-size: 1.15rem;
    }

    .dept-logo {
        width: 140px;
        padding: 20px;
    }

    .dept-content:hover {
        background-color: var(--bs-primary);
        transition: linear 0.25s;
    }

    .dept-content:hover a {
        color: white;
    }

    .dept-content:hover .dept-logo {
        width: 150px;
        transition: ease-in 0.1s;
    }
`;

function Department() {
  return (
    <>
      <style>{styles}</style>
      <div className="container-fluid bg-dept">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3 mb-4">Departments</h3>
        </div>
      </div>
      {/* Header End */}
      {/* departments Start */}
      <section className="container background-light py-5">
        <div className="mx-auto mb-5 text-center vision">
          <p className="">
            L.D. College of Engineering provides various departments to
            contribute for sustainable development of nation through achieving
            excellence in technical education and research while facilitating
            transformation of students into responsible citizens and competent
            professionals.
          </p>
        </div>
        {/*? Department Presentation */}
        <div className="row text-center">
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo//applied-mechanics-logo.png"
                alt=""
                srcSet=""
              />
              <a href="">
                Applied <br />
                Mechanics
              </a>
            </div>
          </div>
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/automobile-engineering-logo.jpg"
                alt=""
                srcSet=""
              />
              <a href="">
                Automobile <br />
                Engineering
              </a>
            </div>
          </div>
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/biomedical-engineering-logo.png"
                alt=""
                srcSet=""
              />
              <a href="">
                Bio Medical <br />
                Engineering
              </a>
            </div>
          </div>
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/chemical-engineering-logo.png"
                alt=""
                srcSet=""
              />
              <a href="">
                Chemical <br />
                Engineering
              </a>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/civil-engineering-logo.png"
                alt=""
                srcSet=""
              />
              <a href="">
                Civil <br />
                Engineering
              </a>
            </div>
          </div>
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/computer-engineering-logo.png"
                alt=""
                srcSet=""
              />
              <a href="">
                Computer <br />
                Engineering
              </a>
            </div>
          </div>
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/electrical-engineering-logo.png"
                alt=""
                srcSet=""
              />
              <a href="">
                Electrical <br />
                Engineering
              </a>
            </div>
          </div>
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/electronics-&-communication-engineering-logo.png"
                alt=""
                srcSet=""
              />
              <a href="">
                Elcectronics &amp; Communication <br />
                Engineering
              </a>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/environmental-engineering-logo.png"
                alt=""
                srcSet=""
              />
              <a href="">
                Environmental <br />
                Engineering
              </a>
            </div>
          </div>
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/information-technology-logo.png"
                alt=""
                srcSet=""
              />
              <a href="">
                Information <br />
                Technology
              </a>
            </div>
          </div>
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/instrumentation-control-engineering-logo.png"
                alt=""
                srcSet=""
              />
              <a href="">
                Instrumentation &amp; Control <br />
                Engineering
              </a>
            </div>
          </div>
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/general-logo.png"
                alt=""
                srcSet=""
              />
              <a href="">
                Science &amp; <br />
                Humanities
              </a>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/mechanical-engineering-logo.png"
                alt=""
                srcSet=""
              />
              <a href="">
                Mechanical <br />
                Engineering
              </a>
            </div>
          </div>
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/plastic-technology-logo.png"
                alt=""
                srcSet=""
              />
              <a href="">
                Plastic <br />
                Technology
              </a>
            </div>
          </div>
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/rubber-technology-logo.png"
                alt=""
                srcSet=""
              />
              <a href="">
                Rubber <br />
                Technology
              </a>
            </div>
          </div>
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/textile-technology-logo.png"
                alt=""
                srcSet=""
              />
              <a href="">
                Textile <br />
                Technology
              </a>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/mechanical-engineering-logo.png"
                alt=""
                srcSet=""
              />
              <a href="">
                Robotics &amp; <br />
                Automation
              </a>
            </div>
          </div>
          <div className="dept-box col-lg-3 col-md-3 col-sm-12">
            <div className="dept-content">
              <img
                className="dept-logo"
                src="./img/dept-logo/computer-engineering-logo (1).png"
                alt=""
                srcSet=""
              />
              <a href="">
                Artificial Intelligence &amp; <br />
                Machine Learning
              </a>
            </div>
          </div>
        </div>
      </section>
      <a
        href="#"
        className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"
      >
        <i className="fa fa-arrow-up" />
      </a>
    </>
  );
}

export default Department;
