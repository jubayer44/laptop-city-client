import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='font-sans'>
        <RouterProvider router={router}/>
        <Toaster/>
    </div>
  );
}

export default App;
