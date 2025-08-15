import { certifications } from '../data/certifications';

const Certifications = () => {
  return (
    <section id="certifications" className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
          Certifications &amp; Education
        </h2>
        <ul className="space-y-6">
          {certifications.map((cert, idx) => (
            <li
              key={idx}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600">
                {cert.issuer} &middot; {cert.issued}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
