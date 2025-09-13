import { RouterProvider } from "react-router";
import router from "./routes/route.js";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
