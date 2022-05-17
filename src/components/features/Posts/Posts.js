import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { getAllPosts } from "../../../redux/postsRedux"
import dateToStr from "../../../utils/dateToStr";


const Posts = () => {

    const posts = useSelector(getAllPosts)

    return (
      <Row>
        {posts.map((post) => (
          <Col className="sm-4 py-4 my-2">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <b>Author:</b> {post.author}
                </Card.Text>
                <Card.Text>
                  <b>Published: </b>
                  {dateToStr(post.publishedDate)}
                </Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Button variant="primary" as={NavLink} to={`/post/${post.id}`}>
                  Read more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
};

export default Posts;