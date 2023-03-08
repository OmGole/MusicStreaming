import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Song from "./pages/Song";
import SongPage from "./pages/SongPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/songpage",
      element: <SongPage />,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
      {/* Music Streaming */}
      {/* --------- OLD ---------- */}
      {/* <Navbar></Navbar>
      <Hero imageSrc={bg1}></Hero>
      <Slider
        imageSrc={bg2}
        title={"Chase Aesthetics Brah"}
        subtitle={"We listen to hardstyle in the gym"}
      ></Slider>
      <Slider
        imageSrc={bg3}
        title={"Chase Aesthetics Brah"}
        subtitle={"We listen to hardstyle in the gym"}
      ></Slider> */}
      {/* --------- OLD ---------- */}

      {/* <Upload/> */}
      {/* <Register /> */}
      {/* <Login /> */}
    </div>
  );
};

export default App;
