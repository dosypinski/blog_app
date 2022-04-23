import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import AddPost from "./components/pages/Post/AddPost/AddPost";
import EditPost from "./components/pages/Post/EditPost/EditPost";
import SinglePost from "./components/pages/Post/SinglePost/SinglePost";

const App = () => {
  return (
    <main>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;