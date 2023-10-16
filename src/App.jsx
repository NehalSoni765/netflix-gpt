import { Provider, useDispatch } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./redux/appStore";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/", //user authenticate goes to this page
      element: <Browse />,
    },
  ]);

  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
