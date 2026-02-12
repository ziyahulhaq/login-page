import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./signup";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from "./Login";
import Home from "./Home";
import Dashboard from "./Dashboard";


function App() {
  return (
    <div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
