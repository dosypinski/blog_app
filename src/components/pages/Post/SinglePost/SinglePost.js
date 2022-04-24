import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { getPostById } from "../../../../redux/postsRedux";


const SinglePost = () => {
    
    const { id } = useParams();
    const post = useSelector(state => getPostById(state, id));

    if (!post) return <Navigate to='/' />;
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="4">
              <h2 className="py-2">{post.title}</h2>
              <p className="pt-3">
              <b>Author: </b>
              {post.author}
            </p>
            <p>
              <b>Published: </b>
              {post.publishedDate}
            </p>
            <p>{post.content}</p>
            </Col>
            <Col md="4">
              <Link key={post.id} to={`/post/edit/${post.id}`}>
                <Button variant="outline-info" className="m-3 ">
                  Edit
                </Button>
              </Link>
              <Button variant="outline-danger">Delete</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default SinglePost;