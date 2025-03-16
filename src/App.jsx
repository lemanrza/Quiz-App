import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./Routes/Routes.jsx";
import Context from "./Services/Context/Context.jsx";

const router = createBrowserRouter(Routes);

function App() {
  return (
    <Context>
      <RouterProvider router={router} />
    </Context>
  );
}

export default App;