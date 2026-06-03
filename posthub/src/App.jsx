import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts((prevPosts )=> [newPost, ...prevPosts]);
  };
    const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
     <div
      className={
        theme === "light"
          ? "bg-light text-dark min-vh-100"
          : "bg-dark text-light min-vh-100"
      }
    >
    <BrowserRouter>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Feed posts={posts} addPost={addPost}  setPosts={setPosts}/>}  
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;