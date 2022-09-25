import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ExercisesRoutes from './routes/exercises';
import StartView from './pages';

function App() {
  const exercisesRoutes = ExercisesRoutes.map(r => <Route path={r.path} element={<r.component />} />)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/exercises'>
          {exercisesRoutes}
        </Route>
        <Route path='/' element={<StartView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
