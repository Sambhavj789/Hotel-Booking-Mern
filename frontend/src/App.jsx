import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import UserContext from "./context/UserContext";

function App() {
  return <UserContext>
            <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
  </UserContext>
}

export default App;