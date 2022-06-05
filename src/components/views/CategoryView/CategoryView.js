import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFilteredPosts } from "../../../redux/postsRedux";
import PostCard from "../../features/Posts/PostCard";

const CategoryView = () => {
  const { categoryName } = useParams();
  const posts = useSelector((state) => getFilteredPosts(state, categoryName));

  if (posts.length === 0)
    return (
      <Container>
        <h2>Category: {categoryName}</h2>
        <p>No posts in this category ...</p>
      </Container>
    );
  return (
    <Container>
      <h2>Category: {categoryName} </h2>
      <section className="d-flex justify-content-between">
        <Row>
          {posts.map((post) => (
            <Col key={post.id} className="sm-4 py-4 my-2">
              <PostCard id={post.id} />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default CategoryView;