import './App.css';
import { ARCanvas, DefaultXRControllers } from '@react-three/xr'


function App() {
  return (
    <div className="App">
      <ARCanvas>
        <DefaultXRControllers />
      </ARCanvas>
    </div>
  );
}

export default App;
