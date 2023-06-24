import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={routes} />
      </header>
    </div>
  );
}

export default App;
