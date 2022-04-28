import { useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap"

const PostForm = ({action, actionText, ...props}) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [mainContent, setMainContent] = useState(props.mainContent || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, mainContent})
    }

    return (
        <Form className="col-6 mx-5 px-5" onSubmit={handleSubmit}>
            <FormGroup className="py-3 col-6">
                <FormLabel>Title:</FormLabel>
                <FormControl 
                    placeholder="Enter Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </FormGroup>

            <FormGroup className="py-3 col-6">
                <FormLabel>Author:</FormLabel>
                <FormControl 
                    placeholder="Enter Author"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                />
            </FormGroup>

            <FormGroup className="py-3">
                <FormLabel>Published:</FormLabel>
                <Form.Control
                    value={publishedDate}
                    onChange={(e) => setPublishedDate(e.target.value)}
                    type='text'
                    placeholder='DD-MM-YYYY'
                    required
                />
            </FormGroup>

            <FormGroup className="py-3">
                <FormLabel>Short Description</FormLabel>
                <FormControl 
                    placeholder="Leave a comment here"
                    as="textarea"
                    rows={3}
                    value={shortDescription}
                    onChange={e => setShortDescription(e.target.value)}
                />
            </FormGroup>

            <FormGroup className="py-3">
                <FormLabel>Main Content</FormLabel>
                <FormControl 
                    placeholder="Leave a comment here"
                    as="textarea"
                    rows={9}
                    value={mainContent}
                    onChange={e => setMainContent(e.target.value)}
                />
            </FormGroup>

            <Button variant="primary" type="submit">
                {actionText}
            </Button>
        </Form>
    );
};

export default PostForm;