import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux"
import { getAllPosts } from "../../../redux/postsRedux"
import PostCard from "./PostCard";


const Posts = () => {

    const posts = useSelector(getAllPosts)

    return (
      <Row>
        {posts.map((post) => (
          <Col key={post.id} className="sm-4 py-4 my-2">
            <PostCard id={post.id} />
          </Col>
        ))}
      </Row>
    );
};

export default Posts;