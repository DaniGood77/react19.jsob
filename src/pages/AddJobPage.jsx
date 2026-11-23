
import { useNavigate } from 'react-router-dom';

const AddJobPage = ({ addJobSubmit }) => {
  const navigate = useNavigate();

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Add Job
        </h2>

        <p className="text-center">
          Aquí construiremos el formulario para agregar empleos.
        </p>
      </div>
    </section>
  );
};

export default AddJobPage;