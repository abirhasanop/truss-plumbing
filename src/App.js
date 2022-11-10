import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Routes';

function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
