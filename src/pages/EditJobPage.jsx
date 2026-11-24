
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditJobPage = ({ updateJobSubmit }) => {
  const job = useLoaderData();
  const navigate = useNavigate();

  // Estados inicializados con los datos del empleo
  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [location, setLocation] = useState(job.location);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [contactEmail, setContactEmail] = useState(
    job.company.contactEmail
  );
  const [contactPhone, setContactPhone] = useState(
    job.company.contactPhone
  );

  // Enviar el formulario actualizado
  const submitForm = async (e) => {
    e.preventDefault();

    const updatedJob = {
      id: job.id,
      title,
      type,
      description,
      location,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    await updateJobSubmit(updatedJob);

    navigate(`/jobs/${job.id}`);
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Edit Job
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Job Title
              </label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Frontend Developer"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Job Type
              </label>
              <select
                className="border rounded w-full py-2 px-3"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Remote</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Job description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Salary
              </label>
              <select
                className="border rounded w-full py-2 px-3"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option>Under $50K</option>
                <option>$50K - $60K</option>
                <option>$60K - $70K</option>
                <option>$70K - $80K</option>
                <option>$80K - $90K</option>
                <option>$90K - $100K</option>
                <option>$100K - $125K</option>
                <option>$125K - $150K</option>
                <option>Over $150K</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3"
                placeholder="Job location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Company Name
              </label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3"
                placeholder="Company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Company Description
              </label>
              <textarea
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Company description"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Contact Email
              </label>
              <input
                type="email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Contact Phone
              </label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3"
                placeholder="Phone number"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditJobPage;
