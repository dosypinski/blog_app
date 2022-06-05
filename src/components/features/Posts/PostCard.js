import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux"
import { getPostById } from "../../../redux/postsRedux"
import { NavLink } from "react-router-dom";
import dateToStr from "../../../utils/dateToStr";

const PostCard = ({ id }) => {
  const post = useSelector((state) => getPostById(state, id));

  return (
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
        <Card.Text as={NavLink} to={`/categories/${post.category}`}>
          <b>Category: </b>
          {post.category}
        </Card.Text>
        <Card.Text>{post.shortDescription}</Card.Text>
        <Card.Text dangerouslySetInnerHTML={{ __html: post.mainContent }} />
        <Button variant="primary" as={NavLink} to={`/post/${post.id}`}>
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;