import "./App.css";
import Presentacion from "./components/Presentacion";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="App">
        <div className="contenedor-principal">
          <h1>This is my Profile</h1>

          <Presentacion />
          <Card
            skills="HTML, CSS, JavasCript, React, Node.js, Express, MySQL"
            text="This site was builded with all of this Technologies"
          />
        </div>
      </div>
    </>
  );
}

export default App;
