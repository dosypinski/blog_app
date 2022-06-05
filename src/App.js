import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About/About";
import Categories from "./components/pages/Categories/Categories";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import AddPost from "./components/pages/Post/AddPost/AddPost";
import EditPost from "./components/pages/Post/EditPost/EditPost";
import SinglePost from "./components/pages/Post/SinglePost/SinglePost";
import CategoryView from "./components/views/CategoryView/CategoryView";
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";

const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/categories" element={<Categories />}/>
          <Route path="/categories/:categoryName" element={<CategoryView />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;