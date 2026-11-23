
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditJobPage = ({ updateJobSubmit }) => {
  const job = useLoaderData();
  const navigate = useNavigate();

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Edit Job
        </h2>

        <p className="text-center">
          Empleo seleccionado: {job.title}
        </p>
      </div>
    </section>
  );
};

export default EditJobPage;