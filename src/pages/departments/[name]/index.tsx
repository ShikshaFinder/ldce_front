import Image from "next/image";

export default function DepartmentPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Hero Section */}
      <section
        className="position-relative d-flex justify-content-center align-items-center vh-50"
        style={{ minHeight: "400px" }}
      >
        <Image
          src="/img/20231218_163919.jpg"
          alt="Computer Science Department"
          fill
          className="position-absolute w-100 h-100"
          style={{ objectFit: "cover", zIndex: 0 }}
        />
        <div
          className="position-absolute w-100 h-100 bg-dark opacity-50"
          style={{ zIndex: 10 }}
        ></div>
        <h1
          className="position-relative text-white text-center fw-bold display-4"
          style={{ zIndex: 20 }}
        >
          Department of Computer Science
        </h1>
      </section>

      {/* Introduction */}
      <section className="container py-5">
        <p className="text-center fs-4 mx-auto" style={{ maxWidth: "800px" }}>
          Welcome to the Department of Computer Science, where innovation meets
          education. Our world-class faculty, cutting-edge research, and
          state-of-the-art facilities provide students with an unparalleled
          learning experience in the fast-paced world of technology.
        </p>
      </section>

      {/* Vision and Mission */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Our Vision</h5>
                </div>
                <div className="card-body">
                  <p>
                    To be a globally recognized center of excellence in computer
                    science education and research, fostering innovation and
                    producing leaders who shape the digital future.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Our Mission</h5>
                </div>
                <div className="card-body">
                  <p>
                    To provide high-quality education, conduct cutting-edge
                    research, and promote innovation in computer science,
                    preparing students to be ethical, skilled, and adaptable
                    professionals in a rapidly evolving technological landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PEOs and PSOs */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-4">
          Program Objectives and Outcomes
        </h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">
                  Program Educational Objectives (PEOs)
                </h5>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>
                    • Graduates will excel in professional careers and/or higher
                    education in computer science and related fields.
                  </li>
                  <li>
                    • Graduates will demonstrate technical competence and
                    leadership in their chosen fields.
                  </li>
                  <li>
                    • Graduates will engage in lifelong learning and
                    professional development.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Program Specific Outcomes (PSOs)</h5>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>
                    • Apply computer science principles to design, develop, and
                    evaluate computing systems.
                  </li>
                  <li>
                    • Analyze complex computing problems and create innovative
                    solutions using current techniques and tools.
                  </li>
                  <li>
                    • Communicate effectively and work collaboratively in
                    multidisciplinary teams.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placements */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Placements</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title text-center">95%</h5>
                </div>
                <div className="card-body text-center">
                  <p>Placement Rate</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title text-center">$85,000</h5>
                </div>
                <div className="card-body text-center">
                  <p>Average Starting Salary</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title text-center">200+</h5>
                </div>
                <div className="card-body text-center">
                  <p>Partner Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-4">Life in Our Department</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="position-relative aspect-ratio ratio-1x1">
              <Image
                src="/img/20231218_175604.jpg"
                alt="Students collaborating in a computer lab"
                fill
                className="rounded img-fluid"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="position-relative aspect-ratio ratio-1x1">
              <Image
                src="/img/20231218_175604.jpg"
                alt="Annual tech symposium"
                fill
                className="rounded img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="position-relative aspect-ratio ratio-1x1">
              <Image
                src="/img/20231218_175604.jpg"
                alt="Professor giving a lecture on artificial intelligence"
                fill
                className="rounded img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="position-relative aspect-ratio ratio-1x1">
              <Image
                src="/img/20231218_175604.jpg"
                alt="Student presenting their research project"
                fill
                className="rounded img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="position-relative aspect-ratio ratio-1x1">
              <Image
                src="/img/20231218_175604.jpg"
                alt="Robotics competition"
                fill
                className="rounded img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-5 text-center">
        <h2 className="fw-bold mb-3">Ready to Join Us?</h2>
        <p className="mb-4 text-muted">
          Explore our programs and take the first step towards a rewarding
          career in computer science.
        </p>
        <a href="#" className="btn btn-lg btn-primary">
          Explore Our Programs
        </a>
      </section>
    </div>
  );
}
