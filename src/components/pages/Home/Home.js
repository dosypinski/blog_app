import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Posts from "../../features/Posts/Posts";

const Home = () => {
    return (
      <Container>
        <section className="d-flex justify-content-between">
          <h2>All Posts</h2>
          <Button variant="outline-info" as={NavLink} to="/post/add">
            Add post
          </Button>
        </section>
        <section>
            <Posts />
        </section>
      </Container>
    );
};

export default Home;