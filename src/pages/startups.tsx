import Image from "next/image";
import { ArrowRight, Award, Briefcase, FileText } from "lucide-react";

export default function StartupDemoPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="d-flex align-items-center justify-content-between px-4 py-2 bg-light">
        <Link className="d-flex align-items-center" href="#">
          <MortarboardIcon className="h-6 w-6 me-2" />
          <span className="visually-hidden">Acme College</span>
        </Link>
        <nav className="d-flex gap-3">
          <Link className="text-decoration-none" href="#">
            Home
          </Link>
          <Link className="text-decoration-none" href="#">
            About
          </Link>
          <Link className="text-decoration-none" href="#">
            Startups
          </Link>
          <Link className="text-decoration-none" href="#">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-grow-1">
        <section className="bg-dark text-light text-center py-5">
          <div className="container">
            <h1 className="display-4 fw-bold">Empowering Student Startups</h1>
            <p className="lead">Fostering innovation and entrepreneurship in our college community</p>
            <Button className="btn btn-primary btn-lg">
              Learn More <ArrowRight className="ms-2" />
            </Button>
          </div>
        </section>

        <section className="py-5 bg-light text-center">
          <div className="container">
            <h2 className="display-5 fw-bold mb-4">Our Impact</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <Briefcase className="h-12 w-12 text-primary mb-3" />
                    <h3 className="h4">50+</h3>
                    <p className="text-muted">Startups Registered under SSIP</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <Award className="h-12 w-12 text-success mb-3" />
                    <h3 className="h4">30+</h3>
                    <p className="text-muted">Startups Registered under Startup India</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <FileText className="h-12 w-12 text-warning mb-3" />
                    <h3 className="h4">25</h3>
                    <p className="text-muted">Patents Filed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container text-center">
            <h2 className="display-5 fw-bold mb-4">Featured Startups</h2>
            <div className="row g-4">
              {[1, 2, 3].map((i) => (
                <div className="col-md-4" key={i}>
                  <div className="card h-100">
                    <Image
                      alt={`Startup ${i}`}
                      className="card-img-top"
                      height={240}
                      src={`/placeholder.svg?height=240&width=360`}
                      width={360}
                    />
                    <div className="card-body">
                      <h3 className="h5">Startup {i}</h3>
                      <p className="text-muted">A brief description of Startup {i} and their innovative solution.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="display-5 fw-bold mb-4">Achievements</h2>
            <div className="row g-4">
              {[1, 2, 3].map((i) => (
                <div className="col-md-4" key={i}>
                  <div className="card h-100">
                    <Image
                      alt={`Achievement ${i}`}
                      className="card-img-top"
                      height={160}
                      src={`/placeholder.svg?height=160&width=320`}
                      width={320}
                    />
                    <div className="card-body">
                      <h3 className="h5">Achievement {i}</h3>
                      <p className="text-muted">
                        Description of a significant achievement or award received by one of our startups.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="d-flex flex-column flex-sm-row align-items-center justify-content-between py-3 bg-light border-top">
        <p className="mb-2 mb-sm-0 text-muted">&copy; 2024 Acme College. All rights reserved.</p>
        <nav className="d-flex gap-3">
          <Link className="text-muted text-decoration-none" href="#">
            Terms of Service
          </Link>
          <Link className="text-muted text-decoration-none" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MortarboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function Link({ href, children, ...props }) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

function Button({ children, className, ...props }) {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
}
