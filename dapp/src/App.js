import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Song from './pages/Song'

const App = () => {
  return <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route element={<PrivateRoute role="user" />}> */}
          <Route path="/home" element={<Home />} />
          <Route exact path="/song" element={<Song />} />
          <Route exact path="/profile" element={<Profile />} />
        {/* </Route> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </>
};

export default App;
