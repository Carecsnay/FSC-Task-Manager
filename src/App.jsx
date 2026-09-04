import { Toaster } from 'sonner';
import Sidebar from './components/Sidebar';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="flex">
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            color: '#35383E',
          },
        }}
      />
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
