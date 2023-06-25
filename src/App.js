import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./store";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
};

export default App;
