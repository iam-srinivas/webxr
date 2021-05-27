
function App() {


  return (
    <div className="App">
      <button onClick={() => {
        window.init();
        window.animate();
      }}>Start</button>
    </div >
  );
}

export default App;
