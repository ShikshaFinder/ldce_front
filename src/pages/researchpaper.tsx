import Image from "next/image";

export default function ResearchPapersPage() {
  return (
    <div className="min-vh-100 bg-light">
      {/* Header Section */}
      <header className="bg-primary text-white py-5">
        <div className="container">
          <h1 className="display-4">Evergreen College Research Papers</h1>
          <p className="lead">
            Advancing knowledge through innovative research across multiple
            disciplines. Our faculty and students are at the forefront of
            groundbreaking discoveries.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-5">
        {/* Key Research Areas */}
        <section className="mb-5">
          <h2 className="h3 mb-4">Key Research Areas</h2>
          <div className="row">
            {researchAreas.map((area, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100">
                  <Image
                    src={area.image}
                    alt={area.title}
                    width={400}
                    height={225}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{area.title}</h5>
                    <p className="card-text">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Publications */}
        <section className="mb-5">
          <h2 className="h3 mb-4">Recent Publications</h2>
          {recentPublications.map((paper, index) => (
            <div key={index} className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{paper.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {paper.authors.join(", ")} - {paper.date}
                </h6>
                <p className="card-text">{paper.abstract}</p>
                <div className="mt-3">
                  {paper.keywords.map((keyword, kidx) => (
                    <span key={kidx} className="badge bg-secondary me-2">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="bg-light p-4 rounded shadow-sm text-center">
          <h2 className="h4 mb-3">Explore Our Research</h2>
          <p className="lead">
            Interested in learning more about our research initiatives or
            collaborating with our team? We're always looking for passionate
            individuals and organizations to join us in our quest for knowledge.
          </p>
          <button >Contact Research Department</button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-3 text-center">
        <div className="container">
          <p>&copy; 2024 Evergreen College. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const researchAreas = [
  {
    title: "Environmental Science",
    image: "/img/20240227_081206 (1).jpg",
    description:
      "Focusing on climate change, biodiversity, and sustainable resource management.",
  },
  {
    title: "Artificial Intelligence",
    image: "/img/20240309_184021.jpg",
    description:
      "Developing cutting-edge AI technologies for real-world applications.",
  },
  {
    title: "Biomedical Engineering",
    image: "/img/20240224_174428.jpg",
    description:
      "Innovating at the intersection of biology, medicine, and engineering.",
  },
];

const recentPublications = [
  {
    title:
      "The Impact of Urban Green Spaces on Air Quality: A Multi-City Study",
    authors: ["Dr. Emily Chen", "Prof. Michael Johnson"],
    date: "March 2024",
    abstract:
      "This study examines the correlation between urban green spaces and air quality improvements across 50 major cities worldwide.",
    keywords: ["Urban Planning", "Air Quality", "Environmental Science"],
  },
  {
    title: "Advancements in Natural Language Processing for Medical Diagnosis",
    authors: ["Dr. Sarah Lee", "Dr. David Brown", "Ms. Rachel Taylor"],
    date: "February 2024",
    abstract:
      "Our research presents a novel approach to using NLP techniques for improving the accuracy of preliminary medical diagnoses.",
    keywords: ["Artificial Intelligence", "Healthcare", "NLP"],
  },
  {
    title:
      "Biodegradable Polymers in Orthopedic Implants: A Comprehensive Review",
    authors: ["Prof. Amanda Martinez", "Dr. Robert Chen"],
    date: "January 2024",
    abstract:
      "This paper reviews recent advancements in biodegradable polymers and their potential applications in orthopedic implants.",
    keywords: ["Biomedical Engineering", "Materials Science", "Orthopedics"],
  },
];
