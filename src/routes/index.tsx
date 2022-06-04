import { Route, Routes } from 'react-router-dom';

import KanbanPage from './KanbanPage';
import './routes.module.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<KanbanPage />} />
    </Routes>
  );
};

export default App;
