import { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { getPostById, removePost } from "../../../../redux/postsRedux";
import dateToStr from "../../../../utils/dateToStr";


const SinglePost = () => {

    const dispatch = useDispatch();

    const { id } = useParams();
    const post = useSelector(state => getPostById(state, id));

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const removeHandler = e => {
        e.preventDefault();
        dispatch(removePost(id))
    };

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
              {dateToStr(post.publishedDate)}
            </p>
            <p>
              <b>Category: </b>
              {post.category}
            </p>
            <p dangerouslySetInnerHTML={{ __html: post.mainContent }} />
            </Col>
            <Col md="4">
              <Link key={post.id} to={`/post/edit/${post.id}`}>
                <Button variant="outline-info" className="m-3 ">
                  Edit
                </Button>
              </Link>
              <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
            </Col>
          </Row>
        </Container>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will completely remove this post from the app. Are you sure you want to do that?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={(e) => { handleClose(e); removeHandler(e)}}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
};

export default SinglePost;