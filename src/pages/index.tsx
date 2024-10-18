// "use client"
import React, { useState } from "react";
// import Head from 'next/head';
// import Script from 'next/script';


function Index() {
  const [News,SetNews]=useState([]);
  async function NewsFetch () {
    const response = await fetch("https://stag-api.ldce.ac.in/api/news");
    const data = await response.json();
    console.log(data);
    SetNews(data);
    console.log(News)
    
  }
  React.useEffect(() => {
    NewsFetch();
  }, []);
  return (
    <>
      <div>
        {/* Carousel Start */}
        <div className="carousel-header">
          <div
            id="carouselId"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#carouselId"
                data-bs-slide-to={0}
                className="active"
              />
              <li data-bs-target="#carouselId" data-bs-slide-to={1} />
              <li data-bs-target="#carouselId" data-bs-slide-to={2} />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img
                  src="/img/20240309_184021.jpg"
                  className="img-fluid"
                  alt="Image"
                />
                <div className="carousel-caption">
                  <div className="p-3" style={{ maxWidth: 900 }}>
                    <h4
                      className="text-white text-uppercase fw-bold mb-4"
                      style={{ letterSpacing: 3 }}
                    />
                    <h1 className="display-2 text-capitalize text-white mb-4">
                      SAFEGUARD YOUR FUTURE
                    </h1>
                    <p className="mb-5 fs-5">
                      L.D.C.E has been providing the world with proficient
                      engineers since 1952.
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <a
                        className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                        href="#explorenow"
                      >
                        Explore Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/img/20231218_165208.jpg"
                  className="img-fluid"
                  alt="Image"
                />
                <div className="carousel-caption">
                  <div className="p-3" style={{ maxWidth: 900 }}>
                    <h4
                      className="text-white text-uppercase fw-bold mb-4"
                      style={{ letterSpacing: 3 }}
                    />
                    <h1 className="display-2 text-capitalize text-white mb-4">
                      SAFEGUARD YOUR FUTURE
                    </h1>
                    <p className="mb-5 fs-5">
                      L.D.C.E has been providing the world with proficient
                      engineers since 1952.
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <a
                        className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                        href="#explorenow"
                      >
                        Explore Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/img/20240224_174428.jpg"
                  className="img-fluid"
                  alt="Image"
                />
                <div className="carousel-caption">
                  <div className="p-3" style={{ maxWidth: 900 }}>
                    <h4
                      className="text-white text-uppercase fw-bold mb-4"
                      style={{ letterSpacing: 3 }}
                    />
                    <h1 className="display-2 text-capitalize text-white mb-4">
                      SAFEGUARD YOUR FUTURE
                    </h1>
                    <p className="mb-5 fs-5">
                      L.D.C.E has been providing the world with proficient
                      engineers since 1952.
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <a
                        className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                        href="#explorenow"
                      >
                        Explore Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon btn bg-primary"
                aria-hidden="false"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon btn bg-primary"
                aria-hidden="false"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* Carousel End */}
      </div>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
          backgroundColor: "#f8f9fa",
          border: "1px solid #dee2e6",
          padding: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <svg
          style={{ width: 24, height: 24, marginRight: 10 }}
          fill="#343a40"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 2h4v2h-4V2zm9.97 7.24l-1.414-1.414-1.415 1.414a8.036 8.036 0 0 0-1.415-.829V7H8v.413c-.489.191-.954.444-1.415.829L5.17 7.828 3.755 9.243 5.17 10.66A8.036 8.036 0 0 0 4.342 12H3v2h1.342c.174.487.389.948.639 1.389l-1.415 1.415 1.414 1.415 1.415-1.415a8.036 8.036 0 0 0 1.415.829V17h8v-.413c.489-.191.954-.444 1.415-.829l1.414 1.414 1.415-1.415-1.415-1.415c.25-.441.465-.902.639-1.389H21v-2h-1.342a8.036 8.036 0 0 0-.639-1.389l1.414-1.414zm-5.97 5.75a5.978 5.978 0 0 1-4 0V14h4v.994zm0-3.988h-4V10h4v1.994z" />
        </svg>
        {/* <marquee
      style={{
        color: "#343a40",
        fontFamily: "Arial, sans-serif",
        fontSize: 20,
        fontWeight: "bold"
      }}
    >
      Welcome to our website! Check out our latest updates and announcements!
    </marquee> */}
      </div>
      <div className="d-flex align-items-end justify-content-end">
        <a
          className="btn-hover-bg btn btn-primary text-white py-2 px-4"
          href="https://www.youtube.com/watch?v=IYGIaUNEaMU"
        >
          Read More
        </a>
      </div>
      <div className="about-area pb-75" style={{ paddingTop: 70 }}>
        <div className="container">
          <div className="row align-items-center" data-disabled="true">
            <div
              className="col-lg-6"
              style={{
                animationName: "slideInUp",
                animationDuration: "600ms",
                animationTimingFunction: "ease",
                animationDelay: "0ms",
                animationDirection: "normal",
                animationFillMode: "both",
              }}
            >
              <div className="about-image">
                <img
                  src="/img/20231218_163919.jpg"
                  alt="about-image"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div
              className="col-lg-6"
              style={{
                animationName: "slideInUp",
                animationDuration: "600ms",
                animationTimingFunction: "ease",
                animationDelay: "0ms",
                animationDirection: "normal",
                animationFillMode: "both",
              }}
            >
              <div
                className="about-content"
                style={{
                  marginLeft: 70,
                  marginBottom: 25,
                  marginRight: "-10px",
                }}
              >
                <div className="title" style={{ marginBottom: 30 }}>
                  <h2
                    className="d-flex align-items-center"
                    style={{
                      fontSize: 42,
                      lineHeight: 0,
                      marginBottom: 30,
                      color: "rgb(0, 30, 67)",
                    }}
                  >
                    <img src="/img/title-shape.svg" alt="title-shape" />
                    About LDCE College
                  </h2>
                  <p style={{ lineHeight: "2rem" }}>
                    L. D. College of Engineering endearingly known as L.D.C.E is
                    Ahmedabad’s premier engineering college situated at the
                    city’s heart and surrounded by elite organization like PRL,
                    ATIRA, ISRO, IIM and CEPT. Starting in 1948 to impart
                    quality higher education in various fields of engineering,
                    it has seen unprecedented growth. It is affiliated with
                    Gujarat Technological University &amp; administrated by
                    Department of Technical Education, Government of Gujarat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* academics Start */}
      <div className="container-fluid bg-light service py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h5 className="section-title px-3">ACADEMICS</h5>
            <h1 className="mb-0">ACADEMIC UNITS</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-md-4 col-sm-4">
              <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                <div className="service-content text-end">
                  <h1 className="mb-4">Center of Excellence</h1>
                  {/* <p class="mb-0">The LDCE (L. D. College of Engineering) Center of Excellence is a distinguished initiative aimed at fostering
                      innovation, research, and advanced learning within the engineering domain. Established to enhance the academic and
                      professional capabilities of students and faculty, the center serves as a hub for cutting-edge technological
                      advancements and interdisciplinary collaboration.
                      </p> */}
                </div>
                <div className="service-icon p-4">
                  <i className="fa fa-globe fa-4x text-primary" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-md-4 col-sm-4">
              <div className="service-content-inner d-flex align-items-center  bg-white border border-primary rounded p-4 pe-0">
                <div className="service-content text-end">
                  <h1 className="mb-4">Innovation</h1>
                  {/*            <p class="mb-0">Impact and Achievements
                      Innovative Projects: Numerous innovative projects have emerged from the center, many of which have garnered recognition
                      at national and international levels.
                      
                      Start-up Incubation: The center supports budding entrepreneurs by providing the necessary resources and mentorship to
                      transform their ideas into successful start-ups.
                      
                  

                      </p> */}
                </div>
                <div className="service-icon p-4">
                  <i className="fa fa-hotel fa-4x text-primary" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-md-4 col-sm-4">
              <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                <div className="service-content text-end">
                  <h1 className="mb-4">Achievements</h1>
                  {/* <p class="mb-0">Facilities and Resources
                      State-of-the-art Laboratories: Equipped with the latest technology and tools, the laboratories provide a conducive
                      environment for research and development activities.
                      Start-up Incubation: The center supports budding entrepreneurs by providing the necessary resources and mentorship to
                      transform their ideas into successful start-ups.
                      
                      </p> */}
                </div>
                <div className="service-icon p-4">
                  <i className="fa fa-user fa-4x text-primary" />
                </div>
                <div>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
            {/* <div class="col-12">
              <div class="text-center">
                  <a class="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">Service More</a>
              </div>
          </div> */}
          </div>
        </div>
      </div>
      {/* academics End */}
      {/* Gallery Start */}
      <div className="container-fluid gallery py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
          <h5 className="section-title px-3">CAMPUS</h5>
          <h1 className="mb-4">LDCE CAMPUS LIFE</h1>
          <p className="mb-0">LDCE HAS A VIBRANT CAMPUS</p>
        </div>
        <div className="tab-class text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
            <li className="nav-item">
              <a
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                data-bs-toggle="pill"
                href="#GalleryTab-1"
              >
                <span className="text-dark" style={{ width: 150 }}>
                  All
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#GalleryTab-2"
              >
                <span className="text-dark" style={{ width: 150 }}>
                  Departments
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#GalleryTab-3"
              >
                <span className="text-dark" style={{ width: 150 }}>
                  Sports
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#GalleryTab-4"
              >
                <span className="text-dark" style={{ width: 150 }}>
                  Cultural Events
                </span>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
              <div className="row g-2">
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/20231218_163919.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          LDCE Campus
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="/src//img/testimonial-1.jpg"
                        data-lightbox="gallery-1"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/20231218_175604.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          LDCE Campus
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="/img/20231231_165956.jpg"
                        data-lightbox="gallery-2"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/20240221_152736.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          LDCE Campus
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="/img/20240221_160831.jpg"
                        data-lightbox="gallery-3"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/20240224_174428.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          LDCE Campus
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="/img/20240227_081206 (1).jpg"
                        data-lightbox="gallery-4"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/20240229_123852.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          LDCE Campus
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="/img/20240309_184021.jpg"
                        data-lightbox="gallery-5"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/PSX_20240107_072040.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          LDCE Campus
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="/img/PSX_20240211_183740.jpg"
                        data-lightbox="gallery-6"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/PSX_20240211_183740.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          LDCE Campus
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="/img/PSX_20240211_184450.jpg"
                        data-lightbox="gallery-7"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/PSX_20240211_214212.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          LDCE Campus
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="/img/PSX_20240223_195433.jpg"
                        data-lightbox="gallery-8"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/20240325_181525.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          LDCE Campus
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="/img/20240405_180307.jpg"
                        data-lightbox="gallery-9"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/20240405_182223.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          LDCE Campus
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="/img/20240405_184526.jpg"
                        data-lightbox="gallery-10"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="GalleryTab-3" className="tab-pane fade show p-0">
              <div className="row g-2">
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/20240420_180452.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          LDCE Campus
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="/img/PSX_20240223_195433.jpg"
                        data-lightbox="gallery-2"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/about-img-1.png"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          LDCE Campus
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          Vibrant Photo Gallaty Of LDCE{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="/img/20240309_184021.jpg"
                        data-lightbox="gallery-3"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="GalleryTab-2" className="tab-pane fade show p-0">
              <div className="row g-2">
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/computer_department.jpeg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Computer Engineering
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/electrical.jpeg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Electrical Engineering
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/mechanical.jpeg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Mechanical Engineering
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/civil.jpeg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Civil Engineering
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/IT.jpeg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          IT Engineering
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/automobile.jpeg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Automobile Engineering
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="GalleryTab-4" className="tab-pane fade show p-0">
              <div className="row g-2">
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/20240229_123852.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          LDCE Campus
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="/img/20240326_190157 (1).jpg"
                        data-lightbox="gallery-2"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/20240405_180307.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          LDCE Campus
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="/img/20240405_183147.jpg"
                        data-lightbox="gallery-3"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="GalleryTab-5" className="tab-pane fade show p-0">
              <div className="row g-2">
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/gallery-2.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          LDCE Campus
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="/img/gallery-2.jpg"
                        data-lightbox="gallery-2"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="/img/gallery-3.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          LDCE Campus
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="/img/gallery-3.jpg"
                        data-lightbox="gallery-3"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery End */}
      {/* NEWS Start */}
      <div className="container-fluid packages py-5 pt-0">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h5 className="section-title px-3">NEWS</h5>
            <h1 className="mb-0">LATEST NEWS</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="packages-item">
                <div className="packages-img">
                  <img
                    src="/img/news.jpeg"
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  />
                  <div
                    className="packages-info d-flex border border-start-0 border-end-0 position-absolute"
                    style={{ width: "100%", bottom: 0, left: 0, zIndex: 5 }}
                  >
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-calendar-alt me-2" />
                      16 DEC 2023
                    </small>
                  </div>
                </div>
                <div className="packages-content bg-light">
                  <div className="p-4 pb-0">
                    <p className="mb-4">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nesciunt nemo quia quae illum aperiam fugiat voluptatem
                      repellat
                    </p>
                  </div>
                  <div className="row bg-primary rounded-bottom mx-0">
                    <div className="col-6 text-start px-0">
                      <a
                        href="#"
                        className="btn-hover btn text-white py-2 px-4"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="col-6 text-end px-0"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="packages-item">
                <div className="packages-img">
                  <img
                    src="/img/news.jpeg"
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  />
                  <div
                    className="packages-info d-flex border border-start-0 border-end-0 position-absolute"
                    style={{ width: "100%", bottom: 0, left: 0, zIndex: 5 }}
                  >
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-calendar-alt me-2" />
                      16 DEC 2023
                    </small>
                  </div>
                </div>
                <div className="packages-content bg-light">
                  <div className="p-4 pb-0">
                    <p className="mb-4">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nesciunt nemo quia quae illum aperiam fugiat voluptatem
                      repellat
                    </p>
                  </div>
                  <div className="row bg-primary rounded-bottom mx-0">
                    <div className="col-6 text-start px-0">
                      <a
                        href="#"
                        className="btn-hover btn text-white py-2 px-4"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="col-6 text-end px-0"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="packages-item">
                <div className="packages-img">
                  <img
                    src="/img/news.jpeg"
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  />
                  <div
                    className="packages-info d-flex border border-start-0 border-end-0 position-absolute"
                    style={{ width: "100%", bottom: 0, left: 0, zIndex: 5 }}
                  >
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-calendar-alt me-2" />
                      16 DEC 2023
                    </small>
                  </div>
                </div>
                <div className="packages-content bg-light">
                  <div className="p-4 pb-0">
                    <p className="mb-4">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nesciunt nemo quia quae illum aperiam fugiat voluptatem
                      repellat
                    </p>
                  </div>
                  <div className="row bg-primary rounded-bottom mx-0">
                    <div className="col-6 text-start px-0">
                      <a
                        href="#"
                        className="btn-hover btn text-white py-2 px-4"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="col-6 text-end px-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEWS End */}
      {/* EVENTS Start */}
      {/* <div class="container-fluid blog py-5">
  <div class="container py-5">
      <div class="mx-auto text-center mb-5" style="max-width: 900px;">
          <h5 class="section-title px-3">EVENTS</h5>
          <h1 class="mb-4">Popular Events</h1>
           <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt tenetur sapiente atque. Magni non explicabo beatae sit, vel reiciendis consectetur numquam id similique sunt error obcaecati ducimus officia maiores.
      </p>
      </div>
      <div class="row g-4 justify-content-center">
          <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                  <div class="blog-img">
                      <div class="blog-img-inner">
                          <img class="img-fluid w-100 rounded-top" src="/img/EVENT-IMG.jpg" alt="Image">
                          <div class="blog-icon">
                              <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                          </div>
                      </div>
                      <div class="blog-info d-flex align-items-center border border-start-0 border-end-0">
                          <small class="flex-fill text-center border-end py-2"><i
                                  class="fa fa-calendar-alt text-primary me-2"></i>28 Jan 2050</small>
                          <a href="#" class="btn-hover flex-fill text-center text-white border-end py-2"><i
                                  class="fa fa-thumbs-up text-primary me-2"></i>1.7K</a>
                          <a href="#" class="btn-hover flex-fill text-center text-white py-2"><i
                                  class="fa fa-comments text-primary me-2"></i>1K</a>
                      </div>
                  </div>
                  <div class="blog-content border border-top-0 rounded-bottom p-4">
                      <p class="mb-3"></p>
                      <a href="#" class="h4">Adventures Trip</a>
                      <p class="my-3">Inauguration of upgraded
                          Library Facilities on 15
                          December 2023</p>
                      <a href="#" class="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                  <div class="blog-img">
                      <div class="blog-img-inner">
                          <img class="img-fluid w-100 rounded-top" src="/img/EVENT-IMG.jpg" alt="Image">
                          <div class="blog-icon">
                              <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                          </div>
                      </div>
                      <div class="blog-info d-flex align-items-center border border-start-0 border-end-0">
                          <small class="flex-fill text-center border-end py-2"><i
                                  class="fa fa-calendar-alt text-primary me-2"></i>28 Jan 2050</small>
                          <a href="#" class="btn-hover flex-fill text-center text-white border-end py-2"><i
                                  class="fa fa-thumbs-up text-primary me-2"></i>1.7K</a>
                          <a href="#" class="btn-hover flex-fill text-center text-white py-2"><i
                                  class="fa fa-comments text-primary me-2"></i>1K</a>
                      </div>
                  </div>
                  <div class="blog-content border border-top-0 rounded-bottom p-4">
                      <p class="mb-3"></p>
                      <a href="#" class="h4">Adventures Trip</a>
                      <p class="my-3"></a>
                      <p class="my-3">Inauguration of upgraded
                          Library Facilities on 15
                          December 2023</p>
                      <a href="#" class="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                  <div class="blog-img">
                      <div class="blog-img-inner">
                          <img class="img-fluid w-100 rounded-top" src="/img/EVENT-IMG.jpg" alt="Image">
                          <div class="blog-icon">
                              <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                          </div>
                      </div>
                      <div class="blog-info d-flex align-items-center border border-start-0 border-end-0">
                          <small class="flex-fill text-center border-end py-2"><i
                                  class="fa fa-calendar-alt text-primary me-2"></i>28 Jan 2050</small>
                          <a href="#" class="btn-hover flex-fill text-center text-white border-end py-2"><i
                                  class="fa fa-thumbs-up text-primary me-2"></i>1.7K</a>
                          <a href="#" class="btn-hover flex-fill text-center text-white py-2"><i
                                  class="fa fa-comments text-primary me-2"></i>1K</a>
                      </div>
                  </div>
                  <div class="blog-content border border-top-0 rounded-bottom p-4">
                      <p class="mb-3"></p>
                      <a href="#" class="h4">Adventures Trip</a>
                      <p class="my-3"></a>
                      <p class="my-3">Inauguration of upgraded
                          Library Facilities on 15
                          December 2023</p>
                      <a href="#" class="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
    </div> */}
      {/* EVENTS End */}
      <div className="container-fluid causes py-5 pt-0">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
            <h5 className="text-uppercase text-primary">
              What we are proud of !
            </h5>
            <h1 className="mb-4">Achievements</h1>
            <p className="mb-0">
              We are proud of the students who are working hard to make a
              difference
            </p>
          </div>
          <div className="row g-4 owl-carousel">
            <div className="col-lg-6 col-xl-3">
              <div className="causes-item shadow">
                <div className="causes-img">
                  <img
                    src="https://ldce.ac.in/images/thumb/achievements/2024/ldce-nss-unit-awarded-as-best-nss-unit-and-prof-c-s-sanghvi-as-best-program-officer-of-gtu-for-the-year-2021-22.jpeg"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                </div>
                <div className="causes-content p-4">
                  <h4 className="mb-3">LDCE</h4>
                  <p className="mb-4">
                    LDCE is a good place to learn and grow.
                  </p>
                  <a
                    className="btn-hover-bg btn btn-primary text-white py-2 px-3"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="causes-item shadow">
                <div className="causes-img">
                  <img
                    src="https://ldce.ac.in/images/thumb/achievements/2024/ldce-shines-at-the-national-level-design-competition-for-steel-intensive-trade-fair-centre.jpeg"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                </div>
                <div className="causes-content p-4">
                  <h4 className="mb-3">LDCE</h4>
                  <p className="mb-4">
                    LDCE is a good place to learn and grow.
                  </p>
                  <a
                    className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="causes-item shadow">
                <div className="causes-img">
                  <img
                    src="https://ldce.ac.in/images/thumb/achievements/2024/congratulations-to-tanay-gajjar-and-prof-a-g-momin-for-securing-patent-on-design-of-split-rivet-press.png"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                </div>
                <div className="causes-content p-4">
                  <h4 className="mb-3">LDCE is a good place</h4>
                  <p className="mb-4">
                    LDCE is a good place to learn and grow.
                  </p>
                  <a
                    className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="causes-item shadow">
                <div className="causes-img">
                  <img
                    src="https://ldce.ac.in/images/thumb/achievements/2024/two-be-programs-ic-and-chemical-engineering-received-nba-re-accreditation-for-the-three-yearsjune-2027.jpeg"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                </div>
                <div className="causes-content p-4">
                  <h4 className="mb-3">LDCE</h4>
                  <p className="mb-4">
                    LDCE is a good place to learn and grow.
                  </p>
                  <a
                    className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hars */}
      <div className="container-fluid causes py-5 pt-0">
        <section
          className="card clearfix"
          style={{
            backgroundImage: 'url("/img/20240224_174428.jpg")',
            padding: "50px 0 0",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "darken, luminosity",
          }}
        >
          <div className="container">
            <h2
              className=""
              style={{
                color: "#000",
                font: "3.5em / 1",
                margin: "0 0 33px",
                paddingLeft: 20,
                position: "relative",
              }}
            >
              LDCE by the Numbers
            </h2>
            <div className="row">
              <div className="col-xs-6 col-md-3 col-sm-4">
                <div className="card__counts">
                  <div className="card__table">
                    <div className="card__tablecell hidden-xs">
                      <span className="sprite icon__ug" />
                    </div>
                    <div className="card__tablecell">
                      <div className="card__userdetails">
                        <h3 className="count" data-count={50000}>
                          0
                        </h3>
                        <p className="font__fontrols__style">
                          Undergraduate Students
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-sm-4">
                <div className="card__counts">
                  <div className="card__table">
                    <div className="card__tablecell hidden-xs">
                      <span className="sprite icon__pg" />
                    </div>
                    <div className="card__tablecell">
                      <div className="card__userdetails">
                        <h3 className="count" data-count={1000}>
                          0
                        </h3>
                        <p className="font__fontrols__style">
                          Postgraduate Students
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-sm-4">
                <div className="card__counts">
                  <div className="card__table">
                    <div className="card__tablecell hidden-xs">
                      <span className="sprite icon__globalworld" />
                    </div>
                    <div className="card__tablecell">
                      <div className="card__userdetails">
                        <h3 className="count" data-count={1000}>
                          0
                        </h3>
                        <p className="font__fontrols__style">
                          ME Research Scholars
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-sm-4">
                <div className="card__counts">
                  <div className="card__table">
                    <div className="card__tablecell hidden-xs">
                      <span className="sprite icon__rs" />
                    </div>
                    <div className="card__tablecell">
                      <div className="card__userdetails">
                        <h3 className="count" data-count={15}>
                          0
                        </h3>
                        <p className="font__fontrols__style">
                          PhD Research Scholars
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-sm-4">
                <div className="card__counts">
                  <div className="card__table">
                    <div className="card__tablecell hidden-xs">
                      <span className="sprite icon__faculty" />
                    </div>
                    <div className="card__tablecell">
                      <div className="card__userdetails">
                        <h3 className="count" data-count={280}>
                          0
                        </h3>
                        <p className="font__fontrols__style">Faculty</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-sm-4">
                <div className="card__counts">
                  <div className="card__table">
                    <div className="card__tablecell hidden-xs">
                      <span className="sprite icon__staff" />
                    </div>
                    <div className="card__tablecell">
                      <div className="card__userdetails">
                        <h3 className="count" data-count={150}>
                          0
                        </h3>
                        <p className="font__fontrols__style">Staff</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-sm-4">
                <div className="card__counts">
                  <div className="card__table">
                    <div className="card__tablecell hidden-xs">
                      <span className="sprite icon__patents" />
                    </div>
                    <div className="card__tablecell">
                      <div className="card__userdetails">
                        <h3 className="count" data-count={20}>
                          0
                        </h3>
                        <p className="font__fontrols__style">Patents</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-sm-4">
                <div className="card__counts">
                  <div className="card__table">
                    <div className="card__tablecell hidden-xs">
                      <span className="sprite icon__investment" />
                    </div>
                    <div className="card__tablecell">
                      <div className="card__userdetails">
                        <h3 className="count" data-count={100}>
                          0
                        </h3>
                        <p className="font__fontrols__style">Projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container-fluid donation py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 centerln"
            style={{ maxWidth: 800 }}
          >
            <hr />
            <h1 className="mb-0 text">EVENT CALENDER</h1>
            <hr />
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="donation-item">
                <img
                  src="https://blobimageshikshafinder.blob.core.windows.net/shikshafinder/get%20(3).jpeg"
                  className="img-fluid w-100 event-img"
                  alt="Image"
                />
                <div className="donation-content d-flex flex-column">
                  <a
                    href="#"
                    className="btn-hover-color display-6 text-white text-primary"
                  >
                    SSIP
                  </a>
                  <h4 className="text-white mb-4">31 AUG 2022</h4>
                  <p className="text-white mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                  <div className="donation-btn d-flex align-items-center justify-content-start">
                    <a
                      className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="donation-item">
                <img
                  src="https://blobimageshikshafinder.blob.core.windows.net/shikshafinder/get%20(4).jpeg"
                  className="img-fluid w-100 event-img"
                  alt="Image"
                />
                <div className="donation-content d-flex flex-column">
                  <a href="#" className="btn-hover-color display-6 text-white">
                    Skill India
                  </a>
                  <h4 className="text-white mb-4">22 May 2023</h4>
                  <p className="text-white mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                  <div className="donation-btn d-flex align-items-center justify-content-start">
                    <a
                      className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="donation-item">
                <img
                  src="https://blobimageshikshafinder.blob.core.windows.net/shikshafinder/get%20(1).jpeg"
                  className="img-fluid w-100 event-img"
                  alt="Image"
                />
                <div className="donation-content d-flex flex-column">
                  <a href="#" className="btn-hover-color display-6 text-white">
                    Vibrant Gujarat Summit
                  </a>
                  <h4 className="text-white mb-4">22th JAN 2024</h4>
                  <p className="text-white mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                  <div className="donation-btn d-flex align-items-center justify-content-start">
                    <a
                      className="btn-hover-bg btn btn-primary text-white py-2 px-4 btn-color"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-center">
                <a
                  className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                  href="#"
                >
                  All EVENTS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Subscribe Start */}
      <div className="container-fluid subscribe py-5">
        <div className="container text-center py-5">
          <div className="mx-auto text-center" style={{ maxWidth: 900 }}>
            {/* <h5 class="subscribe-title px-3">PLACEMENTS</h5> */}
            <h1 className="text-white mb-4">PLACEMENTS</h1>
            {/* <h1 class="text-white mb-3">PLACEMENTS</h1> */}
            <p className="text-white mb-4">→ Placement Cell Brochure</p>
            <p className="text-white mb-4">→ Placement Cell Activities</p>
            <p className="text-white mb-4">
              → Facilities For Placement Drive at LDCE
            </p>
            {/* <p class="text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam,
          architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium
          fugiat corrupti eum cum repellat a laborum quasi.
      </p> */}
            {/* <div class="position-relative mx-auto">
          <input class="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5" type="text"
              placeholder="Your email">
          <button type="button"
              class="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">Subscribe</button>
      </div> */}
          </div>
        </div>
      </div>
      {/* Subscribe End */}
      {/* Footer Start */}
      <div className="container-fluid footer py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                {/* <h4 class="mb-4 text-white">Get In Touch</h4> */}
                <img src="//img/ldce-logo.png" width="40%" alt="Logo" />
                <a href="">
                  <i className="" /> L.D. College of Engineering Opp Gujarat
                  University, Navrangpura, Ahmedabad - 380015. GUJARAT INDIA
                </a>
                {/* <a href=""><i class="fas fa-envelope me-2"></i> info@example.com</a>
                  <a href=""><i class="fas fa-phone me-2"></i> +012 345 67890</a>
                  <a href="" class="mb-3"><i class="fas fa-print me-2"></i> +012 345 67890</a> */}
                <div className="d-flex align-items-center">
                  {/* <i class="fas fa-share fa-2x text-white me-2"></i> */}
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">About</h4>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> History
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> ADMISSION PROCEDURE
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> DIRECTIONS
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> FEES &amp;
                  DESCRIPTION
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> COMMITIES
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Quick Links</h4>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> CAMPUS MAP
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" />
                  USEFUL LINKS
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> HDFC ONLINE PAYMENT
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> STUDENT INDUCTION
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> PROGRAM
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Important Info</h4>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> RIGHT TO INFO. ACT
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> MOU
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> TEQIP
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> MANDATORY DISCLOSURE
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> TENDER NOTICE
                </a>
              </div>
            </div>
            {/* <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="footer-item">
                  <div class="row gy-3 gx-2 mb-4">
                      <div class="col-xl-6">
                          <form>
                              <div class="form-floating">
                                  <select class="form-select bg-dark border" id="select1">
                                      <option value="1">Arabic</option>
                                      <option value="2">German</option>
                                      <option value="3">Greek</option>
                                      <option value="3">New York</option>
                                  </select>
                                  <label for="select1">English</label>
                              </div>
                          </form>
                      </div>
                      <div class="col-xl-6">
                          <form>
                              <div class="form-floating">
                                  <select class="form-select bg-dark border" id="select1">
                                      <option value="1">USD</option>
                                      <option value="2">EUR</option>
                                      <option value="3">INR</option>
                                      <option value="3">GBP</option>
                                  </select>
                                  <label for="select1">$</label>
                              </div>
                          </form>
                      </div>
                  </div>
                  <h4 class="text-white mb-3">Payments</h4>
                  <div class="footer-bank-card">
                      <a href="#" class="text-white me-2"><i class="fab fa-cc-amex fa-2x"></i></a>
                      <a href="#" class="text-white me-2"><i class="fab fa-cc-visa fa-2x"></i></a>
                      <a href="#" class="text-white me-2"><i class="fas fa-credit-card fa-2x"></i></a>
                      <a href="#" class="text-white me-2"><i class="fab fa-cc-mastercard fa-2x"></i></a>
                      <a href="#" class="text-white me-2"><i class="fab fa-cc-paypal fa-2x"></i></a>
                      <a href="#" class="text-white"><i class="fab fa-cc-discover fa-2x"></i></a>
                  </div>
              </div>
          </div> */}
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Copyright Start */}
      {/* <div class="container-fluid copyright text-body py-4">
  <div class="container">
      <div class="row g-4 align-items-center">
          <div class="col-md-6 text-center text-md-end mb-md-0">
              <i class="fas fa-copyright me-2"></i><a class="text-white" href="#">Your Site Name</a>, All right
              reserved.
          </div>
          <div class="col-md-6 text-center text-md-start"> */}
      {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
      {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
      {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
      {/* Designed By <a class="text-white" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a
                  href="https://themewagon.com">ThemeWagon</a>
          </div>
      </div>
  </div>
    </div>
    </div> */}
      {/* Copyright End */}
      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"
      >
        <i className="fa fa-arrow-up" />
      </a>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </>
  );
}

export default Index;
