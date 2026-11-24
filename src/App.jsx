
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import JobPage, { jobLoader } from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

import { toast } from 'react-toastify';

// Agregar un nuevo empleo
const addJob = async (newJob) => {
  const response = await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newJob),
  });

  if (!response.ok) {
    throw new Error('Error al agregar el empleo');
  }

  toast.success('Job added successfully!');
};

// Actualizar un empleo existente
const updateJob = async (updatedJob) => {
  const response = await fetch(`/api/jobs/${updatedJob.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedJob),
  });

  if (!response.ok) {
    throw new Error('Error al actualizar el empleo');
  }

  toast.success('Job updated successfully!');
};

// Eliminar un empleo existente
const deleteJob = async (jobId) => {
  const response = await fetch(`/api/jobs/${jobId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Error al eliminar el empleo');
  }
  
  return true;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />

      <Route path="jobs" element={<JobsPage />} />

      <Route
        path="add-job"
        element={<AddJobPage addJobSubmit={addJob} />}
      />

      <Route
        path="jobs/:id"
        element={<JobPage deleteJob={deleteJob} />}
        loader={jobLoader}
      />

      <Route
        path="jobs/edit/:id"
        element={<EditJobPage updateJobSubmit={updateJob} />}
        loader={jobLoader}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
