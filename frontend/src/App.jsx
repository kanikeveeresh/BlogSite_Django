import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Signup from "./components/Signup/Signup"
import Login from "./components/login/Login"
import CreateBlog from "./components/createBlog/CreateBlog"
import BlogDetail from "./components/blogDetail/BlogDetail"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
