import { useState } from "react"
import model1 from "./glbmodels/2d63b032-e82a-4a3c-85e6-2c870cb924a3.glb"
import model2 from "./glbmodels/3c36cca5-562b-48d5-978f-75f9936ad9a3.glb"
import model3 from "./glbmodels/617ff9eb-64ff-49c0-832d-e027ba72da52.glb"
import model4 from "./glbmodels/71786721-3ad5-432a-8683-6afb0f23268b.glb"
import model5 from "./glbmodels/7411f2e3-6b70-4f59-a2e8-57e792c7bc2b.glb"
import model6 from "./glbmodels/974086f4-d3d4-47f8-a315-c3cb5c55eacb.glb"
import model7 from "./glbmodels/abd26ac3-cfe9-4b68-b820-59bb0032ef2a.glb"
import model8 from "./glbmodels/af64d397-b782-461e-afb0-154f72225183.glb"
import model9 from "./glbmodels/cf1bfbef-d1b0-4561-8a16-5bfba83a98f5.glb"
import model10 from "./glbmodels/eb009490-e0de-4cf3-80dd-f676bd22fd92.glb"
import model11 from "./glbmodels/ee8415a6-c0c9-4e22-b59f-7a54b2419e71.glb"
function App() {
  const [count, setcount] = useState(0)
  const models = [
    model1, model2, model3, model4, model5, model6, model7, model8, model9, model10, model11
  ]


  const handleNext = () => {
    setcount((count + 1) % models.length)
  }

  return (
    <div className="App">


      <model-viewer
        src={models[count]}
        alt='model name'
        ar
        loading='lazy'
        camera-controls
        autoplay
        ar-scale="fixed"
        ar-modes="webxr scene-viewer quick-look"
        environment-image="neutral"
        style={{ width: "100vw", height: "80vh" }}
        id="model-viewer"
      >
      </model-viewer>
      <div style={{ height: "60px", width: "100vw", display: "flex", justifyContent: "center" }}>

        <button style={{ margin: "0 auto" }} onClick={handleNext}>
          Next
        </button>
      </ div>
    </div >
  );
}

export default App;
