
function App() {


  return (
    <div className="App">
      <button onClick={() => {
        window.initAR();
        window.animate();
      }}>Start</button>
    </div >
  );
}

export default App;
