import { Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import TaskListPage from './pages/TaskListPage';
import CreateTaskPage from './pages/CreateTaskPage';
import UpdateTaskPage from './pages/UpdateTaskPage';

import * as S from './style.js';

function App() {
  return (
    <S.Globalcontainer>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TaskListPage />} />
          <Route path="/tasks/create" element={<CreateTaskPage />} />
          <Route path="/tasks/:id/update" element={<UpdateTaskPage />} />
        </Route>
      </Routes>
    </S.Globalcontainer>
  );
}

export default App;
