
import JobListing from './JobListing';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';

const JobListings = ({ isHome }) => {
  const [jobs, setJobs] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const apiUrl = isHome
      ? '/api/jobs?_page=1&_per_page=3'
      : '/api/jobs';

    const fetchJobs = async () => {
      setCargando(true);

      try {
        const resultado = await fetch(apiUrl);

        if (!resultado.ok) {
          throw new Error('Error al obtener los empleos');
        }

        const data = await resultado.json();

        if (isHome) {
          setJobs(data.data);
        } else {
          setJobs(data.reverse());
        }

      } catch (error) {
        console.log('Error trayendo datos:', error);
      } finally {
        setCargando(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">

        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>

        {cargando ? (
          <Spinner loading={cargando} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default JobListings;
