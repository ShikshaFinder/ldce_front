import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";

export default function PatentDemonstrationPage() {
  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 font-weight-bold mb-3">Our Patent Achievements</h1>
        <p className="lead text-muted">
          Showcasing innovation and intellectual property at our college
        </p>
      </header>

      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h2 className="card-title display-5">Patents Registered</h2>
              <p className="display-3 text-primary font-weight-bold">127</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h2 className="card-title display-5">Patents Filed</h2>
              <p className="display-3 text-primary font-weight-bold">215</p>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-5">
        <h2 className="text-center font-weight-bold mb-4">Our Patent Holders</h2>
        <div className="row">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4">
              <Image
                src={`/placeholder.svg?height=150&width=150`}
                alt={`Patent Holder ${index + 1}`}
                width={150}
                height={150}
                className="rounded-circle mb-2"
              />
              <p className="font-weight-medium">Patent Holder {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="text-center font-weight-bold mb-4">College Innovation Brief</h2>
        <div className="card">
          <div className="card-body">
            <p className="lead">
              Our college has been at the forefront of innovation, consistently pushing the boundaries of what's possible in various fields of study. From groundbreaking research in renewable energy to revolutionary advancements in artificial intelligence, our faculty and students have been instrumental in developing technologies that shape the future.
            </p>
            <p className="lead mt-3">
              Our patent portfolio spans diverse areas including biotechnology, computer science, engineering, and environmental sciences. These patents not only represent our commitment to innovation but also our dedication to solving real-world problems and contributing to the global knowledge economy.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-center font-weight-bold mb-4">Featured Patents</h2>
        <div className="row">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Image
                  src={`/placeholder.svg?height=200&width=400`}
                  alt={`Featured Patent ${index + 1}`}
                  width={400}
                  height={200}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">Patent Title {index + 1}</h3>
                  <p className="card-text text-muted">
                    Brief description of the patent and its potential applications in the real world. This innovative technology promises to revolutionize its field.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
